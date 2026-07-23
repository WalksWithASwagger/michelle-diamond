import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const ENQUIRY_STATUSES = ["new", "reviewing", "replied", "archived"] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

export type AdminEnquiry = {
  id: string;
  createdAt: string;
  category: string;
  name: string;
  organization: string | null;
  email: string;
  phone: string | null;
  project: string;
  dates: string | null;
  location: string | null;
  coverage: string | null;
  imageUse: string | null;
  deadline: string | null;
  budget: string | null;
  context: string | null;
  status: EnquiryStatus;
};

async function isAdmin(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  userId: string,
): Promise<boolean> {
  const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (error) return false;
  return Boolean(data);
}

// Called from the admin shell to decide whether to render admin UI at all.
export const getMyRole = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ isAdmin: boolean; email: string | null; userId: string }> => {
    const admin = await isAdmin(context.supabase, context.userId);
    return {
      isAdmin: admin,
      email: (context.claims?.email as string | undefined) ?? null,
      userId: context.userId,
    };
  });

// First-time bootstrap: allows the first signed-in user to become admin
// ONLY if there are currently no admins in the system.
export const claimInitialAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count, error: countError } = await supabaseAdmin
      .from("user_roles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");
    if (countError) throw countError;
    if ((count ?? 0) > 0) {
      return { ok: false as const, reason: "already_claimed" as const };
    }
    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: context.userId, role: "admin" });
    if (error) throw error;
    return { ok: true as const };
  });

export const listEnquiries = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<AdminEnquiry[]> => {
    if (!(await isAdmin(context.supabase, context.userId))) throw new Error("Forbidden");
    const { data, error } = await context.supabase
      .from("commission_enquiries")
      .select(
        "id, created_at, category, name, organization, email, phone, project, dates, location, coverage, image_use, deadline, budget, context, status",
      )
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) throw error;
    return (data ?? []).map((r) => ({
      id: r.id,
      createdAt: r.created_at,
      category: r.category,
      name: r.name,
      organization: r.organization,
      email: r.email,
      phone: r.phone,
      project: r.project,
      dates: r.dates,
      location: r.location,
      coverage: r.coverage,
      imageUse: r.image_use,
      deadline: r.deadline,
      budget: r.budget,
      context: r.context,
      status: (r.status as EnquiryStatus) ?? "new",
    }));
  });

export const updateEnquiryStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), status: z.enum(ENQUIRY_STATUSES) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    if (!(await isAdmin(context.supabase, context.userId))) throw new Error("Forbidden");
    const { error } = await context.supabase
      .from("commission_enquiries")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw error;
    return { ok: true };
  });

export const deleteEnquiry = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    if (!(await isAdmin(context.supabase, context.userId))) throw new Error("Forbidden");
    const { error } = await context.supabase
      .from("commission_enquiries")
      .delete()
      .eq("id", data.id);
    if (error) throw error;
    return { ok: true };
  });

export const getAdminStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    if (!(await isAdmin(context.supabase, context.userId))) throw new Error("Forbidden");

    const [{ count: newCount }, { count: totalCount }, { data: galleryRows }] = await Promise.all([
      context.supabase
        .from("commission_enquiries")
        .select("id", { count: "exact", head: true })
        .eq("status", "new"),
      context.supabase.from("commission_enquiries").select("id", { count: "exact", head: true }),
      context.supabase.from("gallery_images").select("category, published"),
    ]);

    const galleryCounts: Record<string, { total: number; published: number }> = {
      opera: { total: 0, published: 0 },
      portrait: { total: 0, published: 0 },
      event: { total: 0, published: 0 },
    };
    for (const row of galleryRows ?? []) {
      const bucket = galleryCounts[row.category as string];
      if (!bucket) continue;
      bucket.total += 1;
      if (row.published) bucket.published += 1;
    }

    return {
      enquiries: { newCount: newCount ?? 0, total: totalCount ?? 0 },
      gallery: galleryCounts,
    };
  });

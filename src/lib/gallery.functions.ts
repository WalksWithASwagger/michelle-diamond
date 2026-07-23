import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";

export const GALLERY_CATEGORIES = ["opera", "portrait", "event"] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type PublicGalleryImage = {
  id: string;
  category: GalleryCategory;
  title: string | null;
  caption: string | null;
  altText: string;
  url: string;
  sortOrder: number;
};

export type AdminGalleryImage = PublicGalleryImage & {
  imagePath: string;
  published: boolean;
  createdAt: string;
};

const SIGNED_URL_TTL = 60 * 60 * 6; // 6h

function createServerPublicClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Backend is not configured");
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

async function signPaths(paths: string[]): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  if (paths.length === 0) return map;
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.storage
    .from("gallery")
    .createSignedUrls(paths, SIGNED_URL_TTL);
  if (error) throw error;
  for (const item of data ?? []) {
    if (item.signedUrl && item.path) map.set(item.path, item.signedUrl);
  }
  return map;
}

// ---------------- Public list ----------------

export const listGalleryImages = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ category: z.enum(GALLERY_CATEGORIES) }).parse(input),
  )
  .handler(async ({ data }): Promise<PublicGalleryImage[]> => {
    const supabase = createServerPublicClient();
    const { data: rows, error } = await supabase
      .from("gallery_images")
      .select("id, category, title, caption, alt_text, image_path, sort_order, published")
      .eq("category", data.category)
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (error) throw error;

    const paths = (rows ?? []).map((r) => r.image_path);
    const urlMap = await signPaths(paths);

    return (rows ?? [])
      .map((r) => ({
        id: r.id,
        category: r.category as GalleryCategory,
        title: r.title,
        caption: r.caption,
        altText: r.alt_text,
        sortOrder: r.sort_order,
        url: urlMap.get(r.image_path) ?? "",
      }))
      .filter((r) => r.url);
  });

// ---------------- Admin ----------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function assertAdmin(supabase: any, userId: string) {
  const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (error) throw new Error("Could not verify role");
  if (!data) throw new Error("Forbidden");
}

export const adminListGalleryImages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ category: z.enum(GALLERY_CATEGORIES) }).parse(input),
  )
  .handler(async ({ data, context }): Promise<AdminGalleryImage[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await assertAdmin(context.supabase as any, context.userId);
    const { data: rows, error } = await context.supabase
      .from("gallery_images")
      .select("id, category, title, caption, alt_text, image_path, sort_order, published, created_at")
      .eq("category", data.category)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });
    if (error) throw error;

    const paths = (rows ?? []).map((r) => r.image_path);
    const urlMap = await signPaths(paths);

    return (rows ?? []).map((r) => ({
      id: r.id,
      category: r.category as GalleryCategory,
      title: r.title,
      caption: r.caption,
      altText: r.alt_text,
      imagePath: r.image_path,
      published: r.published,
      sortOrder: r.sort_order,
      createdAt: r.created_at,
      url: urlMap.get(r.image_path) ?? "",
    }));
  });

const upsertSchema = z.object({
  id: z.string().uuid().optional(),
  category: z.enum(GALLERY_CATEGORIES),
  imagePath: z.string().min(1).max(500),
  title: z.string().trim().max(200).optional().nullable(),
  caption: z.string().trim().max(1200).optional().nullable(),
  altText: z.string().trim().max(400),
  sortOrder: z.number().int().min(0).max(100000).optional(),
  published: z.boolean().optional(),
});

export const upsertGalleryImage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => upsertSchema.parse(input))
  .handler(async ({ data, context }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await assertAdmin(context.supabase as any, context.userId);

    if (data.id) {
      const { error } = await context.supabase
        .from("gallery_images")
        .update({
          title: data.title ?? null,
          caption: data.caption ?? null,
          alt_text: data.altText,
          sort_order: data.sortOrder ?? 0,
          published: data.published ?? true,
        })
        .eq("id", data.id);
      if (error) throw error;
      return { ok: true, id: data.id };
    }

    const { data: inserted, error } = await context.supabase
      .from("gallery_images")
      .insert({
        category: data.category,
        image_path: data.imagePath,
        title: data.title ?? null,
        caption: data.caption ?? null,
        alt_text: data.altText,
        sort_order: data.sortOrder ?? 0,
        published: data.published ?? true,
      })
      .select("id")
      .single();
    if (error) throw error;
    return { ok: true, id: inserted.id };
  });

export const deleteGalleryImage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().uuid(), imagePath: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await assertAdmin(context.supabase as any, context.userId);
    const { error } = await context.supabase.from("gallery_images").delete().eq("id", data.id);
    if (error) throw error;
    // Best-effort remove file (only if no other row references the same path)
    const { count } = await context.supabase
      .from("gallery_images")
      .select("id", { count: "exact", head: true })
      .eq("image_path", data.imagePath);
    if ((count ?? 0) === 0) {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await supabaseAdmin.storage.from("gallery").remove([data.imagePath]);
    }
    return { ok: true };
  });

export const reorderGalleryImages = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        items: z
          .array(z.object({ id: z.string().uuid(), sortOrder: z.number().int().min(0).max(100000) }))
          .max(500),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await assertAdmin(context.supabase as any, context.userId);
    for (const item of data.items) {
      const { error } = await context.supabase
        .from("gallery_images")
        .update({ sort_order: item.sortOrder })
        .eq("id", item.id);
      if (error) throw error;
    }
    return { ok: true };
  });

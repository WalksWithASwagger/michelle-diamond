import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const ENQUIRY_CATEGORIES = [
  "Opera production",
  "Rehearsal or process",
  "Artist portraits or publicity",
  "Season campaign",
  "Gala or opening night",
  "Cultural or corporate event",
  "Private event",
  "Portrait commission",
  "Something else",
] as const;

const enquirySchema = z.object({
  category: z.enum(ENQUIRY_CATEGORIES),
  name: z.string().trim().min(1, "Please share your name").max(120),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Please share a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  project: z.string().trim().min(1, "Tell Michelle what is being made").max(2000),
  dates: z.string().trim().max(200).optional().or(z.literal("")),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  coverage: z.string().trim().max(400).optional().or(z.literal("")),
  imageUse: z.string().trim().max(400).optional().or(z.literal("")),
  deadline: z.string().trim().max(200).optional().or(z.literal("")),
  budget: z.string().trim().max(200).optional().or(z.literal("")),
  context: z.string().trim().max(4000).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      throw new Error("MAILTO_FALLBACK");
    }

    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("commission_enquiries").insert({
      category: data.category,
      name: data.name,
      organization: data.organization || null,
      email: data.email,
      phone: data.phone || null,
      project: data.project,
      dates: data.dates || null,
      location: data.location || null,
      coverage: data.coverage || null,
      image_use: data.imageUse || null,
      deadline: data.deadline || null,
      budget: data.budget || null,
      context: data.context || null,
    });

    if (error) {
      console.error("submitEnquiry insert error", error);
      throw new Error("We could not save your enquiry. Please try again shortly.");
    }

    return { ok: true as const };
  });

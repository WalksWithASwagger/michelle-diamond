import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, useEffect } from "react";
import { z } from "zod";

import { submitEnquiry, ENQUIRY_CATEGORIES } from "@/lib/enquiries.functions";
import { siteCopy } from "@/lib/portfolio-data";

const searchSchema = z.object({
  type: z.enum(ENQUIRY_CATEGORIES).optional(),
});

export const Route = createFileRoute("/commission")({
  validateSearch: (input) => {
    const parsed = searchSchema.safeParse(input);
    return parsed.success ? parsed.data : {};
  },
  head: () => ({
    meta: [
      { title: "Commission Michelle — Diamond's Edge Photography" },
      {
        name: "description",
        content:
          "Tell Michelle what is being made. Share the production, artist, occasion, or audience. She will respond with a considered approach to coverage, timing, usage, and delivery.",
      },
      { property: "og:title", content: "Commission Michelle — Diamond's Edge Photography" },
      {
        property: "og:description",
        content:
          "Tell Michelle what is being made. Share the production, artist, occasion, or audience.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: CommissionPage,
});

function buildMailto(form: FormState): string {
  const body = [
    `Occasion: ${form.category}`,
    `Name: ${form.name}`,
    form.organization ? `Organization: ${form.organization}` : null,
    `Email: ${form.email}`,
    form.phone ? `Phone: ${form.phone}` : null,
    "",
    "What is being made:",
    form.project,
    "",
    form.dates ? `Dates: ${form.dates}` : null,
    form.location ? `Location: ${form.location}` : null,
    form.coverage ? `Coverage: ${form.coverage}` : null,
    form.imageUse ? `Image use: ${form.imageUse}` : null,
    form.deadline ? `Deadline: ${form.deadline}` : null,
    form.budget ? `Budget: ${form.budget}` : null,
    form.context ? `\nContext:\n${form.context}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const subject = encodeURIComponent(`Commission enquiry — ${form.category}`);
  return `mailto:${siteCopy.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

type FormState = {
  category: (typeof ENQUIRY_CATEGORIES)[number];
  name: string;
  organization: string;
  email: string;
  phone: string;
  project: string;
  dates: string;
  location: string;
  coverage: string;
  imageUse: string;
  deadline: string;
  budget: string;
  context: string;
};

const emptyForm: FormState = {
  category: "Opera production",
  name: "",
  organization: "",
  email: "",
  phone: "",
  project: "",
  dates: "",
  location: "",
  coverage: "",
  imageUse: "",
  deadline: "",
  budget: "",
  context: "",
};

function CommissionPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const submit = useServerFn(submitEnquiry);

  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    category: search.type ?? "Opera production",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (search.type && search.type !== form.category) {
      setForm((f) => ({ ...f, category: search.type! }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.type]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("submitting");
    try {
      await submit({ data: form });
      setStatus("done");
      setForm({ ...emptyForm, category: form.category });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      // Offline / no Supabase — open a prefilled mailto so Michelle still gets the enquiry.
      if (msg.includes("MAILTO_FALLBACK") || msg.includes("Backend is not configured")) {
        window.location.href = buildMailto(form);
        setStatus("idle");
        setErrorMessage(
          `Opening your email app to send Michelle at ${siteCopy.email}. If nothing opens, email her directly.`,
        );
        return;
      }
      setStatus("error");
      setErrorMessage(msg);
    }
  }

  if (status === "done") {
    return (
      <div className="bg-ivory text-ink">
        <div className="mx-auto max-w-[900px] px-6 py-32 lg:py-48 text-center">
          <p className="meta-label">Received</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
            Thank you.
          </h1>
          <p className="mx-auto mt-10 max-w-xl font-body text-lg leading-relaxed text-ink/80">
            Michelle has received the details and will respond personally within the
            stated response period. If you don&apos;t hear back within two working days,
            a follow-up note is always welcome.
          </p>
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70"
            >
              Return home
            </Link>
            <Link
              to="/opera"
              className="inline-flex items-center border-b border-ink/40 pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-ink/70 hover:text-ink"
            >
              View the opera work
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-14 lg:px-12 lg:pt-24">
          <p className="meta-label">Commission Michelle</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.5rem] max-w-3xl">
            What are we <span className="italic text-oxblood">making?</span>
          </h1>
          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink/80">
            Tell Michelle what is being produced, who the images are for, and what they
            need to accomplish. She will respond with a considered approach to coverage,
            timing, usage, and delivery.
          </p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12 lg:py-24">
        {/* Category */}
        <fieldset className="mb-16">
          <legend className="meta-label mb-6">01 · The occasion</legend>
          <div className="flex flex-wrap gap-3">
            {ENQUIRY_CATEGORIES.map((c) => {
              const selected = form.category === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    update("category", c);
                    navigate({ to: "/commission", search: { type: c }, replace: true });
                  }}
                  className={`border px-5 py-3 font-sans-ui text-[12px] tracking-[0.18em] uppercase transition-colors ${
                    selected
                      ? "bg-oxblood text-primary-foreground border-oxblood"
                      : "border-ink/25 text-ink/75 hover:border-oxblood hover:text-oxblood"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Details */}
        <fieldset>
          <legend className="meta-label mb-8">02 · The details</legend>
          <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
            <Field label="Your name" required error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                maxLength={120}
                required
                className={inputClass}
              />
            </Field>
            <Field label="Organization or company" error={errors.organization}>
              <input
                type="text"
                value={form.organization}
                onChange={(e) => update("organization", e.target.value)}
                maxLength={160}
                className={inputClass}
              />
            </Field>
            <Field label="Email" required error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                maxLength={255}
                required
                className={inputClass}
              />
            </Field>
            <Field label="Phone (optional)" error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                maxLength={40}
                className={inputClass}
              />
            </Field>
            <Field
              label="Production, project, or occasion"
              required
              error={errors.project}
              full
            >
              <textarea
                value={form.project}
                onChange={(e) => update("project", e.target.value)}
                maxLength={2000}
                rows={3}
                required
                className={inputClass}
                placeholder="e.g. New production of Rigoletto — first company staging in ten years"
              />
            </Field>
            <Field label="Dates" error={errors.dates}>
              <input
                type="text"
                value={form.dates}
                onChange={(e) => update("dates", e.target.value)}
                maxLength={200}
                className={inputClass}
                placeholder="e.g. Rehearsals from 12 March; opening 4 April"
              />
            </Field>
            <Field label="Location or venue" error={errors.location}>
              <input
                type="text"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                maxLength={200}
                className={inputClass}
              />
            </Field>
            <Field label="Type of coverage required" error={errors.coverage} full>
              <input
                type="text"
                value={form.coverage}
                onChange={(e) => update("coverage", e.target.value)}
                maxLength={400}
                className={inputClass}
                placeholder="e.g. Dress rehearsal, opening night, cast portraits"
              />
            </Field>
            <Field label="Intended image use" error={errors.imageUse} full>
              <input
                type="text"
                value={form.imageUse}
                onChange={(e) => update("imageUse", e.target.value)}
                maxLength={400}
                className={inputClass}
                placeholder="e.g. Press, season campaign, social, archive"
              />
            </Field>
            <Field label="Delivery deadline" error={errors.deadline}>
              <input
                type="text"
                value={form.deadline}
                onChange={(e) => update("deadline", e.target.value)}
                maxLength={200}
                className={inputClass}
              />
            </Field>
            <Field label="Approximate scope or budget" error={errors.budget}>
              <input
                type="text"
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                maxLength={200}
                className={inputClass}
              />
            </Field>
            <Field label="Additional context" error={errors.context} full>
              <textarea
                value={form.context}
                onChange={(e) => update("context", e.target.value)}
                maxLength={4000}
                rows={5}
                className={inputClass}
                placeholder="Anything else Michelle should understand about the work"
              />
            </Field>
          </div>
        </fieldset>

        {errorMessage && (
          <p className="mt-8 font-sans-ui text-sm text-ink/80">
            {errorMessage}{" "}
            <a href={`mailto:${siteCopy.email}`} className="text-oxblood underline underline-offset-4">
              {siteCopy.email}
            </a>
          </p>
        )}

        <div className="mt-16 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-brass/40 pt-10">
          <p className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            {siteCopy.response}
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending…" : "Send to Michelle"}
          </button>
        </div>
      </form>
    </div>
  );
}

const inputClass =
  "mt-3 w-full border-b border-ink/25 bg-transparent py-3 font-body text-base text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-oxblood";

function Field({
  label,
  required,
  error,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "lg:col-span-2" : ""}`}>
      <span className="meta-label">
        {label}
        {required && <span className="text-oxblood ml-1">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-2 block font-sans-ui text-xs text-destructive">{error}</span>
      )}
    </label>
  );
}

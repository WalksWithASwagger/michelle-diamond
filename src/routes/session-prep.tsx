import { createFileRoute, Link } from "@tanstack/react-router";

import { siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/session-prep")({
  head: () => ({
    meta: [
      { title: `Session prep — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Everything to know before your Michelle Diamond session — arrival, wardrobe, what to bring.",
      },
    ],
  }),
  component: SessionPrepPage,
});

const bringChecklist = [
  "Your first-look outfit already on (no rushed changes on arrival)",
  "One backup outfit on a hanger, not folded",
  "One accessory swap — jewelry, tie, scarf",
  "A snack + water bottle",
  "Any personal object that carries meaning — book, tool of the trade",
  "Fifteen minutes of quiet before you arrive helps more than anything on this list.",
];

const wardrobeYes = [
  "Solids in mid-saturation, matte fabrics",
  "Deep jewel tones and warm neutrals",
  "Charcoal or dark grey instead of pure black",
  "Structured collars — shirt, jacket, well-fitted knit",
];

const wardrobeNo = [
  "Bright pure white on its own (blows out under studio light)",
  "Anything with a visible logo (dates the image)",
  "Narrow pencil stripes (shimmer under studio strobe)",
  "Brand-new clothing you have never worn",
];

function SessionPrepPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24">
          <p className="meta-label">Session prep</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl max-w-4xl">
            You are booked.
            <br />
            <span className="italic text-oxblood">Here is everything to know.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            Bookmark this page for the week of your session. If anything here conflicts
            with a note Michelle sent you by email, her direct note wins.
          </p>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Arrive", value: "10 minutes before call time" },
              { label: "Studio", value: siteCopy.studio },
              { label: "Day-of contact", value: siteCopy.email },
              { label: "Delivery", value: "Preview in 5 business days" },
            ].map((f) => (
              <li key={f.label} className="border border-brass/40 bg-paper/40 p-5">
                <p className="meta-label">{f.label}</p>
                <p className="mt-2 font-body text-sm text-ink/85">{f.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <p className="meta-label">What to bring</p>
            <h2 className="mt-4 font-display text-3xl text-ink">Small list. Nothing exotic.</h2>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6 space-y-4">
            {bringChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-lg text-ink/85">
                <span className="mt-2.5 h-px w-5 shrink-0 bg-oxblood" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <p className="meta-label">Wardrobe</p>
            <h2 className="mt-4 font-display text-3xl text-ink">The rules in one glance.</h2>
            <p className="mt-4 font-body text-sm text-ink/60">
              Longer version:{" "}
              <Link
                to="/journal/$slug"
                params={{ slug: "what-to-wear-corporate-headshot-vancouver" }}
                className="text-oxblood border-b border-oxblood/40"
              >
                Read the wardrobe guide
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 grid gap-6 sm:grid-cols-2">
            <div className="border border-brass/40 border-l-2 border-l-oxblood p-6 bg-paper/40">
              <p className="meta-label text-oxblood">Yes</p>
              <ul className="mt-4 space-y-3 font-body text-sm text-ink/85">
                {wardrobeYes.map((y) => (
                  <li key={y}>{y}</li>
                ))}
              </ul>
            </div>
            <div className="border border-brass/40 p-6">
              <p className="meta-label">Skip</p>
              <ul className="mt-4 space-y-3 font-body text-sm text-ink/70">
                {wardrobeNo.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <p className="meta-label">Arrival</p>
            <h2 className="mt-4 font-display text-3xl text-ink">
              The building, the parking, the door.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-4 font-body text-lg text-ink/80 leading-relaxed">
            <p>
              Studio at {siteCopy.studio}. Nook is on the third floor — the elevator lands
              you near the front desk; they know Michelle is expecting you.
            </p>
            <p>
              Street parking is metered; the pay lot next door usually has midday space.
              From Vancouver on Fridays, budget extra for the bridge.
            </p>
            <p>
              Ten minutes early is perfect. Running late? Email — she will shift the run of
              the shoot, not the quality.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[800px] px-6 py-24 text-center lg:px-12">
          <p className="font-body text-lg text-ink/70">Anything unclear before your session?</p>
          <a
            href={`mailto:${siteCopy.email}?subject=${encodeURIComponent("Pre-session question")}`}
            className="mt-6 inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood"
          >
            Send a question →
          </a>
        </div>
      </section>
    </div>
  );
}

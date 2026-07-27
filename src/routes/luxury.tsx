import { createFileRoute, Link } from "@tanstack/react-router";

import { GalleryGrid } from "@/components/gallery-grid";
import { luxuryGalleryItems, luxuryPrinciples, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/luxury")({
  head: () => ({
    meta: [
      { title: `Luxury & Beauty — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Editorial photography for luxury hospitality, private hosts, and beauty-led brands — black-tie rooms, civic galas, and refined celebrations photographed with discretion.",
      },
      { property: "og:title", content: `Luxury & Beauty — ${siteCopy.fullBrand}` },
      {
        property: "og:description",
        content:
          "For hosts and brands who build exceptional rooms — luxury hospitality, beauty launches, and elegant gatherings held with calm precision.",
      },
    ],
  }),
  component: LuxuryPage,
});

function LuxuryPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-12 lg:pt-14 lg:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="meta-label">Luxury &amp; Beauty</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem] fade-up">
                For hosts and brands who build{" "}
                <span className="italic text-oxblood">exceptional rooms.</span>
              </h1>
            </div>
            <p className="max-w-md font-body text-base leading-relaxed text-ink/75 lg:text-right">
              Luxury hospitality, civic galas, private hosts, and beauty-led launches —
              photographed with the calm, polish, and discretion those rooms require.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-12 lg:py-8">
          <GalleryGrid items={[...luxuryGalleryItems]} variant="mosaic" />
        </div>
      </section>

      <section className="border-b border-brass/30 bg-paper/50">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 sm:grid-cols-3">
            {luxuryPrinciples.map((p, i) => (
              <div key={p.label}>
                <p className="font-sans-ui text-[11px] tracking-[0.24em] uppercase text-oxblood">
                  {String(i + 1).padStart(2, "0")} — {p.label}
                </p>
                <p className="mt-3 font-body text-base leading-relaxed text-ink/80">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20 text-center">
          <p className="meta-label">Private occasions</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink sm:text-4xl">
            Tell Michelle about{" "}
            <span className="italic text-oxblood">the night you are building.</span>
          </h2>
          <div className="mt-8">
            <Link
              to="/commission"
              search={{ type: "Gala or opening night" }}
              className="inline-flex items-center justify-center bg-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enquire about coverage
            </Link>
          </div>
          <p className="mt-8 font-body text-sm text-ink/60">
            Tipalti and KTL holiday rooms already live in this edit.{" "}
            <Link
              to="/journal/$slug"
              params={{ slug: "christmas-family-portraits-vancouver-when-to-book" }}
              className="text-oxblood border-b border-oxblood/40 hover:opacity-70"
            >
              Christmas booking guide
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

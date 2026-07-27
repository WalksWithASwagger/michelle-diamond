import { createFileRoute, Link } from "@tanstack/react-router";

import { GalleryGrid } from "@/components/gallery-grid";
import { eventGalleryItems, eventPrinciples, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: `Events & Gatherings — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Event photography for foundations, cultural institutions, philanthropies, and private hosts — opening nights, gala dinners, and rooms where every detail matters.",
      },
      { property: "og:title", content: `Events & Gatherings — ${siteCopy.fullBrand}` },
      {
        property: "og:description",
        content:
          "Editorial coverage for extraordinary gatherings — atmosphere, relationships, and the standards behind the night, without the noise of generic event photography.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-12 lg:pt-14 lg:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="meta-label">Events &amp; Gatherings</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem] fade-up">
                For rooms designed to gather{" "}
                <span className="italic text-oxblood">the right people well.</span>
              </h1>
            </div>
            <p className="max-w-md font-body text-base leading-relaxed text-ink/75 lg:text-right">
              Philanthropic dinners, cultural openings, patron evenings, and private
              celebrations — photographed for atmosphere, relationships, and the standards
              behind the night.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-12 lg:py-8">
          <GalleryGrid items={[...eventGalleryItems]} variant="mosaic" />
        </div>
      </section>

      <section className="border-b border-brass/30 bg-paper/50">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 sm:grid-cols-3">
            {eventPrinciples.map((p, i) => (
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
          <p className="meta-label">Event coverage</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink sm:text-4xl">
            Tell Michelle{" "}
            <span className="italic text-oxblood">about the room.</span>
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
        </div>
      </section>
    </div>
  );
}

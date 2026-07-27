import { createFileRoute, Link } from "@tanstack/react-router";

import { GalleryGrid } from "@/components/gallery-grid";
import {
  communityGalleryItems,
  communityPrinciples,
  siteCopy,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: `Community — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "BC + AI, Vancouver AI, Surrey AI, and Creative Mornings — community nights photographed by Michelle Diamond.",
      },
      { property: "og:title", content: `Community — ${siteCopy.fullBrand}` },
      {
        property: "og:description",
        content:
          "Meetup rooms, courtyard networking, stage craft — the community wall Michelle documents month by month.",
      },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-12 lg:pt-14 lg:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="meta-label">Community</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem] fade-up">
                Stages, courtyards,{" "}
                <span className="italic text-oxblood">character.</span>
              </h1>
            </div>
            <p className="max-w-md font-body text-base leading-relaxed text-ink/75 lg:text-right">
              BC + AI, Vancouver AI, Surrey AI, Creative Mornings — the rooms photographed
              like performance, not snapshots.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-12 lg:py-8">
          <GalleryGrid items={[...communityGalleryItems]} variant="mosaic" />
        </div>
      </section>

      <section className="border-b border-brass/30 bg-paper/50">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 sm:grid-cols-3">
            {communityPrinciples.map((p, i) => (
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
          <p className="meta-label">Community rate</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink sm:text-4xl">
            Twenty minutes. Ten frames.{" "}
            <span className="italic text-oxblood">Community price.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/services/community-rate"
              className="inline-flex items-center justify-center bg-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Community mini-session
            </Link>
            <Link
              to="/commission"
              search={{ type: "Cultural or corporate event" }}
              className="inline-flex items-center justify-center border border-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:bg-oxblood hover:text-primary-foreground transition-colors"
            >
              Book a meetup night
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

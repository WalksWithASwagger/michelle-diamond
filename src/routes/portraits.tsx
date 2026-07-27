import { createFileRoute, Link } from "@tanstack/react-router";

import { GalleryGrid } from "@/components/gallery-grid";
import { portraitGalleryItems, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portraits")({
  head: () => ({
    meta: [
      { title: `Portraits — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Editorial portraits for founders, artists, executives, and people whose work asks for presence — guided with calm direction and photographed to look recognizably like themselves.",
      },
      { property: "og:title", content: `Portraits — ${siteCopy.fullBrand}` },
      {
        property: "og:description",
        content:
          "Portraits for people with something to carry into the room — elegant, assured, and grounded in the work behind the face.",
      },
    ],
  }),
  component: PortraitsPage,
});

function PortraitsPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-12 lg:pt-14 lg:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="meta-label">Portraits</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem] fade-up">
                For founders, artists, and executives who need{" "}
                <span className="italic text-oxblood">presence that reads clearly.</span>
              </h1>
            </div>
            <p className="max-w-md font-body text-base leading-relaxed text-ink/75 lg:text-right">
              Editorial portraits for people creating exceptional work — guided with calm
              direction so the image feels composed, elegant, and entirely their own.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-12 lg:py-8">
          <GalleryGrid items={[...portraitGalleryItems]} variant="mosaic" />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20 text-center">
          <p className="meta-label">Portrait commissions</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink sm:text-4xl">
            A headshot with coaching,{" "}
            <span className="italic text-oxblood">or a multi-look set.</span>
          </h2>
          <div className="mt-8">
            <Link
              to="/commission"
              search={{ type: "Portrait commission" }}
              className="inline-flex items-center justify-center bg-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Commission a portrait
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

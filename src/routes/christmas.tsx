import { createFileRoute, Link } from "@tanstack/react-router";

import { ChristmasBookingCalendar } from "@/components/christmas-booking-calendar";
import { GalleryGrid } from "@/components/gallery-grid";
import {
  christmasGalleryItems,
  christmasPrinciples,
  siteCopy,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/christmas")({
  head: () => ({
    meta: [
      { title: `Christmas Portraits — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Holiday portrait photography by Michelle Diamond — December rooms, rain, candlelight, and the booking guide for Christmas sessions.",
      },
      {
        property: "og:title",
        content: `Christmas Portraits — ${siteCopy.fullBrand}`,
      },
      {
        property: "og:description",
        content:
          "Tipalti, KTL, candlelit piano, and holiday rain — Michelle Diamond's Christmas chapter stays grounded in the work she already shows publicly.",
      },
    ],
  }),
  component: ChristmasPage,
});

function ChristmasPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-12 lg:pt-14 lg:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="meta-label">Christmas portraits</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem] fade-up">
                Holiday rooms, rain,{" "}
                <span className="italic text-oxblood">and the people inside them.</span>
              </h1>
            </div>
            <p className="max-w-md font-body text-base leading-relaxed text-ink/75 lg:text-right">
              Tipalti, KTL, and the seasonal plates Michelle already shows publicly —
              December held as atmosphere, not stock sweetness.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-12 lg:py-8">
          <GalleryGrid items={[...christmasGalleryItems]} variant="mosaic" />
        </div>
      </section>

      <section className="border-b border-brass/30 bg-paper/50">
        <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 sm:grid-cols-3">
            {christmasPrinciples.map((principle, i) => (
              <div key={principle.label}>
                <p className="font-sans-ui text-[11px] tracking-[0.24em] uppercase text-oxblood">
                  {String(i + 1).padStart(2, "0")} — {principle.label}
                </p>
                <p className="mt-3 font-body text-base leading-relaxed text-ink/80">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-12 lg:py-16">
          <div>
            <p className="meta-label">Booking rhythm</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink sm:text-4xl">
              What fills first,{" "}
              <span className="italic text-oxblood">without pretending it is live inventory.</span>
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-ink/80">
              Michelle&apos;s Christmas page works as a true chapter, not a fake calendar. The
              pattern is the offer: early November goes first, studio plays longer, and the
              journal essay carries the full planning note for cards, wardrobe, and rain.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link
                to="/journal/$slug"
                params={{ slug: "christmas-family-portraits-vancouver-when-to-book" }}
                className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-oxblood border-b border-oxblood/40"
              >
                Read the booking essay →
              </Link>
              <Link
                to="/commission"
                search={{ type: "Portrait commission" }}
                className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-ink/70 border-b border-ink/30"
              >
                Ask about a session
              </Link>
            </div>
          </div>

          <ChristmasBookingCalendar />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-16 text-center lg:px-12 lg:py-20">
          <p className="meta-label">Holiday portrait inquiries</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink sm:text-4xl">
            Tell Michelle{" "}
            <span className="italic text-oxblood">what the deadline is.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-ink/75">
            Card date, grandparents in town, studio versus outdoors, or the one December
            weekend everyone is actually free — that is the useful starting point.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/commission"
              search={{ type: "Portrait commission" }}
              className="inline-flex items-center justify-center bg-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start an inquiry
            </Link>
            <Link
              to="/journal/$slug"
              params={{ slug: "christmas-family-portraits-vancouver-when-to-book" }}
              className="inline-flex items-center justify-center border border-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:bg-oxblood hover:text-primary-foreground transition-colors"
            >
              Read the full guide
            </Link>
          </div>
          <p className="mt-6 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            Custom Christmas sessions begin with an inquiry; live UseSession checkout stays
            for mini-session dates only.
          </p>
        </div>
      </section>
    </div>
  );
}

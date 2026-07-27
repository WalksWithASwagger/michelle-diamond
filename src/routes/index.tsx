import { createFileRoute, Link } from "@tanstack/react-router";

import heroSoprano from "@/assets/hero-soprano.jpg";
import opera1 from "@/assets/opera-1-empty.jpg";
import opera2 from "@/assets/opera-2-rehearsal.jpg";
import opera3 from "@/assets/opera-3-entrance.jpg";
import opera4 from "@/assets/opera-4-peak.jpg";
import opera5 from "@/assets/opera-5-ensemble.jpg";
import opera6 from "@/assets/opera-6-curtain.jpg";
import {
  culturalContext,
  homeChristmasStrip,
  homeCommunityStrip,
  homeFoodStrip,
  homeLuxuryStrip,
  homeMichellePeek,
  homePortraitAlts,
  homePortraitStrip,
  openingSequenceMeta,
  principles,
  siteCopy,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteCopy.fullBrand} — ${siteCopy.headline}` },
      { name: "description", content: siteCopy.tagline },
      { property: "og:title", content: `${siteCopy.fullBrand} — ${siteCopy.headline}` },
      { property: "og:description", content: siteCopy.tagline },
    ],
  }),
  component: HomePage,
});

const openingImages = [opera1, opera2, opera3, opera4, opera5, opera6] as const;

const openingSequence = openingSequenceMeta.slice(0, 6).map((meta, i) => ({
  src: openingImages[i],
  alt: `${meta.company} — ${meta.production}`,
  production: meta.production,
  company: meta.company,
}));

function HomePage() {
  return (
    <div className="bg-ivory text-ink">
      {/* Hero — one composition */}
      <section className="relative min-h-[88vh] border-b border-brass/30 overflow-hidden">
        <img
          src={heroSoprano}
          alt="Woman in deep red satin gown — Symphony & Opera in the Park, Deer Lake"
          width={2000}
          height={2400}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/20" />
        <div className="relative z-[1] mx-auto flex min-h-[88vh] max-w-[1400px] flex-col justify-end px-6 pb-14 pt-28 lg:px-12 lg:pb-20">
          <p className="font-display text-2xl italic text-shell sm:text-3xl fade-up">
            Diamond&apos;s Edge
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-5xl lg:text-[3.75rem] fade-up">
            {siteCopy.headline}
          </h1>
          <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-ivory/80">
            {siteCopy.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/luxury"
              className="inline-flex items-center justify-center bg-oxblood px-8 py-3.5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              View the work
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center justify-center border border-ivory/50 px-8 py-3.5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-ivory hover:border-ivory hover:bg-ivory/10 transition-colors"
            >
              Enquire
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury wall — primary claim, full width */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12 lg:py-12">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="meta-label">Luxury &amp; beauty</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Rooms she already{" "}
                <span className="italic text-oxblood">holds.</span>
              </h2>
            </div>
            <Link
              to="/luxury"
              className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70 self-start"
            >
              Open full gallery →
            </Link>
          </div>
          <div className="gallery-mosaic">
            {homeLuxuryStrip.map((frame, i) => (
              <Link
                key={frame.src}
                to="/luxury"
                className="gallery-tile group relative aspect-[3/4] overflow-hidden bg-paper"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-transparent transition-[box-shadow] duration-500 group-hover:shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--brass)_55%,transparent)]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Opera wall */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12 lg:py-12">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="meta-label">Opera &amp; performance</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Deer Lake — <span className="italic text-oxblood">selected frames.</span>
              </h2>
            </div>
            <Link
              to="/opera"
              className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70 self-start"
            >
              Open full gallery →
            </Link>
          </div>
          <div className="gallery-mosaic">
            {openingSequence.map((image, i) => (
              <Link
                key={image.src}
                to="/opera"
                className="gallery-tile group relative aspect-[3/4] overflow-hidden bg-paper"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 opacity-90">
                  <p className="font-sans-ui text-[9px] tracking-[0.2em] uppercase text-ivory/70">
                    {image.company}
                  </p>
                  <p className="font-display text-sm italic text-ivory">{image.production}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles — compact strip */}
      <section className="border-b border-brass/30 bg-paper/50">
        <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-12 lg:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title}>
                <span className="font-sans-ui text-[10px] tracking-[0.28em] text-oxblood">
                  {p.label}
                </span>
                <h3 className="mt-2 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portraits — Orpheum unlock */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12 lg:py-12">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="meta-label">Portraits</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Orpheum &amp; See Mo —{" "}
                <span className="italic text-oxblood">presence held.</span>
              </h2>
            </div>
            <Link
              to="/portraits"
              className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70 self-start"
            >
              Open full gallery →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 lg:grid-cols-6">
            {[
              ...homePortraitStrip.map((src, i) => ({
                src,
                alt: homePortraitAlts[i],
              })),
              {
                src: "/gallery/portraits/seemo-03.jpg",
                alt: "See Mo portrait — direct gaze and city bokeh",
              },
              {
                src: "/gallery/portraits/seemo-07.jpg",
                alt: "See Mo portrait — smile over the rail",
              },
              {
                src: "/gallery/portraits/orph-07.jpg",
                alt: "Orpheum portrait reflected across the grand piano",
              },
            ].map((frame, i) => (
              <Link
                key={frame.src + i}
                to="/portraits"
                className="gallery-tile group relative aspect-[3/4] overflow-hidden"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Food + Community peeks */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12 lg:py-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="meta-label">Food &amp; culinary</p>
                  <h2 className="mt-2 font-display text-3xl text-ink">
                    Pasta, glass,{" "}
                    <span className="italic text-oxblood">table craft.</span>
                  </h2>
                </div>
                <Link
                  to="/food"
                  className="shrink-0 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-oxblood border-b border-oxblood pb-0.5 hover:opacity-70"
                >
                  Gallery →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                {homeFoodStrip.slice(0, 6).map((frame, i) => (
                  <Link
                    key={frame.src}
                    to="/food"
                    className="gallery-tile group relative aspect-[3/4] overflow-hidden"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <img
                      src={frame.src}
                      alt={frame.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="meta-label">Community</p>
                  <h2 className="mt-2 font-display text-3xl text-ink">
                    Nights that{" "}
                    <span className="italic text-oxblood">keep showing up.</span>
                  </h2>
                </div>
                <Link
                  to="/community"
                  className="shrink-0 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-oxblood border-b border-oxblood pb-0.5 hover:opacity-70"
                >
                  Gallery →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                {homeCommunityStrip.slice(0, 6).map((frame, i) => (
                  <Link
                    key={frame.src}
                    to="/community"
                    className="gallery-tile group relative aspect-[3/4] overflow-hidden"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <img
                      src={frame.src}
                      alt={frame.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas peek — lower in the page so luxury still leads */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
            <div>
              <p className="meta-label">Christmas portraits</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                Holiday rooms, rain,{" "}
                <span className="italic text-oxblood">and the booking window.</span>
              </h2>
              <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink/75">
                Tipalti and KTL holiday rooms plus the seasonal plates Michelle already shows
                publicly. The Christmas chapter gathers the proof, and the journal guide says
                what fills first.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
                <Link
                  to="/christmas"
                  className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-oxblood border-b border-oxblood pb-0.5 hover:opacity-70"
                >
                  Open Christmas →
                </Link>
                <Link
                  to="/journal/$slug"
                  params={{ slug: "christmas-family-portraits-vancouver-when-to-book" }}
                  className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/70 border-b border-ink/30 pb-0.5 hover:text-oxblood"
                >
                  Booking guide →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
              {homeChristmasStrip.map((frame, i) => (
                <Link
                  key={frame.src}
                  to="/christmas"
                  className="gallery-tile group relative aspect-[3/4] overflow-hidden"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <img
                    src={frame.src}
                    alt={frame.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contexts + studio links — editorial, not cards */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {culturalContext.map((c) => (
              <span key={c} className="font-display text-lg italic text-oxblood/85">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-brass/30 pt-8">
            {[
              { to: "/the-experience" as const, label: "The Experience" },
              { to: "/book" as const, label: "Book" },
              { to: "/clients" as const, label: "Client galleries" },
              { to: "/journal" as const, label: "Journal" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-xl text-ink border-b border-transparent pb-0.5 transition-colors hover:text-oxblood hover:border-oxblood"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Michelle — light peek into About; not the home hero */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="meta-label">Meet Michelle</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                The person behind{" "}
                <span className="italic text-oxblood">the lens.</span>
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[11px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70 self-start"
            >
              About Michelle →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
            {homeMichellePeek.map((frame, i) => (
              <Link
                key={frame.src}
                to="/about"
                className="gallery-tile group relative aspect-[3/4] overflow-hidden"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20 text-center">
          <h2 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            Tell Michelle{" "}
            <span className="italic text-oxblood">what is being made.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center justify-center bg-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book Michelle
            </Link>
            <Link
              to="/commission"
              className="inline-flex items-center justify-center border border-oxblood px-10 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:bg-oxblood hover:text-primary-foreground transition-colors"
            >
              Commission
            </Link>
          </div>
          <p className="mt-6 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            {siteCopy.response}
          </p>
        </div>
      </section>
    </div>
  );
}

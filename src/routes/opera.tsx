import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import operaProdA from "@/assets/opera-production-a.jpg";
import operaProdB from "@/assets/opera-production-b.jpg";
import opera1 from "@/assets/opera-1-empty.jpg";
import opera2 from "@/assets/opera-2-rehearsal.jpg";
import opera3 from "@/assets/opera-3-entrance.jpg";
import opera4 from "@/assets/opera-4-peak.jpg";
import opera5 from "@/assets/opera-5-ensemble.jpg";
import opera6 from "@/assets/opera-6-curtain.jpg";
import opera7 from "@/assets/opera-7-aftermath.jpg";
import { GalleryLightbox, type LightboxItem } from "@/components/gallery-lightbox";
import { GalleryGrid } from "@/components/gallery-grid";
import { listGalleryImages } from "@/lib/gallery.functions";

const operaGalleryQuery = queryOptions({
  queryKey: ["gallery", "opera"],
  queryFn: () => listGalleryImages({ data: { category: "opera" } }),
  staleTime: 60 * 60 * 1000,
});

export const Route = createFileRoute("/opera")({
  head: () => ({
    meta: [
      { title: "Opera & Performance — Diamond's Edge Photography" },
      {
        name: "description",
        content:
          "Production, rehearsal, publicity, portrait, and event photography for opera companies, performing artists, festivals, venues, and cultural institutions.",
      },
      { property: "og:title", content: "Opera & Performance — Diamond's Edge Photography" },
      {
        property: "og:description",
        content:
          "Production, rehearsal, publicity, portrait, and event photography for opera companies, artists, festivals, and cultural institutions.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(operaGalleryQuery),
  component: OperaPage,
});

type Production = {
  title: string;
  company: string;
  venue: string;
  season: string;
  note: string;
  brief: string[];
  images: Array<{ src: string; alt: string; ratio: string }>;
  credits: Array<{ label: string; value: string }>;
};

const productions: Production[] = [
  {
    title: "La Notte Chiara",
    company: "Meridian Opera — Sample production",
    venue: "Aster Concert Hall",
    season: "Season 2024/25",
    note:
      "A new production of a beloved bel canto work. Michelle joined the company from the first music call, followed the rehearsal process into the theatre, and photographed both the dress rehearsal and opening night for press, campaign, and archive use.",
    brief: [
      "Rehearsal process from staging through sitzprobe",
      "Dress rehearsal press selects",
      "Opening night performance",
      "Curtain call and cast portraits",
    ],
    images: [
      { src: opera2, alt: "Rehearsal room with conductor and singers reading scores.", ratio: "aspect-[16/10]" },
      { src: opera3, alt: "Singer stepping from the wings into stage light.", ratio: "aspect-[3/4]" },
      { src: opera4, alt: "Tight portrait of a mezzo at the peak of an aria.", ratio: "aspect-[3/4]" },
      { src: opera5, alt: "Chorus and principals in an ensemble scene.", ratio: "aspect-[16/10]" },
      { src: opera6, alt: "Curtain call, hands joined.", ratio: "aspect-[16/10]" },
    ],
    credits: [
      { label: "Company", value: "Meridian Opera (sample)" },
      { label: "Venue", value: "Aster Concert Hall" },
      { label: "Director", value: "To be confirmed" },
      { label: "Conductor", value: "To be confirmed" },
      { label: "Designer", value: "To be confirmed" },
      { label: "Coverage", value: "Rehearsal · Dress · Opening · Portraits" },
    ],
  },
  {
    title: "Ash & Wire",
    company: "Vestibule Chamber Opera — Sample production",
    venue: "Halcyon Studio Theatre",
    season: "Season 2024/25",
    note:
      "A minimalist contemporary opera for a single soprano and small ensemble. The photography followed the production from the read-through into the studio, and the performance stills were made to sit alongside the company's monochrome brand campaign.",
    brief: [
      "Music call and staging",
      "Publicity portraits for the lead soprano",
      "Two live performances",
      "Post-show archive selects",
    ],
    images: [
      { src: operaProdA, alt: "Director and designer studying a model of the set on a table.", ratio: "aspect-[16/10]" },
      { src: operaProdB, alt: "Wide performance photograph — single figure under a cone of blue stage light.", ratio: "aspect-[16/10]" },
      { src: opera1, alt: "Empty stage before rehearsal.", ratio: "aspect-[16/10]" },
      { src: opera7, alt: "Aftermath — costume across a chair, score on the floor.", ratio: "aspect-[16/10]" },
    ],
    credits: [
      { label: "Company", value: "Vestibule Chamber Opera (sample)" },
      { label: "Venue", value: "Halcyon Studio Theatre" },
      { label: "Director", value: "To be confirmed" },
      { label: "Conductor", value: "To be confirmed" },
      { label: "Designer", value: "To be confirmed" },
      { label: "Coverage", value: "Rehearsal · Publicity · Performance · Archive" },
    ],
  },
];

const operaServices = [
  "Live performance coverage",
  "Dress and technical rehearsals",
  "Rehearsal process",
  "Artist publicity",
  "Company and ensemble portraits",
  "Season campaigns",
  "Opening-night events",
  "Patron and donor gatherings",
  "Press selects",
  "Social-media delivery",
  "Archival coverage",
  "Multi-production season relationships",
];

function OperaPage() {
  const { data: galleryData } = useSuspenseQuery(operaGalleryQuery);
  const galleryItems: LightboxItem[] = useMemo(
    () => galleryData.map((r) => ({ id: r.id, url: r.url, altText: r.altText, title: r.title, caption: r.caption })),
    [galleryData],
  );

  const [lightbox, setLightbox] = useState<{ items: LightboxItem[]; index: number } | null>(null);
  const openProduction = (production: Production, imgIndex: number) => {
    const items: LightboxItem[] = production.images.map((img, i) => ({
      id: `${production.title}-${i}`,
      url: img.src,
      altText: img.alt,
      title: i === 0 ? production.title : null,
      caption: i === 0 ? production.note : null,
    }));
    setLightbox({ items, index: imgIndex });
  };

  return (
    <div className="bg-ivory text-ink">
      {/* Hero */}
      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 pt-10 pb-16 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <p className="meta-label">Opera &amp; performance</p>
            <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.5rem] fade-up">
              Photography from
              <br />
              <span className="italic text-oxblood">inside the music.</span>
            </h1>
            <p className="mt-10 max-w-md font-body text-lg leading-relaxed text-ink/80">
              Production, rehearsal, publicity, portrait, and event photography for opera
              companies, performing artists, festivals, venues, and cultural
              institutions.
            </p>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <img
              src={opera5}
              alt="Wide performance photograph — opera chorus arranged on a large stage under warm amber light."
              width={1800}
              height={1200}
              className="w-full h-auto object-cover aspect-[4/3] fade-up"
            />
          </div>
        </div>
      </section>

      {/* Productions */}
      {productions.map((p, idx) => (
        <section
          key={p.title}
          className={`border-b border-brass/30 ${idx % 2 === 1 ? "bg-paper/60" : ""}`}
        >
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 mb-14">
              <div className="lg:col-span-4">
                <p className="meta-label">
                  Programme {idx === 0 ? "no. 01" : "no. 02"}
                </p>
                <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                  <span className="italic">{p.title}</span>
                </h2>
                <p className="mt-4 font-sans-ui text-sm tracking-[0.05em] text-ink/70">
                  {p.company} · {p.venue}
                </p>
                <p className="meta-label mt-1">{p.season}</p>
              </div>
              <div className="lg:col-span-8">
                <p className="font-body text-lg leading-relaxed text-ink/85">{p.note}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {p.brief.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 h-px w-6 bg-oxblood flex-shrink-0" />
                      <span className="font-body text-base text-ink/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {p.images.map((img, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => openProduction(p, i)}
                  aria-label={`Open ${p.title} plate ${i + 1}`}
                  className={`group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood ${
                    i === 0
                      ? "md:col-span-12"
                      : i % 2 === 1
                        ? "md:col-span-7"
                        : "md:col-span-5"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.015] ${img.ratio}`}
                  />
                </button>
              ))}
            </div>


            <div className="mt-14 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="meta-label">Production credits</p>
                <dl className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {p.credits.map((c) => (
                    <div key={c.label} className="flex justify-between border-b border-brass/40 py-3">
                      <dt className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/60">
                        {c.label}
                      </dt>
                      <dd className="font-body text-base text-ink/90 text-right">{c.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-end">
                <p className="font-body text-lg italic text-ink/75">
                  Discuss coverage for a similar production.
                </p>
                <Link
                  to="/commission"
                  search={{ type: "Opera production" }}
                  className="mt-6 inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70 self-start"
                >
                  Discuss this kind of work →
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Services */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="meta-label">The scope</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                What Michelle photographs for an opera company.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-brass/40">
                {operaServices.map((s, i) => (
                  <li
                    key={s}
                    className={`flex items-baseline gap-4 border-b border-brass/40 py-5 ${
                      i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                    }`}
                  >
                    <span className="font-sans-ui text-[11px] tracking-[0.2em] text-oxblood">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-lg text-ink/90">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
                Usage terms, turnaround, and pricing confirmed per commission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected performances — DB-driven */}
      {galleryItems.length > 0 && (
        <section className="border-b border-brass/30 bg-paper/40">
          <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
            <div className="max-w-2xl">
              <p className="meta-label">Selected performances</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                A working portfolio, <span className="italic">renewed as new work arrives.</span>
              </h2>
              <p className="mt-6 font-body text-lg text-ink/75">
                Move through the plates with the arrow keys, or with a swipe on touch.
              </p>
            </div>
            <div className="mt-14">
              <GalleryGrid items={galleryItems} variant="brick" />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-32 lg:py-40 text-center">
          <p className="meta-label">Coda</p>
          <h2 className="mt-8 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.75rem]">
            Planning a production, season,
            <br />
            <span className="italic text-oxblood">or artist campaign?</span>
          </h2>
          <div className="mt-12">
            <Link
              to="/commission"
              search={{ type: "Opera production" }}
              className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss the work
            </Link>
          </div>
        </div>
      </section>

      <GalleryLightbox
        items={lightbox?.items ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onIndexChange={(i) => setLightbox((l) => (l ? { ...l, index: i } : l))}
      />
    </div>
  );
}

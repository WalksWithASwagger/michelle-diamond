import { createFileRoute, Link } from "@tanstack/react-router";

import { GalleryGrid } from "@/components/gallery-grid";
import {
  operaGalleryItems,
  operaServices,
  operaShow,
  siteCopy,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/opera")({
  head: () => ({
    meta: [
      { title: `Opera & Performance — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Editorial photography for opera companies, orchestras, and cultural institutions — performance, portrait, archive, and season-outreach coverage shaped by respect for craft.",
      },
      { property: "og:title", content: `Opera & Performance — ${siteCopy.fullBrand}` },
      {
        property: "og:description",
        content:
          "Deer Lake proof for houses that care how performance is documented — stage energy, portrait intimacy, and atmosphere held with editorial precision.",
      },
    ],
  }),
  component: OperaPage,
});

function OperaPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-8 lg:px-12 lg:pt-14 lg:pb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="meta-label">Opera &amp; performance</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem] fade-up">
                For houses that care deeply about{" "}
                <span className="italic text-oxblood">how craft is seen.</span>
                <span className="block mt-2 text-2xl sm:text-3xl text-ink/80 font-normal">
                  {operaShow.title} · {operaShow.venue}
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <p className="meta-label">{operaShow.dateLabel}</p>
              <p className="max-w-sm font-body text-base leading-relaxed text-ink/75 lg:text-right">
                Deer Lake as craft proof: orchestra, conductor gesture, performer portrait,
                costume, and the atmosphere surrounding a cultural institution in motion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-12 lg:py-8">
          <GalleryGrid items={operaGalleryItems} variant="mosaic" />
        </div>
      </section>

      <section className="border-b border-brass/30 bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="meta-label">The night</p>
              <p className="mt-4 font-body text-lg leading-relaxed text-ink/85">{operaShow.note}</p>
              <dl className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {operaShow.credits.map((c) => (
                  <div key={c.label} className="flex justify-between border-b border-brass/40 py-2.5 gap-4">
                    <dt className="font-sans-ui text-[10px] tracking-[0.2em] uppercase text-ink/55">
                      {c.label}
                    </dt>
                    <dd className="font-body text-sm text-ink/90 text-right">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="meta-label">Scope</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {operaServices.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-3 border-b border-brass/30 py-3"
                  >
                    <span className="font-sans-ui text-[10px] tracking-[0.2em] text-oxblood">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-base text-ink/90">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link
                  to="/commission"
                  search={{ type: "Opera production" }}
                  className="inline-flex items-center justify-center bg-oxblood px-8 py-3.5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Discuss a production
                </Link>
                <a
                  href={operaShow.pixiesetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70"
                >
                  Full Pixieset ↗
                </a>
                <Link
                  to="/opera/leave-behind"
                  className="inline-flex items-center border-b border-ink/30 pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-ink/60 hover:text-oxblood"
                >
                  Leave-behind →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

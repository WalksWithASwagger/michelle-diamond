import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { GalleryLightbox, type LightboxItem } from "@/components/gallery-lightbox";
import { operaLeaveBehind, operaShow, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/opera_/leave-behind")({
  head: () => ({
    meta: [
      { title: `Vancouver Opera leave-behind — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Private Deer Lake sample for Vancouver Opera — three editorial frames showing performance, portrait, and atmosphere for season outreach.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LeaveBehindPage,
});

function LeaveBehindPage() {
  const [lightbox, setLightbox] = useState<{ items: LightboxItem[]; index: number } | null>(
    null,
  );

  const items: LightboxItem[] = operaLeaveBehind.map((frame) => ({
    id: frame.id,
    url: frame.url,
    altText: frame.alt,
    title: frame.title,
    caption: frame.body,
  }));

  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1100px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24">
          <p className="meta-label">Private sample · Vancouver Opera</p>
          <h1 className="mt-8 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl max-w-3xl">
            Three frames for houses that care how{" "}
            <span className="italic text-oxblood">the work is seen.</span>
            <br />
            <span className="text-ink/80 font-normal">Deer Lake · performance · portrait · atmosphere.</span>
          </h1>
          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink/80">
            A private sample from {operaShow.title} at {operaShow.venue}, prepared to show
            Vancouver Opera how Michelle documents performance, portraiture, and atmosphere
            with respect for the craft behind the night.
          </p>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {operaLeaveBehind.map((frame, i) => (
              <button
                key={frame.id}
                type="button"
                onClick={() => setLightbox({ items, index: i })}
                className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood"
              >
                <img
                  src={frame.url}
                  alt={frame.alt}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <p className="mt-5 meta-label">{frame.label}</p>
                <h2 className="mt-2 font-display text-2xl italic text-ink">{frame.title}</h2>
                <p className="mt-2 font-body text-base text-ink/75">{frame.body}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-20 lg:px-12 flex flex-wrap gap-6 border-t border-brass/30">
          <Link
            to="/opera"
            className="inline-flex items-center justify-center bg-oxblood px-8 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground hover:opacity-90"
          >
            Full opera archive
          </Link>
          <a
            href={operaShow.pixiesetUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70"
          >
            Pixieset · full album ↗
          </a>
          <Link
            to="/commission"
            search={{ type: "Opera production" }}
            className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70"
          >
            Inquire
          </Link>
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

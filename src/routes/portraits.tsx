import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";

import { GalleryGrid } from "@/components/gallery-grid";
import { listGalleryImages } from "@/lib/gallery.functions";

const portraitsQuery = queryOptions({
  queryKey: ["gallery", "portrait"],
  queryFn: () => listGalleryImages({ data: { category: "portrait" } }),
  staleTime: 60 * 60 * 1000,
});

export const Route = createFileRoute("/portraits")({
  head: () => ({
    meta: [
      { title: "Portraits & Publicity — Diamond's Edge Photography" },
      {
        name: "description",
        content:
          "Editorial portraits of singers, conductors, ensembles, and artists — made in rehearsal rooms, foyers, and quiet corners by a photographer who understands the work.",
      },
      { property: "og:title", content: "Portraits & Publicity — Diamond's Edge Photography" },
      {
        property: "og:description",
        content:
          "Portrait and publicity photography for performing artists. Editorial, quiet, made from inside the practice.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(portraitsQuery),
  component: PortraitsPage,
  errorComponent: PortraitsError,
});

function PortraitsError() {
  return (
    <div className="mx-auto max-w-[900px] px-6 py-32 text-center">
      <p className="meta-label">A pause</p>
      <h1 className="mt-4 font-display text-3xl text-ink">The gallery didn&rsquo;t load</h1>
      <p className="mt-4 font-body text-ink/70">Please try again in a moment.</p>
    </div>
  );
}

function PortraitsPage() {
  const { data } = useSuspenseQuery(portraitsQuery);
  const items = data.map((r) => ({
    id: r.id,
    url: r.url,
    altText: r.altText,
    title: r.title,
    caption: r.caption,
  }));

  return (
    <div className="bg-ivory text-ink">
      {/* Hero */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24 lg:pb-24">
          <p className="meta-label">Portrait & Publicity</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.25rem] fade-up max-w-4xl">
            The person before
            <br />
            <span className="italic text-oxblood">the performance.</span>
          </h1>
          <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            Portraits made for season campaigns, artist rosters, agency headshots,
            record covers, and press. Photographed in rehearsal rooms, greenrooms,
            foyers, and studios — wherever the artist is most themselves.
          </p>
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
          <GalleryGrid items={items} variant="editorial" />
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36 text-center">
          <p className="meta-label">Portrait commissions</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            A single portrait,
            <br />
            <span className="italic text-oxblood">or a full roster.</span>
          </h2>
          <div className="mt-10">
            <Link
              to="/commission"
              search={{ type: "Artist portraits or publicity" }}
              className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Commission a portrait
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";

import { GalleryGrid } from "@/components/gallery-grid";
import { listGalleryImages } from "@/lib/gallery.functions";

const eventsQuery = queryOptions({
  queryKey: ["gallery", "event"],
  queryFn: () => listGalleryImages({ data: { category: "event" } }),
  staleTime: 60 * 60 * 1000,
});

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Gatherings — Diamond's Edge Photography" },
      {
        name: "description",
        content:
          "Event photography for cultural institutions, foundations, and private hosts. Rooms, atmosphere, and discretion — never crowd shots.",
      },
      { property: "og:title", content: "Events & Gatherings — Diamond's Edge Photography" },
      {
        property: "og:description",
        content:
          "Gala openings, foundation dinners, patron gatherings — photographed for the room, the light, and the people in it, without the noise.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(eventsQuery),
  component: EventsPage,
  errorComponent: EventsError,
});

function EventsError() {
  return (
    <div className="mx-auto max-w-[900px] px-6 py-32 text-center">
      <p className="meta-label">A pause</p>
      <h1 className="mt-4 font-display text-3xl text-ink">The gallery didn&rsquo;t load</h1>
      <p className="mt-4 font-body text-ink/70">Please try again in a moment.</p>
    </div>
  );
}

const principles = [
  {
    label: "The room",
    body:
      "A photograph of the space before the doors open often says more than a photograph of the crowd inside it.",
  },
  {
    label: "The atmosphere",
    body:
      "Light, candle, glass, brass, linen. The evening you built — held in a frame.",
  },
  {
    label: "Discretion",
    body:
      "No flash where it doesn't belong. No faces mid-sentence. Guests are people first, subjects second.",
  },
];

function EventsPage() {
  const { data } = useSuspenseQuery(eventsQuery);
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
          <p className="meta-label">Events & Gatherings</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.25rem] fade-up max-w-4xl">
            The room, the light,
            <br />
            <span className="italic text-oxblood">the people in it.</span>
          </h1>
          <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            Gala openings, opening-night receptions, patron dinners, foundation
            gatherings, festival evenings. Photographed for archive, campaign, and
            the host&rsquo;s own record — not for the crowd shot.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-brass/30 bg-paper/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
            {principles.map((p, i) => (
              <div key={p.label}>
                <p className="font-sans-ui text-[11px] tracking-[0.24em] uppercase text-oxblood">
                  {String(i + 1).padStart(2, "0")} — {p.label}
                </p>
                <p className="mt-6 font-body text-[19px] leading-[1.65] text-ink/85">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
          <p className="meta-label">Selected evenings</p>
          <div className="mt-10">
            <GalleryGrid items={items} variant="brick" />
          </div>
          <p className="mt-8 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            Guest privacy respected. Additional coverage available on request under NDA.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36 text-center">
          <p className="meta-label">Event commissions</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            An evening
            <br />
            <span className="italic text-oxblood">worth remembering, quietly.</span>
          </h2>
          <div className="mt-10">
            <Link
              to="/commission"
              search={{ type: "Gala or opening night" }}
              className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss an evening
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

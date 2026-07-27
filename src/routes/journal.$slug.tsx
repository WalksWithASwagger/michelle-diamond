import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ChristmasBookingCalendar } from "@/components/christmas-booking-calendar";
import { getEssay } from "@/lib/essays";
import { journalPosts, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const meta = journalPosts.find((p) => p.slug === params.slug);
    const Essay = getEssay(params.slug);
    if (!meta || !Essay) throw notFound();
    return { meta, Essay };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.meta.title} — ${siteCopy.fullBrand}`
          : `Journal — ${siteCopy.fullBrand}`,
      },
      {
        name: "description",
        content: loaderData?.meta.excerpt ?? "Journal from Diamond's Edge Photography.",
      },
    ],
  }),
  component: JournalEssayPage,
});

function JournalEssayPage() {
  const { meta, Essay } = Route.useLoaderData();

  return (
    <div className="bg-ivory text-ink">
      <article>
        <header className="border-b border-brass/30">
          <div className="mx-auto max-w-[760px] px-6 pt-16 pb-14 lg:px-12 lg:pt-24">
            <p className="meta-label">
              <Link to="/journal" className="hover:text-oxblood">
                Journal
              </Link>
              {" · "}
              {meta.date}
            </p>
            <h1 className="mt-8 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-6 font-body text-lg text-ink/70">{meta.excerpt}</p>
          </div>
        </header>
        <div className="mx-auto max-w-[760px] px-6 py-16 lg:px-12 lg:py-20">
          <Essay />
          {meta.slug === "christmas-family-portraits-vancouver-when-to-book" && (
            <div className="mt-16 border-t border-brass/30 pt-12">
              <ChristmasBookingCalendar />
            </div>
          )}
        </div>
        <footer className="border-t border-brass/30">
          <div className="mx-auto max-w-[760px] px-6 py-16 lg:px-12 flex flex-wrap gap-6">
            <Link
              to="/journal"
              className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-oxblood border-b border-oxblood/40"
            >
              ← All essays
            </Link>
            <Link
              to="/book"
              className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-oxblood border-b border-oxblood/40"
            >
              Book Michelle →
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}

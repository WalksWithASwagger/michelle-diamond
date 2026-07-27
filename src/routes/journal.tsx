import { createFileRoute, Link } from "@tanstack/react-router";

import { journalPosts, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: `Journal — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Essays from Michelle Diamond on AI in photography, wardrobe for headshots, and when to book Christmas portraits.",
      },
    ],
  }),
  component: JournalIndexPage,
});

function JournalIndexPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24">
          <p className="meta-label">Journal</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl max-w-3xl">
            Notes from
            <br />
            <span className="italic text-oxblood">the practice.</span>
          </h1>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12 lg:py-24">
          <ul className="divide-y divide-brass/30 border-t border-brass/30">
            {journalPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/journal/$slug"
                  params={{ slug: post.slug }}
                  className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline"
                >
                  <p className="meta-label md:col-span-2">{post.date}</p>
                  <div className="md:col-span-8">
                    <h2 className="font-display text-3xl text-ink group-hover:text-oxblood transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 font-body text-lg text-ink/70">{post.excerpt}</p>
                  </div>
                  <p className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-oxblood md:col-span-2 md:text-right">
                    Read →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

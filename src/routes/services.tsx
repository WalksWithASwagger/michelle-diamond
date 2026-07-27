import { createFileRoute, Link } from "@tanstack/react-router";

import { servicePillars, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Opera, portraits, luxury, events, food, and community nights with Michelle Diamond.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24">
          <p className="meta-label">Services</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl max-w-3xl">
            Ways of working
            <br />
            <span className="italic text-oxblood">with Michelle.</span>
          </h1>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12 lg:py-24">
          <ol className="divide-y divide-brass/30 border-t border-brass/30">
            {servicePillars.map((s, i) => (
              <li key={s.slug} className="grid gap-6 py-12 md:grid-cols-12 md:items-baseline">
                <span className="font-display text-2xl italic text-oxblood md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-5">
                  <h2 className="font-display text-3xl text-ink">{s.title}</h2>
                  <p className="mt-3 font-body text-lg text-ink/75">{s.body}</p>
                </div>
                <div className="md:col-span-6 flex flex-wrap gap-6 md:justify-end">
                  <Link
                    to={s.workTo}
                    className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-oxblood border-b border-oxblood/40"
                  >
                    View work →
                  </Link>
                  {s.slug === "community" ? (
                    <Link
                      to="/services/community-rate"
                      className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-ink/70 border-b border-ink/30"
                    >
                      Mini-session rate
                    </Link>
                  ) : s.commission ? (
                    <Link
                      to="/commission"
                      search={{ type: s.commission }}
                      className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-ink/70 border-b border-ink/30"
                    >
                      Inquire
                    </Link>
                  ) : (
                    <a
                      href={siteCopy.useSessionBook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-ink/70 border-b border-ink/30"
                    >
                      Book UseSession
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

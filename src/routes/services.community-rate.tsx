import { createFileRoute, Link } from "@tanstack/react-router";

import { siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services/community-rate")({
  head: () => ({
    meta: [
      { title: `Community rate — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "C$200 community mini-sessions for BC + AI, Vancouver AI, and Surrey AI members — 20 minutes, 10 frames, real coaching.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CommunityRatePage,
});

const includes = [
  "20-minute mini-session at Nook Coworking",
  "10 finished high-resolution images",
  "Real coaching on posture, breath, and presence",
  "Same technical quality as premium clients",
  "Personal + commercial use for your own channels",
];

function CommunityRatePage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24">
          <p className="meta-label">Community rate · not in main nav</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl max-w-4xl">
            Celebrity treatment,
            <br />
            <span className="italic text-oxblood">community price.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            For active BC + AI, Vancouver AI, and Surrey AI community members: a monthly
            20-minute mini-session at Nook with ten finished frames. Accessible, not
            cheap — same craft Michelle brings to premium work.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-5">
            <img
              src="/gallery/community/meetup-01.jpg"
              alt="Community speaker at Vancouver AI — example of Michelle's meetup-room craft"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex items-baseline gap-4">
              <span className="meta-label">From</span>
              <span className="font-display text-5xl text-oxblood">C$200</span>
            </div>
            <ul className="mt-10 space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-lg text-ink/85">
                  <span className="mt-2.5 h-px w-5 shrink-0 bg-oxblood" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-body text-base text-ink/70 leading-relaxed">
              Booked through Michelle&apos;s monthly Nook headshot day — not the public
              inquiry form. If you are not in the community, ask about a standard studio
              session instead.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href={siteCopy.useSessionBook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-oxblood px-8 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground hover:opacity-90"
              >
                Reserve a community slot →
              </a>
              <Link
                to="/book"
                className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:opacity-70"
              >
                Need a longer session?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

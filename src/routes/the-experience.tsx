import { createFileRoute, Link } from "@tanstack/react-router";

import { siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/the-experience")({
  head: () => ({
    meta: [
      { title: `The Experience — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "How Michelle Diamond documents the dedication behind exceptional work: coaching before the shutter, long-view storytelling, and a clear role for AI.",
      },
    ],
  }),
  component: TheExperiencePage,
});

const aiYes = [
  "Culling thousands of frames down to the keepers",
  "Base edits — exposure, colour, lens corrections, dust spotting",
  "Consistency across a multi-shoot brand library",
  "Smart-mask retouching she reviews frame by frame",
];

const aiNo = [
  "Generating people who do not exist",
  "Fabricating weather, light, or moments",
  "Changing your face, body, or age",
  "Replacing the relationship between photographer and subject",
];

function TheExperiencePage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-20 lg:px-12 lg:pt-24">
          <p className="meta-label">The Experience</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.5rem] max-w-4xl">
            How Michelle documents
            <br />
            <span className="italic text-oxblood">
              the dedication behind exceptional work.
            </span>
          </h1>
          <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            For luxury hospitality, cultural institutions, performing arts, and
            extraordinary events, the process combines coaching before the shutter,
            narrative continuity, and careful use of AI where it genuinely helps.
          </p>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12 lg:py-32">
          <div className="lg:col-span-6">
            <p className="meta-label">The twenty minutes</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
              Craft before the frame.
              <br />
              <span className="italic text-oxblood">The relationship is the work.</span>
            </h2>
            <p className="mt-8 font-body text-lg leading-relaxed text-ink/80">
              Before the shutter, Michelle coaches posture, breathing, wardrobe, and
              presence so the person in the frame looks like themselves, and the room
              still feels like itself.
            </p>
            <ul className="mt-10 space-y-3 font-body text-base text-ink/85">
              {[
                "Coaching on posture, breathing, and presence",
                "Wardrobe consultation before the day, fixes during",
                "Reading the room — adjusting pace when someone tightens",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-px w-5 shrink-0 bg-oxblood" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <img
              src="/gallery/opera/02.jpg"
              alt="Intimate portrait showing presence work — Deer Lake craft plate"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30 bg-paper/50">
        <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-12 lg:py-32">
          <p className="meta-label">Month by month</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            Narrative arcs,
            <br />
            <span className="italic text-oxblood">not one-off snapshots.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            Michelle photographs the same institutions, companies, artists, and
            communities across a season or a year — openings, dinners, rehearsals,
            announcements, the quiet changes that compound. Visual history, not a single
            lucky frame.
          </p>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-12 lg:py-32">
          <p className="meta-label">AI in the pipeline</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            She uses AI in the pipeline.
            <br />
            <span className="italic text-oxblood">The pipeline is not the photograph.</span>
          </h2>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="border border-brass/40 border-l-2 border-l-oxblood bg-aubergine p-8 text-ivory lg:p-10">
              <p className="font-sans-ui text-[11px] tracking-[0.24em] uppercase text-ivory/55">
                Yes
              </p>
              <h3 className="mt-4 font-display text-2xl text-ivory">
                Where AI helps the work get done.
              </h3>
              <ul className="mt-8 space-y-4 font-body text-base text-ivory/85">
                {aiYes.map((y) => (
                  <li key={y} className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-5 shrink-0 bg-oxblood" aria-hidden />
                    <span>{y}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-brass/40 p-8 lg:p-10">
              <p className="meta-label">No</p>
              <h3 className="mt-4 font-display text-2xl text-ink">
                Where AI does not belong.
              </h3>
              <ul className="mt-8 space-y-4 font-body text-base text-ink/80">
                {aiNo.map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-5 shrink-0 bg-ink/30" aria-hidden />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10">
            <Link
              to="/journal/$slug"
              params={{ slug: "ai-in-photography-what-changes-what-doesnt" }}
              className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-oxblood border-b border-oxblood/40"
            >
              Read the full AI essay →
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[900px] px-6 py-28 text-center lg:px-12">
          <p className="meta-label">Coda</p>
          <h2 className="mt-8 font-display text-4xl text-ink sm:text-5xl">
            Ready to book the room?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              to="/book"
              className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground hover:opacity-90"
            >
              Book Michelle
            </Link>
            <Link
              to="/commission"
              className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood"
            >
              Commission inquiry →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";

import {
  aboutMichelleLead,
  aboutMichelleSpeaking,
  aboutMichelleStrip,
  siteCopy,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Michelle Diamond — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Michelle Diamond is an editorial photographer for luxury hospitality, cultural institutions, performing arts, and extraordinary events across Vancouver & Surrey.",
      },
      { property: "og:title", content: `About Michelle Diamond — ${siteCopy.fullBrand}` },
      {
        property: "og:description",
        content:
          "Opera shaped how Michelle Diamond sees: discipline, timing, elegance, and respect for craft in every frame.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="meta-label">About Michelle</p>
            <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.25rem] fade-up">
              Michelle Diamond
              <br />
              <span className="italic text-oxblood">photographs exceptional work.</span>
            </h1>
            <p className="mt-10 max-w-md font-body text-lg leading-relaxed text-ink/80">
              Editorial photographer for luxury hospitality, cultural institutions,
              performing arts, and extraordinary events across Vancouver &amp; Surrey.
            </p>
            <p className="mt-4 font-sans-ui text-[11px] tracking-[0.18em] uppercase text-ink/50">
              Diamond&apos;s Edge Photography · {siteCopy.studio}
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src={aboutMichelleLead.src}
              alt={aboutMichelleLead.alt}
              width={1600}
              height={2400}
              className="w-full h-auto object-cover aspect-[4/5] fade-up"
            />
            <p className="mt-4 meta-label text-ink/55">{aboutMichelleLead.caption}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="meta-label">In the kit</p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                The photographer,{" "}
                <span className="italic text-oxblood">not a stand-in.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 sm:gap-1.5 lg:grid-cols-4">
            {aboutMichelleStrip.map((frame, i) => (
              <div
                key={frame.src}
                className="gallery-tile relative aspect-[3/4] overflow-hidden bg-paper"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-32">
          <div className="lg:col-span-4">
            <p className="meta-label">Movement I</p>
            <h2 className="mt-6 font-display text-4xl italic text-ink leading-[1.05]">
              Why these rooms
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 font-body text-[19px] leading-[1.7] text-ink/85">
            <p>
              Michelle is drawn to people who care deeply about creating something
              exceptional — chefs, artistic directors, performers, hosts, founders, and
              teams who have spent unseen hours getting the room ready.
            </p>
            <p>
              That is why the work spans luxury hospitality, cultural institutions,
              performing arts, and extraordinary events. She is interested not only in how
              beautiful the result looks, but in the craft, timing, and discipline that
              made it possible.
            </p>
            <blockquote className="border-l-2 border-oxblood pl-6 font-display text-2xl italic text-ink/90 leading-snug">
              &ldquo;I love being in rooms where people care deeply about creating something
              exceptional.&rdquo;
            </blockquote>
            <p className="font-sans-ui text-[11px] tracking-[0.15em] uppercase text-ink/45">
              Michelle Diamond
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30 bg-paper/60">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-32">
          <div className="lg:col-span-4">
            <p className="meta-label">Movement II</p>
            <h2 className="mt-6 font-display text-4xl italic text-ink leading-[1.05]">
              What opera taught her
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 font-body text-[19px] leading-[1.7] text-ink/85">
            <p>
              Opera shaped how Michelle sees. It taught her discipline, timing, elegance,
              and respect for craft. Today, those lessons influence every photograph she
              creates.
            </p>
            <p>
              That background is practical, not nostalgic. She understands rehearsals,
              backstage etiquette, lighting shifts, performers, orchestras, and when an
              emotional peak is about to arrive.
            </p>
            <p>
              The same instincts translate to gala floors, dining rooms, and institutional
              events: respect the craft, anticipate the moment, and make images that feel
              as composed as the work itself.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
          <div className="mb-6">
            <p className="meta-label">On camera</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Teaching presence —{" "}
              <span className="italic text-oxblood">same eye, different stage.</span>
            </h2>
            <p className="mt-3 max-w-xl font-body text-base text-ink/70">
              Workshop and speaking frames from Chai &amp; Chat and YVR Creatives — part of
              how she shows up beyond the assignment.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-1.5">
            {aboutMichelleSpeaking.map((frame, i) => (
              <div
                key={frame.src}
                className="gallery-tile group relative aspect-[3/2] overflow-hidden bg-paper"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-3">
                  <p className="font-sans-ui text-[10px] tracking-[0.18em] uppercase text-ivory/85">
                    {frame.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-32">
          <div className="lg:col-span-4">
            <p className="meta-label">Movement III</p>
            <h2 className="mt-6 font-display text-4xl italic text-ink leading-[1.05]">
              How she works in the room
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 font-body text-[19px] leading-[1.7] text-ink/85">
            <p>
              Based in Surrey and working regularly across Vancouver, with studio access at
              Nook Coworking in Richmond, Michelle brings a calm, editorial presence to
              commissioned work.
            </p>
            <p>
              Whether the assignment is a portrait sitting, opening night, or black-tie
              celebration, she is clear about usage, turnaround, and what the images need
              to do once they leave the room.
            </p>
            <dl className="mt-10 grid gap-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="meta-label">Based</dt>
                <dd className="mt-1">{siteCopy.location}</dd>
              </div>
              <div>
                <dt className="meta-label">Studio</dt>
                <dd className="mt-1">{siteCopy.studio}</dd>
              </div>
              <div>
                <dt className="meta-label">Contact</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteCopy.email}`} className="text-oxblood hover:opacity-70">
                    {siteCopy.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="meta-label">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href="https://www.instagram.com/diamondsedgephotography/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-oxblood hover:opacity-70"
                  >
                    @diamondsedgephotography
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-28 lg:py-36 text-center">
          <p className="meta-label">Coda</p>
          <h2 className="mt-8 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem]">
            Commissioning
            <br />
            <span className="italic text-oxblood">begins with a conversation.</span>
          </h2>
          <div className="mt-10">
            <Link
              to="/commission"
              className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

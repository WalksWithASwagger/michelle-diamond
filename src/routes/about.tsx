import { createFileRoute, Link } from "@tanstack/react-router";

import michellePortrait from "@/assets/michelle-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Michelle Diamond — Diamond's Edge Photography" },
      {
        name: "description",
        content:
          "Michelle Diamond photographs opera, performance, and cultural life from the inside — a former singer whose lens knows breath, timing, and the language of the stage.",
      },
      { property: "og:title", content: "About Michelle Diamond — Diamond's Edge Photography" },
      {
        property: "og:description",
        content:
          "A former opera singer photographing performance, portraiture, and cultural events with an insider's understanding.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-ivory text-ink">
      {/* Hero */}
      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <p className="meta-label">Portrait of the photographer</p>
            <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[4.25rem] fade-up">
              A singer, then
              <br />
              <span className="italic text-oxblood">a photographer.</span>
            </h1>
            <p className="mt-10 max-w-md font-body text-lg leading-relaxed text-ink/80">
              Michelle Diamond spent fifteen years on the operatic stage before turning
              to the camera. The training did not fall away — it became the lens.
            </p>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <img
              src={michellePortrait}
              alt="Editorial portrait of Michelle Diamond."
              width={1408}
              height={1760}
              className="w-full h-auto object-cover aspect-[4/5] fade-up"
            />
          </div>
        </div>
      </section>

      {/* The opera years */}
      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-32">
          <div className="lg:col-span-4">
            <p className="meta-label">Movement I</p>
            <h2 className="mt-6 font-display text-4xl italic text-ink leading-[1.05]">
              The opera years
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 font-body text-[19px] leading-[1.7] text-ink/85">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Michelle trained at
              conservatories in Europe and North America before joining the resident
              ensemble of a mid-sized company, where she sang bel canto and Mozart for
              nearly a decade.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore. The stagecraft, the sitzprobe, the
              silent count between a downbeat and a first phrase — this is where the
              eye was formed.
            </p>
            <blockquote className="border-l-2 border-oxblood pl-6 font-display text-2xl italic text-ink/90 leading-snug">
              &ldquo;The best photograph of a singer holds the breath just before the
              note.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* The turn to the lens */}
      <section className="border-b border-brass/30 bg-paper/60">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-32">
          <div className="lg:col-span-4">
            <p className="meta-label">Movement II</p>
            <h2 className="mt-6 font-display text-4xl italic text-ink leading-[1.05]">
              The turn to the lens
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 font-body text-[19px] leading-[1.7] text-ink/85">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. A vocal injury became a doorway. The
              same colleagues who had shared rehearsal rooms and dressing rooms began to
              ask for portraits — publicity photographs made by someone who understood
              the work.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam. Within two years the practice
              had grown to include full productions, season campaigns, and the quieter
              cultural gatherings that surround the work — patron dinners, foundation
              openings, festival receptions.
            </p>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-32">
          <div className="lg:col-span-4">
            <p className="meta-label">Movement III</p>
            <h2 className="mt-6 font-display text-4xl italic text-ink leading-[1.05]">
              How I work
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 font-body text-[19px] leading-[1.7] text-ink/85">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti. I arrive at the music
              call, not the dress rehearsal. Coverage begins where the work begins.
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat. I photograph quietly, in soft
              shoes, from the pit rim or from the back of the house. I do not use
              flash on stage, and I know when to lower the camera.
            </p>
            <blockquote className="border-l-2 border-oxblood pl-6 font-display text-2xl italic text-ink/90 leading-snug">
              &ldquo;Discretion is not a style. It is the working condition.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-32 lg:py-40 text-center">
          <p className="meta-label">Coda</p>
          <h2 className="mt-8 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem]">
            Commissioning
            <br />
            <span className="italic text-oxblood">a season, a production, a portrait.</span>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/commission"
              className="inline-flex items-center justify-center bg-oxblood px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss the work
            </Link>
            <Link
              to="/opera"
              className="inline-flex items-center justify-center border border-oxblood/60 px-10 py-5 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:bg-oxblood hover:text-primary-foreground transition-colors"
            >
              Opera portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

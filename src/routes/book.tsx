import { createFileRoute, Link } from "@tanstack/react-router";

import { siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: `Book — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Book a Nook community mini-session on UseSession, or commission Michelle for a custom production.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24">
          <p className="meta-label">Book Michelle</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl max-w-3xl">
            Two paths.
            <br />
            <span className="italic text-oxblood">Same craft.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/80">
            Community mini-sessions book on UseSession. Custom productions, events, and
            studio branding work start with a conversation.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-28">
          <div className="border border-brass/40 bg-paper/40 p-8 lg:p-10">
            <p className="meta-label">Path A</p>
            <h2 className="mt-6 font-display text-3xl text-ink">
              Nook headshot day
            </h2>
            <p className="mt-4 font-body text-lg text-ink/80 leading-relaxed">
              Monthly mini-sessions at {siteCopy.studio}. Community members: see the
              community rate. Everyone else: book a standard slot when available.
            </p>
            <a
              href={siteCopy.useSessionBook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-oxblood px-8 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground hover:opacity-90"
            >
              Open UseSession →
            </a>
            <p className="mt-6">
              <Link
                to="/services/community-rate"
                className="font-sans-ui text-[12px] tracking-[0.18em] uppercase text-oxblood border-b border-oxblood/40"
              >
                Community rate details
              </Link>
            </p>
          </div>

          <div className="border border-brass/40 p-8 lg:p-10">
            <p className="meta-label">Path B</p>
            <h2 className="mt-6 font-display text-3xl text-ink">
              Custom commission
            </h2>
            <p className="mt-4 font-body text-lg text-ink/80 leading-relaxed">
              Opera coverage, events, multi-look branding, private occasions. Tell Michelle
              what is being made — she responds within two working days.
            </p>
            <Link
              to="/commission"
              className="mt-8 inline-flex items-center justify-center border border-oxblood px-8 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:bg-oxblood hover:text-primary-foreground transition-colors"
            >
              Begin a conversation →
            </Link>
            <p className="mt-6 font-sans-ui text-[11px] tracking-[0.18em] uppercase text-ink/50">
              {siteCopy.response}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

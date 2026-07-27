import { createFileRoute, Link } from "@tanstack/react-router";

import { faqs, siteCopy } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${siteCopy.fullBrand}` },
      {
        name: "description",
        content:
          "Studio details, email, and common questions for Michelle Diamond / Diamond's Edge Photography.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-ivory text-ink">
      <section className="border-b border-brass/30">
        <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-16 lg:px-12 lg:pt-24">
          <p className="meta-label">Contact</p>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink sm:text-6xl max-w-4xl">
            Say hello.
            <br />
            <span className="italic text-oxblood">She replies within two working days.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-brass/30">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-7 space-y-8">
            <p className="font-body text-lg leading-relaxed text-ink/80">
              For a custom production, portrait, or event — use the commission form. For a
              Nook mini-session, book on UseSession. For a quick question, email works.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/commission"
                className="inline-flex items-center justify-center bg-oxblood px-8 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-primary-foreground hover:opacity-90"
              >
                Commission form
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center border border-oxblood px-8 py-4 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood hover:bg-oxblood hover:text-primary-foreground transition-colors"
              >
                Book paths
              </Link>
              <a
                href={`mailto:${siteCopy.email}`}
                className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.22em] uppercase text-oxblood self-center"
              >
                Email Michelle →
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 space-y-10">
            <div>
              <p className="meta-label">Email</p>
              <a
                href={`mailto:${siteCopy.email}`}
                className="mt-3 inline-block font-display text-2xl text-ink hover:text-oxblood"
              >
                {siteCopy.email}
              </a>
            </div>
            <div>
              <p className="meta-label">Studio</p>
              <p className="mt-3 font-display text-2xl text-ink">{siteCopy.studio}</p>
              <p className="mt-2 font-body text-sm text-ink/60">
                Studio sessions by appointment · {siteCopy.location}
              </p>
            </div>
            <div>
              <p className="meta-label">Elsewhere</p>
              <ul className="mt-3 space-y-2 font-sans-ui text-sm text-ink/80">
                <li>
                  <a href={siteCopy.instagram} target="_blank" rel="noreferrer" className="hover:text-oxblood">
                    Instagram
                  </a>
                </li>
                <li>
                  <Link to="/clients" className="hover:text-oxblood">
                    Client gallery portal
                  </Link>
                </li>
                <li>
                  <a href={siteCopy.useSessionBook} target="_blank" rel="noreferrer" className="hover:text-oxblood">
                    UseSession booking
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="meta-label">Response</p>
              <p className="mt-3 font-body text-sm text-ink/70">{siteCopy.response}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-3">
            <p className="meta-label">Common questions</p>
          </div>
          <ul className="lg:col-span-8 lg:col-start-5 space-y-8">
            {faqs.map((f) => (
              <li key={f.q} className="border-b border-brass/30 pb-6">
                <h3 className="font-display text-2xl text-ink">{f.q}</h3>
                <p className="mt-3 font-body text-base leading-relaxed text-ink/75">{f.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

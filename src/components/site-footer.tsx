import { Link } from "@tanstack/react-router";

import { principles, siteCopy } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-brass/30 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="meta-label">{siteCopy.fullBrand}</p>
            <p className="mt-6 font-display text-3xl leading-tight text-ink max-w-md">
              {siteCopy.promise}
            </p>
            <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink/70">
              {siteCopy.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.2em] uppercase text-oxblood hover:opacity-70"
              >
                Book Michelle
              </Link>
              <Link
                to="/commission"
                className="inline-flex items-center border-b border-ink/30 pb-1 font-sans-ui text-[12px] tracking-[0.2em] uppercase text-ink/70 hover:text-oxblood"
              >
                Commission
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="meta-label">Work</p>
            <ul className="mt-5 space-y-2.5 font-sans-ui text-sm text-ink/80">
              <li><Link to="/luxury" className="hover:text-oxblood">Luxury</Link></li>
              <li><Link to="/opera" className="hover:text-oxblood">Opera</Link></li>
              <li><Link to="/portraits" className="hover:text-oxblood">Portraits</Link></li>
              <li><Link to="/christmas" className="hover:text-oxblood">Christmas</Link></li>
              <li><Link to="/events" className="hover:text-oxblood">Events</Link></li>
              <li><Link to="/food" className="hover:text-oxblood">Food</Link></li>
              <li><Link to="/community" className="hover:text-oxblood">Community</Link></li>
              <li><Link to="/clients" className="hover:text-oxblood">Client galleries</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="meta-label">Studio</p>
            <ul className="mt-5 space-y-2.5 font-sans-ui text-sm text-ink/80">
              <li><Link to="/the-experience" className="hover:text-oxblood">The Experience</Link></li>
              <li><Link to="/services" className="hover:text-oxblood">Services</Link></li>
              <li><Link to="/journal" className="hover:text-oxblood">Journal</Link></li>
              <li><Link to="/session-prep" className="hover:text-oxblood">Session prep</Link></li>
              <li><Link to="/about" className="hover:text-oxblood">About</Link></li>
              <li><Link to="/contact" className="hover:text-oxblood">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="meta-label">Contact</p>
            <p className="mt-5 font-sans-ui text-sm text-ink/80 leading-relaxed">
              {siteCopy.studio}
              <br />
              {siteCopy.location}
            </p>
            <p className="mt-5 font-sans-ui text-sm">
              <a
                href={`mailto:${siteCopy.email}`}
                className="text-oxblood hover:opacity-70 border-b border-oxblood/50 pb-0.5"
              >
                {siteCopy.email}
              </a>
            </p>
            <p className="mt-3 font-sans-ui text-sm">
              <a
                href={siteCopy.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-ink/70 hover:text-oxblood"
              >
                Instagram
              </a>
              {" · "}
              <a
                href={siteCopy.useSessionBook}
                target="_blank"
                rel="noreferrer"
                className="text-ink/70 hover:text-oxblood"
              >
                UseSession
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-brass/30 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            © {new Date().getFullYear()} Michelle Diamond
          </p>
          <p className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            {principles.map((principle) => principle.title).join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}

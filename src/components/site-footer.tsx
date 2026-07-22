import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-brass/30 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="meta-label">Diamond&apos;s Edge Photography</p>
            <p className="mt-6 font-display text-3xl leading-tight text-ink max-w-md">
              Photography made from inside the performance.
            </p>
            <Link
              to="/commission"
              className="mt-8 inline-flex items-center border-b border-oxblood pb-1 font-sans-ui text-[12px] tracking-[0.2em] uppercase text-oxblood hover:opacity-70"
            >
              Begin a conversation
            </Link>
          </div>

          <div className="lg:col-span-3">
            <p className="meta-label">Work</p>
            <ul className="mt-5 space-y-2.5 font-sans-ui text-sm text-ink/80">
              <li><Link to="/opera" className="hover:text-oxblood">Opera &amp; performance</Link></li>
              <li><span className="text-ink/40">Portraits</span></li>
              <li><span className="text-ink/40">Events</span></li>
              <li><span className="text-ink/40">Journal</span></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="meta-label">Studio</p>
            <p className="mt-5 font-sans-ui text-sm text-ink/80 leading-relaxed">
              Available for commissions across North America and Europe. Response within
              two working days once availability is confirmed.
            </p>
            <p className="mt-5 font-sans-ui text-sm">
              <a href="mailto:studio@diamondsedge.photo" className="text-oxblood hover:opacity-70 border-b border-oxblood/50 pb-0.5">
                studio@diamondsedge.photo
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-brass/30 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            © {new Date().getFullYear()} Michelle Diamond
          </p>
          <p className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
            Season · Rehearsal · Portrait · Archive
          </p>
        </div>
      </div>
    </footer>
  );
}

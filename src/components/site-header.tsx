import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Opera", to: "/opera", enabled: true },
  { label: "Portraits", to: "#portraits", enabled: false },
  { label: "Events", to: "#events", enabled: false },
  { label: "About", to: "#about", enabled: false },
  { label: "Journal", to: "#journal", enabled: false },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur border-b border-brass/30" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-display text-xl text-ink group-hover:text-oxblood transition-colors">
            Diamond&apos;s Edge
          </span>
          <span className="meta-label mt-1 text-[10px]">Michelle Diamond · Photography</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) =>
            item.enabled ? (
              <Link
                key={item.label}
                to={item.to}
                className="font-sans-ui text-[13px] tracking-[0.18em] uppercase text-ink/80 hover:text-oxblood transition-colors"
                activeProps={{ className: "text-oxblood" }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                title="Coming soon"
                className="font-sans-ui text-[13px] tracking-[0.18em] uppercase text-ink/40 cursor-default"
              >
                {item.label}
              </span>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/commission"
            className="hidden md:inline-flex items-center justify-center border border-oxblood bg-oxblood px-5 py-2.5 font-sans-ui text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Commission Michelle
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="lg:hidden text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-px w-6 bg-current mb-1.5" />
            <span className="block h-px w-6 bg-current mb-1.5" />
            <span className="block h-px w-6 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brass/30 bg-ivory">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-6">
            {navItems.map((item) =>
              item.enabled ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-sans-ui text-sm tracking-[0.18em] uppercase text-ink py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="font-sans-ui text-sm tracking-[0.18em] uppercase text-ink/40 py-2"
                >
                  {item.label}
                </span>
              ),
            )}
            <Link
              to="/commission"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-oxblood px-5 py-3 font-sans-ui text-[12px] tracking-[0.2em] uppercase text-primary-foreground"
            >
              Commission Michelle
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

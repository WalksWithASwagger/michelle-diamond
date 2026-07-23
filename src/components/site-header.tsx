import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { getMyRole } from "@/lib/admin.functions";

const navItems = [
  { label: "Opera", to: "/opera" as const },
  { label: "Portraits", to: "/portraits" as const },
  { label: "Events", to: "/events" as const },
  { label: "About", to: "/about" as const },
];

function useSession() {
  const [hasSession, setHasSession] = useState(false);
  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => { if (active) setHasSession(!!data.session); });
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED" || event === "INITIAL_SESSION") {
        supabase.auth.getSession().then(({ data }) => { if (active) setHasSession(!!data.session); });
      }
    });
    return () => { active = false; sub.subscription.unsubscribe(); };
  }, []);
  return hasSession;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const hasSession = useSession();
  const role = useQuery({
    queryKey: ["me", "role"],
    queryFn: () => getMyRole(),
    enabled: hasSession,
    staleTime: 5 * 60 * 1000,
  });
  const showAdmin = hasSession && role.data?.isAdmin === true;

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
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-sans-ui text-[13px] tracking-[0.18em] uppercase text-ink/80 hover:text-oxblood transition-colors"
              activeProps={{ className: "text-oxblood" }}
            >
              {item.label}
            </Link>
          ))}
          {showAdmin && (
            <Link
              to="/admin"
              className="font-sans-ui text-[13px] tracking-[0.18em] uppercase text-ink/60 hover:text-oxblood transition-colors border-l border-brass/40 pl-9"
              activeProps={{ className: "text-oxblood" }}
            >
              Studio
            </Link>
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-sans-ui text-sm tracking-[0.18em] uppercase text-ink py-2"
              >
                {item.label}
              </Link>
            ))}
            {showAdmin && (
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="font-sans-ui text-sm tracking-[0.18em] uppercase text-ink/70 py-2 border-t border-brass/30 mt-2 pt-3"
              >
                Studio
              </Link>
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

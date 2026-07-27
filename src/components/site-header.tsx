import { Link, useRouterState } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { isSupabaseConfigured, supabase } from "@/integrations/supabase/client";
import { getMyRole } from "@/lib/admin.functions";

const navItems = [
  { label: "Luxury", to: "/luxury" as const },
  { label: "Opera", to: "/opera" as const },
  { label: "Portraits", to: "/portraits" as const },
  { label: "Christmas", to: "/christmas" as const },
  { label: "Events", to: "/events" as const },
  { label: "Food", to: "/food" as const },
  { label: "Community", to: "/community" as const },
  { label: "About", to: "/about" as const },
];

function useSession() {
  const [hasSession, setHasSession] = useState(false);
  useEffect(() => {
    // Public portfolio review works without Lovable Cloud Supabase keys.
    if (!isSupabaseConfigured()) return;
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setHasSession(!!data.session);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (
        event === "SIGNED_IN" ||
        event === "SIGNED_OUT" ||
        event === "USER_UPDATED" ||
        event === "INITIAL_SESSION"
      ) {
        supabase.auth.getSession().then(({ data }) => {
          if (active) setHasSession(!!data.session);
        });
      }
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);
  return hasSession;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onDarkHero = pathname === "/" && !scrolled;
  const hasSession = useSession();
  const role = useQuery({
    queryKey: ["me", "role"],
    queryFn: () => getMyRole(),
    enabled: hasSession,
    staleTime: 5 * 60 * 1000,
  });
  const showAdmin = hasSession && role.data?.isAdmin === true;

  const navClass = onDarkHero
    ? "font-sans-ui text-[13px] tracking-[0.18em] uppercase text-ivory/80 hover:text-shell transition-colors"
    : "font-sans-ui text-[13px] tracking-[0.18em] uppercase text-ink/80 hover:text-oxblood transition-colors";
  const navActiveClass = onDarkHero
    ? "font-sans-ui text-[13px] tracking-[0.18em] uppercase text-shell transition-colors"
    : "font-sans-ui text-[13px] tracking-[0.18em] uppercase text-oxblood transition-colors";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || !onDarkHero
          ? "bg-ivory/95 backdrop-blur border-b border-brass/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="flex flex-col leading-none group">
          <span
            className={`font-display text-xl transition-colors ${
              onDarkHero ? "text-ivory group-hover:text-shell" : "text-ink group-hover:text-oxblood"
            }`}
          >
            Diamond&apos;s Edge
          </span>
          <span className={`meta-label mt-1 text-[10px] ${onDarkHero ? "text-ivory/55" : ""}`}>
            Michelle Diamond · Photography
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={navClass}
              activeProps={{ className: navActiveClass }}
            >
              {item.label}
            </Link>
          ))}
          {showAdmin && (
            <Link
              to="/admin"
              className={`${navClass} border-l ${onDarkHero ? "border-ivory/30" : "border-brass/40"} pl-8 opacity-70`}
              activeProps={{
                className: `${navActiveClass} border-l ${onDarkHero ? "border-ivory/30" : "border-brass/40"} pl-8`,
              }}
            >
              Studio
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/book"
            className="hidden md:inline-flex items-center justify-center border border-oxblood bg-oxblood px-5 py-2.5 font-sans-ui text-[12px] tracking-[0.2em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Michelle
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={
              onDarkHero
                ? "inline-flex h-11 w-11 items-center justify-center lg:hidden text-ivory"
                : "inline-flex h-11 w-11 items-center justify-center lg:hidden text-ink"
            }
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-brass/30 bg-ivory">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center font-sans-ui text-sm tracking-[0.18em] uppercase text-ink py-2"
              >
                {item.label}
              </Link>
            ))}
            {showAdmin && (
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="mt-2 flex min-h-11 items-center border-t border-brass/30 pt-3 font-sans-ui text-sm tracking-[0.18em] uppercase text-ink/70 py-2"
              >
                Studio
              </Link>
            )}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-11 items-center justify-center bg-oxblood px-5 py-3 font-sans-ui text-[12px] tracking-[0.2em] uppercase text-primary-foreground"
            >
              Book Michelle
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";

type Week = {
  label: string;
  window: string;
  status: "gone-fast" | "goes-mid" | "still-open" | "not-open-yet" | "held";
  note: string;
};

/** Pattern-based holiday booking strip — not live inventory. */
const weeks: Week[] = [
  {
    label: "Booking opens",
    window: "Aug 15",
    status: "not-open-yet",
    note: "Past-client note goes out. Public inquiry opens the same morning.",
  },
  {
    label: "Early November",
    window: "Nov 1 – Nov 8 · Sat / Sun",
    status: "gone-fast",
    note: "Golden light, cards on time. Gone in about ten days most years.",
  },
  {
    label: "Second November",
    window: "Nov 9 – Nov 15 · Sat / Sun",
    status: "gone-fast",
    note: "Second-choice weekend that becomes first-choice by week two.",
  },
  {
    label: "Mid-late November",
    window: "Nov 16 – Nov 30 · weekends",
    status: "goes-mid",
    note: "Steady fill through September. Weekday afternoons stay open longer.",
  },
  {
    label: "Early December",
    window: "Dec 1 – Dec 15 · weekends",
    status: "still-open",
    note: "Wet ground, harder light. Studio is the smart play in this window.",
  },
  {
    label: "Panic slots",
    window: "Two dates in second week of Dec",
    status: "held",
    note: "Two slots held every year for the family who calls in December.",
  },
];

const statusLabel: Record<Week["status"], string> = {
  "gone-fast": "Fills first",
  "goes-mid": "Fills through Sep",
  "still-open": "Open longer",
  "not-open-yet": "Marker",
  held: "Held for late bookers",
};

const statusBar: Record<Week["status"], string> = {
  "gone-fast": "bg-oxblood",
  "goes-mid": "bg-oxblood/60",
  "still-open": "bg-oxblood/30",
  "not-open-yet": "bg-ink/25",
  held: "bg-oxblood/80",
};

export function ChristmasBookingCalendar() {
  const [active, setActive] = useState(1);
  const current = weeks[active];

  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="meta-label">When to book</p>
        <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
          What fills first, in one glance.
        </h3>
      </div>

      <div
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-3"
        role="tablist"
        aria-label="Christmas booking timeline"
      >
        {weeks.map((w, i) => {
          const isActive = i === active;
          return (
            <button
              key={w.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onFocus={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`min-h-[132px] p-4 text-left transition-colors border ${
                isActive ? "border-oxblood bg-paper/70" : "border-brass/40 hover:border-oxblood/50"
              }`}
            >
              <span className={`mb-3 block h-0.5 w-full ${statusBar[w.status]}`} aria-hidden />
              <p className="font-sans-ui text-[10px] tracking-[0.2em] uppercase text-ink/50">
                {w.label}
              </p>
              <p className="mt-2 font-display text-sm leading-tight text-ink md:text-base">
                {w.window}
              </p>
              <p className="mt-1 font-sans-ui text-[10px] tracking-[0.15em] uppercase text-oxblood/80">
                {statusLabel[w.status]}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-6 border border-brass/40 bg-paper/50 p-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="meta-label text-oxblood">{current.window}</p>
          <p className="mt-2 font-body text-base text-ink/85">{current.note}</p>
        </div>
        <Link
          to="/commission"
          search={{ type: "Portrait commission" }}
          className="inline-flex shrink-0 items-center justify-center bg-oxblood px-6 py-3 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-primary-foreground hover:opacity-90"
        >
          Get on the list →
        </Link>
      </div>
    </section>
  );
}

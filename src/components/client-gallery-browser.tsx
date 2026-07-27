import { useMemo, useState } from "react";

import { galleries, type ClientGallery } from "@/lib/clients";
import { siteCopy } from "@/lib/portfolio-data";

const kindLabel: Record<ClientGallery["kind"], string> = {
  event: "Event",
  portrait: "Portrait",
  family: "Family",
  wedding: "Wedding",
};

const filters: Array<"all" | ClientGallery["kind"]> = [
  "all",
  "event",
  "portrait",
  "family",
  "wedding",
];

export function ClientGalleryBrowser() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<(typeof filters)[number]>("all");

  const list = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return [...galleries]
      .filter((gallery) => (kind === "all" ? true : gallery.kind === kind))
      .filter((gallery) => {
        if (!normalized) return true;
        return (
          gallery.title.toLowerCase().includes(normalized) ||
          gallery.location?.toLowerCase().includes(normalized) ||
          kindLabel[gallery.kind].toLowerCase().includes(normalized)
        );
      })
      .sort((a, b) => (a.eventDate < b.eventDate ? 1 : -1));
  }, [kind, query]);

  return (
    <div>
      <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex-1 max-w-xl">
          <label htmlFor="gallery-search" className="meta-label mb-3 block">
            Search galleries
          </label>
          <input
            id="gallery-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Event name, location, or type"
            className="w-full border-b border-ink/25 bg-transparent py-3 font-body text-lg text-ink outline-none focus:border-oxblood"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery type">
          {filters.map((filter) => {
            const active = kind === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setKind(filter)}
                className={`border px-4 py-2 font-sans-ui text-[11px] tracking-[0.18em] uppercase transition-colors ${
                  active
                    ? "border-oxblood bg-oxblood text-primary-foreground"
                    : "border-ink/25 text-ink/70 hover:border-oxblood hover:text-oxblood"
                }`}
              >
                {filter === "all" ? "All" : kindLabel[filter]}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 font-sans-ui text-[11px] tracking-[0.2em] uppercase text-ink/50">
        {list.length} {list.length === 1 ? "gallery" : "galleries"}
      </p>

      <ul className="mt-8 divide-y divide-brass/30 border-t border-brass/30">
        {list.map((g) => (
          <li key={g.slug}>
            <a
              href={g.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 py-7 md:grid-cols-12 md:items-baseline md:gap-6"
            >
              <p className="meta-label md:col-span-2 text-oxblood/80">
                {kindLabel[g.kind]}
              </p>
              <div className="md:col-span-6">
                <p className="font-display text-2xl text-ink group-hover:text-oxblood transition-colors">
                  {g.title}
                  {g.protected && (
                    <span className="ml-3 font-sans-ui text-[10px] tracking-[0.2em] uppercase text-ink/45">
                      Password
                    </span>
                  )}
                </p>
                {g.location && (
                  <p className="mt-1 font-body text-sm text-ink/60">{g.location}</p>
                )}
              </div>
              <p className="font-sans-ui text-sm text-ink/55 md:col-span-2">
                {g.eventDate.slice(0, 7)}
                {g.count ? ` · ${g.count}` : ""}
              </p>
              <p className="font-sans-ui text-[11px] tracking-[0.2em] uppercase text-oxblood md:col-span-2 md:text-right">
                Open Pixieset →
              </p>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 font-body text-base text-ink/70">
        Missing a gallery password? Email{" "}
        <a href={`mailto:${siteCopy.email}`} className="text-oxblood border-b border-oxblood/40">
          {siteCopy.email}
        </a>
        .
      </p>
    </div>
  );
}

import { useState } from "react";

import { GalleryLightbox, type LightboxItem } from "./gallery-lightbox";

interface Props {
  items: LightboxItem[];
  /**
   * mosaic — dense at-a-glance wall (default)
   * brick — larger alternating spans
   * editorial — one plate per row with side caption (legacy / long-form)
   */
  variant?: "mosaic" | "brick" | "editorial";
}

export function GalleryGrid({ items, variant = "mosaic" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) {
    return (
      <p className="font-body text-lg italic text-ink/60">
        Photographs will appear here shortly.
      </p>
    );
  }

  if (variant === "editorial") {
    return (
      <>
        <div className="flex flex-col divide-y divide-brass/30">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group grid gap-8 py-12 text-left lg:grid-cols-12 lg:gap-14 lg:py-16"
            >
              <div className={`overflow-hidden lg:col-span-8 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={item.url}
                  alt={item.altText}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.02]"
                />
              </div>
              <div
                className={`lg:col-span-4 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <p className="meta-label">Plate {String(i + 1).padStart(2, "0")}</p>
                {item.title && (
                  <h3 className="mt-4 font-display text-3xl italic text-ink leading-[1.1]">
                    {item.title}
                  </h3>
                )}
                {item.caption && (
                  <p className="mt-3 font-body text-[17px] leading-relaxed text-ink/75">
                    {item.caption}
                  </p>
                )}
                <span className="mt-5 font-sans-ui text-[11px] tracking-[0.24em] uppercase text-oxblood/80 group-hover:text-oxblood">
                  View →
                </span>
              </div>
            </button>
          ))}
        </div>
        <GalleryLightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      </>
    );
  }

  if (variant === "brick") {
    return (
      <>
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-2 md:gap-3">
          {items.map((item, i) => {
            const span =
              i % 5 === 0
                ? "col-span-2 sm:col-span-6 lg:col-span-8"
                : i % 5 === 1
                  ? "col-span-1 sm:col-span-3 lg:col-span-4"
                  : i % 5 === 2
                    ? "col-span-1 sm:col-span-3 lg:col-span-5"
                    : i % 5 === 3
                      ? "col-span-1 sm:col-span-3 lg:col-span-7"
                      : "col-span-1 sm:col-span-3 lg:col-span-4";
            return (
              <Tile
                key={item.id}
                item={item}
                index={i}
                className={`${span} aspect-[4/5] sm:aspect-auto sm:min-h-[220px] lg:min-h-[280px]`}
                onOpen={() => setOpenIndex(i)}
              />
            );
          })}
        </div>
        <GalleryLightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      </>
    );
  }

  /* mosaic — dense editorial wall */
  return (
    <>
      <div className="gallery-mosaic">
        {items.map((item, i) => (
          <Tile
            key={item.id}
            item={item}
            index={i}
            className="aspect-[3/4]"
            onOpen={() => setOpenIndex(i)}
          />
        ))}
      </div>
      <GalleryLightbox
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}

function Tile({
  item,
  index,
  className,
  onOpen,
}: {
  item: LightboxItem;
  index: number;
  className?: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`gallery-tile group relative overflow-hidden bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood ${className ?? ""}`}
      style={{ animationDelay: `${Math.min(index, 16) * 45}ms` }}
      aria-label={item.title ? `${item.title}. ${item.altText}` : item.altText}
    >
      <img
        src={item.url}
        alt={item.altText}
        loading={index < 8 ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition-[box-shadow] duration-500 group-hover:shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--brass)_50%,transparent)] group-focus-visible:shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--oxblood)_70%,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 md:p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        {item.title && (
          <p className="font-display text-base md:text-lg italic text-ivory leading-tight">
            {item.title}
          </p>
        )}
        {item.caption && (
          <p className="mt-1.5 max-w-[28ch] font-body text-[13px] leading-snug text-ivory/75 line-clamp-2">
            {item.caption}
          </p>
        )}
      </div>
    </button>
  );
}

import { useState } from "react";

import { GalleryLightbox, type LightboxItem } from "./gallery-lightbox";

interface Props {
  items: LightboxItem[];
  /** Editorial single-column with captions to the side, or brick grid */
  variant?: "editorial" | "brick";
}

export function GalleryGrid({ items, variant = "brick" }: Props) {
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
              className="group grid gap-8 py-12 text-left lg:grid-cols-12 lg:gap-14 lg:py-20"
            >
              <div className={`overflow-hidden lg:col-span-8 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={item.url}
                  alt={item.altText}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-auto object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.015]"
                />
              </div>
              <div className={`lg:col-span-4 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="meta-label">Plate {String(i + 1).padStart(2, "0")}</p>
                {item.title && (
                  <h3 className="mt-5 font-display text-3xl italic text-ink leading-[1.1]">
                    {item.title}
                  </h3>
                )}
                {item.caption && (
                  <p className="mt-4 font-body text-[17px] leading-relaxed text-ink/75">
                    {item.caption}
                  </p>
                )}
                <span className="mt-6 font-sans-ui text-[11px] tracking-[0.24em] uppercase text-oxblood/80 group-hover:text-oxblood">
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

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6">
        {items.map((item, i) => {
          const span =
            i % 5 === 0 ? "sm:col-span-6 lg:col-span-12" :
            i % 5 === 1 ? "sm:col-span-3 lg:col-span-7" :
            i % 5 === 2 ? "sm:col-span-3 lg:col-span-5" :
            i % 5 === 3 ? "sm:col-span-3 lg:col-span-5" :
                         "sm:col-span-3 lg:col-span-7";
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => setOpenIndex(i)}
              className={`group relative overflow-hidden ${span} focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood`}
              aria-label={item.title ?? item.altText}
            >
              <img
                src={item.url}
                alt={item.altText}
                loading={i < 2 ? "eager" : "lazy"}
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.02]"
              />
              {item.title && (
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-display text-lg italic text-ivory leading-tight">{item.title}</p>
                </div>
              )}
            </button>
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

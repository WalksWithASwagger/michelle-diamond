import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type LightboxItem = {
  id: string;
  url: string;
  altText: string;
  title?: string | null;
  caption?: string | null;
};

interface Props {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

/**
 * Editorial lightbox with:
 * - Keyboard: ← → Esc Home End + focus trap
 * - Touch: swipe left/right to navigate, swipe down to close
 * - Visible prev/next on mobile
 * - "Stage-light" cursor spotlight that follows pointer/touch
 * - Reduced-motion: static centred halo
 */
export function GalleryLightbox({ items, index, onClose, onIndexChange }: Props) {
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<{ x: number; y: number; t: number } | null>(null);
  const [spot, setSpot] = useState({ x: 50, y: 45 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const isOpen = index !== null && items.length > 0;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "Home") {
        e.preventDefault();
        onIndexChange(0);
      } else if (e.key === "End") {
        e.preventDefault();
        onIndexChange(items.length - 1);
      } else if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, goPrev, goNext, onClose, onIndexChange, items.length]);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = overlayRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY, t: Date.now() };
    if (!reduced) {
      const rect = overlayRef.current?.getBoundingClientRect();
      if (rect) {
        setSpot({
          x: ((t.clientX - rect.left) / rect.width) * 100,
          y: ((t.clientY - rect.top) / rect.height) * 100,
        });
      }
    }
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (reduced) return;
    const t = e.touches[0];
    const rect = overlayRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((t.clientX - rect.left) / rect.width) * 100,
      y: ((t.clientY - rect.top) / rect.height) * 100,
    });
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);
    const dt = Date.now() - start.t;
    if (dt > 700) return;
    if (adx > 55 && adx > ady) {
      if (dx < 0) goNext();
      else goPrev();
    } else if (dy > 90 && ady > adx) {
      onClose();
    }
  };

  if (!mounted || !isOpen) return null;
  const current = items[index];

  const spotlight = reduced
    ? "radial-gradient(60% 55% at 50% 45%, rgba(245,240,231,0.10), rgba(0,0,0,0) 70%)"
    : `radial-gradient(28% 34% at ${spot.x}% ${spot.y}%, rgba(255,247,225,0.16), rgba(255,247,225,0.05) 45%, rgba(0,0,0,0) 70%)`;

  const chevronClass =
    "absolute top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center text-ivory/80 hover:text-ivory border border-ivory/25 hover:border-ivory/50 transition-colors bg-ink/30 backdrop-blur-sm";

  const overlay = (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={current.title ?? current.altText ?? "Photograph"}
      className="lightbox-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0a08]/95 backdrop-blur-sm"
      onPointerMove={onPointerMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-[background] duration-150 ease-out"
        style={{ background: spotlight, mixBlendMode: "screen" }}
      />

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 z-10 inline-flex min-h-11 min-w-11 items-center justify-center border border-ivory/25 px-4 py-2 font-sans-ui text-[11px] tracking-[0.24em] uppercase text-ivory/80 transition-colors hover:border-ivory/60 hover:text-ivory"
      >
        Close
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className={`${chevronClass} left-3 md:left-6`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className={`${chevronClass} right-3 md:right-6`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      <figure
        key={current.id}
        className="lightbox-figure relative z-[1] flex flex-col items-center max-w-[92vw] max-h-[86vh]"
      >
        <img
          src={current.url}
          alt={current.altText}
          className="max-h-[72vh] max-w-[92vw] w-auto h-auto object-contain shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
          draggable={false}
        />
        <figcaption className="mt-5 max-w-[62ch] px-6 text-center" aria-live="polite">
          {current.title && (
            <p className="font-display text-xl italic text-ivory/95 leading-tight">
              {current.title}
            </p>
          )}
          {current.caption && (
            <p className="mt-2 font-body text-[15px] text-ivory/70 leading-relaxed">
              {current.caption}
            </p>
          )}
          <p className="mt-3 font-sans-ui text-[10px] tracking-[0.28em] uppercase text-ivory/40">
            {index! + 1} / {items.length} · ← → · Esc
          </p>
        </figcaption>
      </figure>
    </div>
  );

  return createPortal(overlay, document.body);
}

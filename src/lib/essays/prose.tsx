import type { ReactNode } from "react";

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 font-body text-[18px] leading-[1.75] text-ink/85 first:mt-0">
      {children}
    </p>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 font-display text-3xl italic text-ink leading-tight sm:text-4xl">
      {children}
    </h2>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-6 space-y-3 font-body text-[17px] text-ink/85">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2.5 h-px w-5 shrink-0 bg-oxblood" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-8 border-l-2 border-oxblood pl-6 font-display text-2xl italic text-ink/90 leading-snug">
      {children}
    </blockquote>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-8 border border-brass/40 bg-paper/60 px-6 py-5 font-body text-[16px] leading-relaxed text-ink/80">
      {children}
    </aside>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-ink">{children}</strong>;
}

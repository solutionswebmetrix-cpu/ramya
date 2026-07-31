import type { ReactNode } from 'react';
import { PORTFOLIO } from '@/data/portfolioData';

type A4PageProps = {
  children: ReactNode;
  /** Page number, shown bottom-right in the footer. */
  page: number;
  /** Total pages, shown bottom-left footer label. */
  total: number;
  /** Dark or white page background. Cover & section dividers use dark. */
  dark?: boolean;
  /** Show the brand mark top-right and footer. Defaults true. */
  chrome?: boolean;
  /** Optional footer label override (left side). */
  footerLabel?: string;
  className?: string;
};

/** A single A4 portrait page surface. 210x297mm, print-fidelity. */
export function A4Page({
  children,
  page,
  total,
  dark = false,
  chrome = true,
  footerLabel,
  className = '',
}: A4PageProps) {
  return (
    <section
      className={`a4-page deck-anim-in ${dark ? 'a4-page--dark' : ''} ${className}`}
      aria-label={`Page ${page} of ${total}`}
    >
      {chrome && <span className="a4-brand">{PORTFOLIO.name}</span>}
      <div className="a4-inner">{children}</div>
      {chrome && (
        <div className="a4-footer">
          <span>{footerLabel ?? 'Digital Marketing Portfolio'}</span>
          <span className="tabular-nums">
            {String(page).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      )}
    </section>
  );
}

/** Page eyebrow + title block used at the top of content pages. */
export function PageHeader({
  eyebrow,
  title,
  highlight,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  dark?: boolean;
}) {
  return (
    <header className="mb-7">
      <span className="a4-eyebrow">{eyebrow}</span>
      <h2 className="a4-title mt-3 text-[26pt]">
        {title} {highlight && <span className="a4-gradient-text">{highlight}</span>}
      </h2>
      <div className="a4-accent-bar mt-3" />
    </header>
  );
}

/** Small stat chip used on results / project pages. */
export function StatChip({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div className="a4-card flex flex-col gap-0.5 px-3.5 py-2.5">
      <span className={`text-[15pt] font-bold a4-gradient-text`}>{value}</span>
      <span className="text-[7.5pt] uppercase tracking-wider text-slate-500">{label}</span>
    </div>
  );
}

/** Decorative abstract corner flourish for dark cover/divider pages. */
export function CornerFlourish() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-[90px]" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-500/25 blur-[80px]" />
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, #2563eb 80deg, #06b6d4 200deg, transparent 320deg)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

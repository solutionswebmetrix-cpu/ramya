import { A4Page, CornerFlourish } from '@/components/portfolio/A4Page';
import { PORTFOLIO } from '@/data/portfolioData';

export function Page1Cover({ total }: { total: number }) {
  return (
    <A4Page page={1} total={total} dark chrome={false}>
      <CornerFlourish />

      {/* Top label */}
      <div className="relative flex items-center justify-between text-[8pt] uppercase tracking-[0.22em] text-slate-400">
        <span>Digital Marketing Portfolio</span>
        <span>2026</span>
      </div>

      {/* Monogram */}
      <div className="relative mt-10 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-lg font-extrabold text-white">
          T
        </span>
        <span className="text-[10pt] font-semibold tracking-[0.18em] text-slate-300">TUBA ANSARI</span>
      </div>

      {/* Portrait */}
      <div className="relative mt-8 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-brand-600/40 to-accent-500/30 blur-2xl" />
          <div className="relative h-56 w-44 overflow-hidden rounded-2xl border border-white/15">
            <img
              src={PORTFOLIO.portrait}
              alt="Tuba Ansari portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name + title */}
      <div className="relative mt-8 text-center">
        <h1 className="font-[Poppins] text-[40pt] font-extrabold leading-[1.05] tracking-tight text-white">
          {PORTFOLIO.name}
        </h1>
        <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent-400" />
        <p className="mx-auto mt-4 max-w-[150mm] text-[12pt] font-medium text-slate-200">
          Digital Marketing Specialist
          <span className="mx-2 text-slate-500">|</span>
          SEO Expert
          <span className="mx-2 text-slate-500">|</span>
          Content Creator
        </p>
        <p className="mx-auto mt-5 max-w-[140mm] text-[10pt] leading-relaxed text-slate-400">
          {PORTFOLIO.tagline}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-[8pt] text-slate-400">
        <span>{PORTFOLIO.email}</span>
        <span className="text-slate-500">{PORTFOLIO.linkedin}</span>
        <span>{PORTFOLIO.phone}</span>
      </div>
    </A4Page>
  );
}

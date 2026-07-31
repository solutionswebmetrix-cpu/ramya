import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { WEBSITE_SAMPLES } from '@/data/portfolioData';

export function Page13WebsiteContent({ total }: { total: number }) {
  return (
    <A4Page page={13} total={total} footerLabel="Website Content">
      <PageHeader eyebrow="Website Content" title="Copy that turns visitors into" highlight="customers" />

      <div className="space-y-4">
        {WEBSITE_SAMPLES.map((sample) => (
          <article key={sample.page} className="a4-card grid grid-cols-[0.9fr_1.1fr] overflow-hidden">
            <div className="border-r border-slate-200 bg-slate-50 p-4">
              <span className="text-[7pt] font-semibold uppercase tracking-wider text-brand-600">
                {sample.page}
              </span>
              <h3 className="mt-2 text-[12pt] font-bold leading-snug text-slate-900">
                {sample.headline}
              </h3>
            </div>
            <div className="p-4">
              <p className="text-[8.5pt] leading-relaxed text-slate-600">{sample.body}</p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-brand-600/10 px-2.5 py-1 text-[7pt] font-medium text-brand-600">
                  Benefit-led
                </span>
                <span className="rounded-full bg-accent-500/10 px-2.5 py-1 text-[7pt] font-medium text-accent-600">
                  Concise
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[7pt] font-medium text-slate-600">
                  CTA-ready
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-auto a4-card flex items-center gap-4 p-4">
        <span className="text-[18pt] font-bold a4-gradient-text">32%</span>
        <p className="text-[8.5pt] text-slate-600">
          Average conversion uplift after rewriting website copy with clear value propositions and calls to action.
        </p>
      </div>
    </A4Page>
  );
}

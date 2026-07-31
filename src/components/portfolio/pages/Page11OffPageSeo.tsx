import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { Icon } from '@/components/ui/Primitives';
import { OFFPAGE_ACTIVITIES } from '@/data/portfolioData';

export function Page11OffPageSeo({ total }: { total: number }) {
  return (
    <A4Page page={11} total={total} footerLabel="Off-Page SEO">
      <PageHeader eyebrow="Off-Page SEO" title="Building authority" highlight="beyond your site" />

      <p className="text-[9pt] leading-relaxed text-slate-600">
        Off-page SEO signals — backlinks, social mentions, and brand presence — tell search engines
        your site is trusted. I run a measured mix of link-building and off-page activities to grow
        domain authority sustainably.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3.5">
        {OFFPAGE_ACTIVITIES.map((item) => (
          <div key={item.label} className="a4-card flex gap-3 p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-600/10 text-brand-600">
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-[9.5pt] font-semibold text-slate-800">{item.label}</h3>
              <p className="mt-1 text-[8pt] leading-relaxed text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-3 gap-3">
        {[
          { l: 'Backlinks Built', v: '80+' },
          { l: 'Avg. Referring DA', v: '35+' },
          { l: 'Domain Rating Lift', v: '+12' },
        ].map((s) => (
          <div key={s.l} className="a4-card flex flex-col items-center py-4 text-center">
            <span className="text-[16pt] font-bold a4-gradient-text">{s.v}</span>
            <span className="mt-0.5 text-[7pt] uppercase tracking-wider text-slate-500">{s.l}</span>
          </div>
        ))}
      </div>
    </A4Page>
  );
}

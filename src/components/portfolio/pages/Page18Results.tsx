import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { Icon } from '@/components/ui/Primitives';
import { ACHIEVEMENTS } from '@/data/portfolioData';

export function Page18Results({ total }: { total: number }) {
  return (
    <A4Page page={18} total={total} footerLabel="Results & Achievements">
      <PageHeader eyebrow="Results & Achievements" title="Metrics that" highlight="matter" />

      <div className="grid grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.label}
            className="a4-card relative flex flex-col items-center gap-2 overflow-hidden p-5 text-center"
          >
            <span
              className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-brand-500/10 to-accent-400/10"
              aria-hidden
            />
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <Icon name={a.icon} className="h-5 w-5" />
            </span>
            <span className="text-[20pt] font-extrabold leading-none a4-gradient-text">{a.value}</span>
            <span className="text-[8pt] font-medium uppercase tracking-wider text-slate-500">
              {a.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mini bar chart of organic traffic growth */}
      <div className="mt-6 a4-card p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[10pt] font-semibold text-slate-800">Organic Traffic Growth</h3>
          <span className="text-[8pt] text-slate-400">6-month trend</span>
        </div>
        <div className="mt-4 flex h-24 items-end justify-between gap-2">
          {[40, 52, 48, 61, 74, 100].map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-accent-400"
                style={{ height: `${h}%` }}
              />
              <span className="text-[7pt] text-slate-400">M{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto a4-card flex items-center gap-4 p-4">
        <span className="text-[14pt] font-bold text-emerald-600">+45%</span>
        <p className="text-[8.5pt] text-slate-600">
          Average organic traffic growth delivered across SEO projects within the first six months.
        </p>
      </div>
    </A4Page>
  );
}

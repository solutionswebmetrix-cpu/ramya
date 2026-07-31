import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { ONPAGE_OPTIMIZATIONS } from '@/data/portfolioData';

export function Page10OnPageSeo({ total }: { total: number }) {
  return (
    <A4Page page={10} total={total} footerLabel="On-Page SEO">
      <PageHeader eyebrow="On-Page SEO" title="Optimisation that" highlight="ranks pages" />

      <p className="text-[9pt] leading-relaxed text-slate-600">
        Every page is optimised against a documented checklist — title tags, meta descriptions,
        headings, URL structure, internal links, and image alt text — to give search engines clear,
        relevant signals.
      </p>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-[8.5pt]">
          <thead>
            <tr className="bg-slate-100 text-left text-slate-600">
              <th className="px-3 py-2 font-semibold">Element</th>
              <th className="px-3 py-2 font-semibold">Before</th>
              <th className="px-3 py-2 font-semibold">After</th>
            </tr>
          </thead>
          <tbody>
            {ONPAGE_OPTIMIZATIONS.map((row, i) => (
              <tr key={row.label} className={i % 2 ? 'bg-slate-50/60' : 'bg-white'}>
                <td className="px-3 py-2 font-semibold text-slate-800">{row.label}</td>
                <td className="px-3 py-2 text-slate-400 line-through decoration-red-300/60">{row.before}</td>
                <td className="px-3 py-2 font-medium text-slate-700">{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3.5">
        <div className="a4-card p-4">
          <h3 className="text-[9.5pt] font-semibold text-slate-800">Title & Meta</h3>
          <p className="mt-1.5 text-[8pt] leading-relaxed text-slate-600">
            Primary keyword placed early in the title; meta description kept under 155 characters with a
            clear call to action.
          </p>
        </div>
        <div className="a4-card p-4">
          <h3 className="text-[9.5pt] font-semibold text-slate-800">Internal Linking</h3>
          <p className="mt-1.5 text-[8pt] leading-relaxed text-slate-600">
            Contextual links to pillar pages pass authority and help search engines discover and rank
            related content faster.
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 a4-card p-4">
        <span className="text-[16pt] font-bold text-emerald-600">+18%</span>
        <p className="text-[8.5pt] text-slate-600">
          Average click-through rate improvement after applying on-page optimisations across a 40-page site.
        </p>
      </div>
    </A4Page>
  );
}

import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { KEYWORDS } from '@/data/portfolioData';

export function Page9KeywordResearch({ total }: { total: number }) {
  return (
    <A4Page page={9} total={total} footerLabel="Keyword Research">
      <PageHeader eyebrow="Keyword Research" title="Finding the terms that" highlight="drive traffic" />

      <p className="text-[9pt] leading-relaxed text-slate-600">
        Using SEMrush and Google Search Console, I build keyword maps aligned to search intent —
        balancing volume, difficulty, and relevance to prioritise quick wins and strategic wins.
      </p>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full border-collapse text-[8pt]">
          <thead>
            <tr className="bg-slate-100 text-left text-slate-600">
              <th className="px-3 py-2 font-semibold">Keyword</th>
              <th className="px-3 py-2 font-semibold">Monthly Volume</th>
              <th className="px-3 py-2 font-semibold">Difficulty</th>
              <th className="px-3 py-2 font-semibold">Intent</th>
              <th className="px-3 py-2 font-semibold">Position</th>
              <th className="px-3 py-2 font-semibold">Trend</th>
            </tr>
          </thead>
          <tbody>
            {KEYWORDS.map((row, i) => (
              <tr key={row.keyword} className={i % 2 ? 'bg-slate-50/60' : 'bg-white'}>
                <td className="px-3 py-2 font-medium text-slate-800">{row.keyword}</td>
                <td className="px-3 py-2 tabular-nums text-slate-600">{row.volume}</td>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-200">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400"
                        style={{ width: `${row.difficulty}%` }}
                      />
                    </div>
                    <span className="tabular-nums text-slate-500">{row.difficulty}</span>
                  </div>
                </td>
                <td className="px-3 py-2 text-slate-600">{row.intent}</td>
                <td className="px-3 py-2 font-semibold tabular-nums text-brand-600">{row.position}</td>
                <td className="px-3 py-2 font-medium text-emerald-600">{row.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-auto grid grid-cols-3 gap-3">
        {[
          { l: 'Keywords Tracked', v: '120+' },
          { l: 'Avg. Difficulty', v: '51' },
          { l: 'Intent Coverage', v: '4 types' },
        ].map((s) => (
          <div key={s.l} className="a4-card flex items-center justify-between px-4 py-3">
            <span className="text-[8pt] uppercase tracking-wider text-slate-500">{s.l}</span>
            <span className="text-[13pt] font-bold a4-gradient-text">{s.v}</span>
          </div>
        ))}
      </div>
    </A4Page>
  );
}

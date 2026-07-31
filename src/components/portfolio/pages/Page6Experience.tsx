import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { EXPERIENCE } from '@/data/portfolioData';

export function Page6Experience({ total }: { total: number }) {
  return (
    <A4Page page={6} total={total} footerLabel="Work Experience">
      <PageHeader eyebrow="Work Experience" title="My professional" highlight="journey" />

      <div className="relative mt-2 flex-1">
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-brand-500 via-accent-400/50 to-transparent" />

        <ol className="space-y-6">
          {EXPERIENCE.map((item) => (
            <li key={item.title} className="relative pl-8">
              <span className="absolute left-0 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-400 ring-2 ring-white" />
              <div className="a4-card p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[7.5pt] font-semibold uppercase tracking-wider text-brand-600">
                    {item.period}
                  </span>
                  <span className="text-[7.5pt] text-slate-400">{item.org}</span>
                </div>
                <h3 className="mt-1.5 text-[12pt] font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-[8.8pt] leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="a4-card mt-6 flex items-center gap-4 p-4">
          <span className="text-[22pt] font-bold a4-gradient-text">2+</span>
          <div>
            <p className="text-[10pt] font-semibold text-slate-800">Years of hands-on experience</p>
            <p className="text-[8.5pt] text-slate-500">Across freelance clients and in-house roles</p>
          </div>
        </div>
      </div>
    </A4Page>
  );
}

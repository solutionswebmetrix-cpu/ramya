import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { EDUCATION } from '@/data/portfolioData';

export function Page5Education({ total }: { total: number }) {
  return (
    <A4Page page={5} total={total} footerLabel="Education & Certifications">
      <PageHeader eyebrow="Education & Certifications" title="Verified" highlight="credentials" />

      <div className="relative mt-2">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-brand-500 via-accent-400/50 to-transparent" />

        <ol className="space-y-5">
          {EDUCATION.map((item) => (
            <li key={item.title} className="relative pl-8">
              <span className="absolute left-0 top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-400 ring-2 ring-white" />
              <div className="a4-card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[7.5pt] font-semibold uppercase tracking-wider text-brand-600">
                    {item.period}
                  </span>
                  <span className="text-[7.5pt] text-slate-400">{item.org}</span>
                </div>
                <h3 className="mt-1.5 text-[11pt] font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-[8.5pt] leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </A4Page>
  );
}

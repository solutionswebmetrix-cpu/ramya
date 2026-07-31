import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { Icon } from '@/components/ui/Primitives';
import { HIRE_REASONS } from '@/data/portfolioData';

export function Page19WhyHireMe({ total }: { total: number }) {
  return (
    <A4Page page={19} total={total} footerLabel="Why Hire Me">
      <PageHeader eyebrow="Why Hire Me" title="Reasons to work" highlight="with me" />

      <div className="grid grid-cols-2 gap-3.5">
        {HIRE_REASONS.map((reason) => (
          <div key={reason.title} className="a4-card flex gap-3 p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <Icon name={reason.icon} className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-[9.5pt] font-semibold text-slate-800">{reason.title}</h3>
              <p className="mt-1 text-[7.8pt] leading-relaxed text-slate-600">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto a4-card flex items-center justify-between p-5">
        <div>
          <p className="text-[11pt] font-bold text-slate-900">Ready to grow your brand?</p>
          <p className="mt-1 text-[8.5pt] text-slate-600">Let's talk about your goals on the next page.</p>
        </div>
        <span className="rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-5 py-2 text-[8.5pt] font-semibold text-white">
          Let's collaborate
        </span>
      </div>
    </A4Page>
  );
}

import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { Icon } from '@/components/ui/Primitives';
import { SERVICES } from '@/data/portfolioData';

export function Page7Services({ total }: { total: number }) {
  return (
    <A4Page page={7} total={total} footerLabel="Services">
      <PageHeader eyebrow="Services" title="What I can" highlight="do for you" />

      <div className="grid grid-cols-3 gap-3.5">
        {SERVICES.map((service, i) => (
          <div key={service.title} className="a4-card relative flex flex-col p-4">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <Icon name={service.icon} className="h-4 w-4" />
            </span>
            <h3 className="mt-3 text-[10pt] font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-1.5 text-[7.8pt] leading-relaxed text-slate-600">
              {service.description}
            </p>
            <span className="pointer-events-none absolute bottom-2 right-3 text-[28pt] font-black text-slate-100">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto a4-card flex items-center justify-between p-4">
        <p className="text-[9pt] text-slate-600">
          Need a custom combination? I tailor packages to your goals and budget.
        </p>
        <span className="rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-4 py-1.5 text-[8pt] font-semibold text-white">
          Custom packages available
        </span>
      </div>
    </A4Page>
  );
}

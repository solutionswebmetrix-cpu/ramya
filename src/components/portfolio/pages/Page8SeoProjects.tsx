import { A4Page, PageHeader, StatChip } from '@/components/portfolio/A4Page';
import { SEO_PROJECTS } from '@/data/portfolioData';

export function Page8SeoProjects({ total }: { total: number }) {
  return (
    <A4Page page={8} total={total} footerLabel="SEO Projects">
      <PageHeader eyebrow="SEO Projects" title="Selected work &" highlight="results" />

      <div className="space-y-5">
        {SEO_PROJECTS.map((project) => (
          <article key={project.title} className="a4-card overflow-hidden">
            <div className="grid grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-40 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-brand-600/90 px-2.5 py-1 text-[7pt] font-semibold text-white">
                  SEO
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <span className="text-[7pt] font-semibold uppercase tracking-wider text-emerald-600">
                    {project.result}
                  </span>
                </div>
                <h3 className="mt-1.5 text-[12pt] font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-1.5 text-[8pt] leading-relaxed text-slate-600">
                  {project.description}
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg bg-slate-50 px-2 py-1.5 text-center">
                      <div className="text-[10pt] font-bold a4-gradient-text">{m.value}</div>
                      <div className="text-[6.5pt] uppercase tracking-wide text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-4 gap-2.5">
        <StatChip label="Avg. Traffic Lift" value="+45%" />
        <StatChip label="Keywords Ranked" value="50+" />
        <StatChip label="Articles Optimized" value="120+" />
        <StatChip label="Avg. Position" value="3.4" />
      </div>
    </A4Page>
  );
}

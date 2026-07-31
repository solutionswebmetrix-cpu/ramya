import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { Icon } from '@/components/ui/Primitives';
import { TOOLS } from '@/data/portfolioData';

export function Page4Tools({ total }: { total: number }) {
  return (
    <A4Page page={4} total={total} footerLabel="Tools & Platforms">
      <PageHeader eyebrow="Tools" title="The platforms I" highlight="work with daily" />

      <div className="grid grid-cols-5 gap-3.5">
        {TOOLS.map((tool) => (
          <div
            key={tool.name}
            className="a4-card flex flex-col items-center gap-2.5 px-2 py-5 text-center"
          >
            <span
              className="grid h-11 w-11 place-items-center rounded-xl"
              style={{ background: `${tool.tint}18`, color: tool.tint }}
            >
              <Icon name={tool.icon} className="h-5 w-5" />
            </span>
            <span className="text-[7.8pt] font-semibold leading-tight text-slate-700">
              {tool.name}
            </span>
          </div>
        ))}

        {/* Fill cells to keep a tidy 5-col grid (10 tools = 2 rows) */}
      </div>

      <div className="mt-7 a4-card p-5">
        <p className="text-[8pt] font-semibold uppercase tracking-wider text-slate-500">Workflow</p>
        <p className="mt-2 text-[9pt] leading-relaxed text-slate-600">
          My day-to-day combines research (SEMrush, Search Console), creation (Canva, Photoshop,
          WordPress, Elementor, ChatGPT), and measurement (Google Analytics, Meta Business Suite,
          Google Ads) — so strategy, execution, and reporting stay tightly connected.
        </p>
      </div>
    </A4Page>
  );
}

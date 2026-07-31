import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { ABOUT_PARAGRAPHS, PORTFOLIO } from '@/data/portfolioData';

const EXPERTISE = [
  'SEO', 'Content Marketing', 'Graphic Design', 'Social Media Marketing', 'WordPress', 'Google Analytics',
];

export function Page2About({ total }: { total: number }) {
  return (
    <A4Page page={2} total={total} footerLabel="About Me">
      <PageHeader eyebrow="About Me" title="Turning strategy into" highlight="measurable growth" />

      <div className="grid grid-cols-[0.8fr_1.2fr] gap-8">
        {/* Portrait */}
        <div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand-600/15 to-accent-500/10 blur-xl" />
            <img
              src={PORTFOLIO.portrait}
              alt="Tuba Ansari"
              className="relative aspect-[4/5] w-full rounded-2xl border border-slate-200 object-cover"
            />
          </div>
          <div className="a4-card mt-4 px-4 py-3">
            <p className="text-[8pt] uppercase tracking-wider text-slate-500">Based in</p>
            <p className="text-[10pt] font-semibold text-slate-800">India · Available Remote</p>
          </div>
          <div className="a4-card mt-3 px-4 py-3">
            <p className="text-[8pt] uppercase tracking-wider text-slate-500">Experience</p>
            <p className="text-[10pt] font-semibold text-slate-800">2+ Years · Freelance + In-house</p>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col">
          <h3 className="font-[Poppins] text-[15pt] font-bold text-slate-900">
            Hello, I'm {PORTFOLIO.name.split(' ')[0]}.
          </h3>
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <p key={i} className="mt-3 text-[9.5pt] leading-relaxed text-slate-600">
              {p}
            </p>
          ))}

          <p className="mt-5 text-[8.5pt] font-semibold uppercase tracking-wider text-slate-500">
            Core Expertise
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {EXPERTISE.map((e) => (
              <span
                key={e}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[8.5pt] font-medium text-slate-700"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </A4Page>
  );
}

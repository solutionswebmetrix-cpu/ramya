import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { SKILLS } from '@/data/portfolioData';

export function Page3Skills({ total }: { total: number }) {
  // Split into two columns for A4 fit
  const colA = SKILLS.slice(0, 8);
  const colB = SKILLS.slice(8);

  const renderBar = (name: string, level: number, idx: number) => (
    <li key={name} className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-[9.5pt] font-medium text-slate-700">{name}</span>
        <span className="text-[8pt] tabular-nums text-slate-400">{level}%</span>
      </div>
      <div className="a4-progress">
        <span style={{ width: `${level}%`, transitionDelay: `${idx * 60}ms` }} />
      </div>
    </li>
  );

  return (
    <A4Page page={3} total={total} footerLabel="Skills & Expertise">
      <PageHeader eyebrow="Skills" title="A full-stack" highlight="digital toolkit" />

      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        <ul className="space-y-3.5">{colA.map((s, i) => renderBar(s.name, s.level, i))}</ul>
        <ul className="space-y-3.5">{colB.map((s, i) => renderBar(s.name, s.level, i))}</ul>
      </div>

      <div className="mt-auto grid grid-cols-3 gap-3">
        {[
          { v: '15+', l: 'Core Skills' },
          { v: '10+', l: 'Tools Mastered' },
          { v: '2+', l: 'Years Experience' },
        ].map((s) => (
          <div key={s.l} className="a4-card flex flex-col items-center py-4 text-center">
            <span className="text-[18pt] font-bold a4-gradient-text">{s.v}</span>
            <span className="mt-0.5 text-[7.5pt] uppercase tracking-wider text-slate-500">{s.l}</span>
          </div>
        ))}
      </div>
    </A4Page>
  );
}

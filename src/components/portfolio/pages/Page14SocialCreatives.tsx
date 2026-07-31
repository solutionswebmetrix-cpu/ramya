import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { SOCIAL_CREATIVES } from '@/data/portfolioData';

export function Page14SocialCreatives({ total }: { total: number }) {
  return (
    <A4Page page={14} total={total} footerLabel="Social Media Creatives">
      <PageHeader eyebrow="Social Media Creatives" title="Posts that stop" highlight="the scroll" />

      <div className="grid grid-cols-4 gap-3.5">
        {SOCIAL_CREATIVES.map((item) => (
          <figure key={item.title} className="a4-card overflow-hidden">
            <div className="relative aspect-square overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <span className="absolute left-2 top-2 rounded-full bg-ink-900/70 px-2 py-0.5 text-[6.5pt] font-semibold text-white backdrop-blur-sm">
                {item.platform}
              </span>
            </div>
            <figcaption className="px-2.5 py-2">
              <p className="text-[8pt] font-semibold leading-tight text-slate-800">{item.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3.5">
        <div className="a4-card p-4">
          <h3 className="text-[9.5pt] font-semibold text-slate-800">Content Types</h3>
          <ul className="mt-2 space-y-1 text-[8pt] text-slate-600">
            <li>• Instagram single posts & carousels</li>
            <li>• Facebook engagement posts</li>
            <li>• Festival & seasonal creatives</li>
            <li>• Story templates & reels covers</li>
          </ul>
        </div>
        <div className="a4-card p-4">
          <h3 className="text-[9.5pt] font-semibold text-slate-800">Design Principles</h3>
          <ul className="mt-2 space-y-1 text-[8pt] text-slate-600">
            <li>• Consistent brand colour & type system</li>
            <li>• Clear visual hierarchy & focal point</li>
            <li>• On-brand captions with hooks</li>
            <li>• Optimised dimensions per platform</li>
          </ul>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 a4-card p-4">
        <span className="text-[16pt] font-bold a4-gradient-text">2x</span>
        <p className="text-[8.5pt] text-slate-600">Average engagement rate increase across managed social accounts.</p>
      </div>
    </A4Page>
  );
}

import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { GRAPHIC_CREATIVES } from '@/data/portfolioData';

export function Page16GraphicDesign({ total }: { total: number }) {
  return (
    <A4Page page={16} total={total} footerLabel="Graphic Design">
      <PageHeader eyebrow="Graphic Design" title="Posters, banners &" highlight="infographics" />

      <div className="grid grid-cols-4 gap-3.5">
        {GRAPHIC_CREATIVES.map((item) => (
          <figure key={item.title} className="a4-card overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <span className="absolute left-2 top-2 rounded-full bg-brand-600/90 px-2 py-0.5 text-[6.5pt] font-semibold text-white">
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
          <h3 className="text-[9.5pt] font-semibold text-slate-800">Deliverables</h3>
          <ul className="mt-2 space-y-1 text-[8pt] text-slate-600">
            <li>• Event & promotional posters</li>
            <li>• Web and social banners</li>
            <li>• Service & product flyers</li>
            <li>• Data-driven infographics</li>
          </ul>
        </div>
        <div className="a4-card p-4">
          <h3 className="text-[9.5pt] font-semibold text-slate-800">Tools & Output</h3>
          <ul className="mt-2 space-y-1 text-[8pt] text-slate-600">
            <li>• Adobe Photoshop for compositing</li>
            <li>• Canva for fast on-brand layouts</li>
            <li>• Print-ready PDF & high-res PNG</li>
            <li>• Source files supplied on request</li>
          </ul>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 a4-card p-4">
        <span className="text-[16pt] font-bold a4-gradient-text">50+</span>
        <p className="text-[8.5pt] text-slate-600">Graphics designed across posters, banners, flyers, and infographics.</p>
      </div>
    </A4Page>
  );
}

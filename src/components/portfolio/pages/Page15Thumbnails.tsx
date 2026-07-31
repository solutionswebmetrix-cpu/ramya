import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { THUMBNAIL_CREATIVES } from '@/data/portfolioData';

export function Page15Thumbnails({ total }: { total: number }) {
  return (
    <A4Page page={15} total={total} footerLabel="Thumbnail Designs">
      <PageHeader eyebrow="Thumbnail Designs" title="Click-worthy" highlight="YouTube thumbnails" />

      <div className="grid grid-cols-2 gap-4">
        {THUMBNAIL_CREATIVES.map((item) => (
          <figure key={item.title} className="a4-card overflow-hidden">
            <div className="relative aspect-video overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <span className="absolute left-2.5 top-2.5 rounded bg-red-600/90 px-2 py-0.5 text-[7pt] font-bold text-white">
                {item.platform}
              </span>
            </div>
            <figcaption className="flex items-center justify-between px-3 py-2.5">
              <p className="text-[9pt] font-semibold text-slate-800">{item.title}</p>
              <span className="text-[7pt] text-slate-400">16:9 · 1280×720</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 a4-card p-4">
        <h3 className="text-[9.5pt] font-semibold text-slate-800">What makes a high-CTR thumbnail</h3>
        <div className="mt-2.5 grid grid-cols-3 gap-3 text-[8pt] text-slate-600">
          <p><span className="font-semibold text-slate-800">Bold faces</span> — expressive, close-crop subjects.</p>
          <p><span className="font-semibold text-slate-800">Contrast</span> — high-contrast text readable at small sizes.</p>
          <p><span className="font-semibold text-slate-800">Curiosity</span> — a visual hook that earns the click.</p>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 a4-card p-4">
        <span className="text-[16pt] font-bold a4-gradient-text">+24%</span>
        <p className="text-[8.5pt] text-slate-600">Average CTR lift on videos after custom thumbnail redesigns.</p>
      </div>
    </A4Page>
  );
}

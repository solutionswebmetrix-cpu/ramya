import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { BLOG_SAMPLES } from '@/data/portfolioData';

export function Page12BlogWriting({ total }: { total: number }) {
  return (
    <A4Page page={12} total={total} footerLabel="Blog Writing">
      <PageHeader eyebrow="Blog Writing" title="SEO blog samples in a" highlight="magazine layout" />

      <div className="grid grid-cols-[1.3fr_1fr] gap-5">
        {/* Featured article */}
        <article className="a4-card overflow-hidden">
          <div className="relative h-44 overflow-hidden">
            <img src={BLOG_SAMPLES[0].image} alt={BLOG_SAMPLES[0].title} className="h-full w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-brand-600/90 px-2.5 py-1 text-[7pt] font-semibold text-white">
              {BLOG_SAMPLES[0].category}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-[12pt] font-bold leading-snug text-slate-900">{BLOG_SAMPLES[0].title}</h3>
            <p className="mt-2 text-[8.5pt] leading-relaxed text-slate-600">{BLOG_SAMPLES[0].excerpt}</p>
            <p className="mt-3 text-[7.5pt] text-slate-400">{BLOG_SAMPLES[0].readTime}</p>
          </div>
        </article>

        {/* Secondary articles */}
        <div className="flex flex-col gap-4">
          {BLOG_SAMPLES.slice(1).map((blog) => (
            <article key={blog.title} className="a4-card flex gap-3 overflow-hidden p-0">
              <div className="h-full w-24 shrink-0 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
              </div>
              <div className="py-3 pr-3">
                <span className="text-[7pt] font-semibold uppercase tracking-wider text-brand-600">
                  {blog.category}
                </span>
                <h3 className="mt-1 text-[10pt] font-semibold leading-tight text-slate-900">
                  {blog.title}
                </h3>
                <p className="mt-1.5 text-[7.8pt] leading-relaxed text-slate-600">{blog.excerpt}</p>
                <p className="mt-1.5 text-[7pt] text-slate-400">{blog.readTime}</p>
              </div>
            </article>
          ))}

          <div className="a4-card p-4">
            <p className="text-[7.5pt] font-semibold uppercase tracking-wider text-slate-500">
              Writing Approach
            </p>
            <ul className="mt-2 space-y-1.5 text-[8pt] text-slate-600">
              <li>• Primary + secondary keywords woven naturally</li>
              <li>• Skimmable headings, lists, and short paragraphs</li>
              <li>• Original research, examples, and internal links</li>
            </ul>
          </div>
        </div>
      </div>
    </A4Page>
  );
}

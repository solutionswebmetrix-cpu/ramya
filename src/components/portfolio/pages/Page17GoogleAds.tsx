import { A4Page, PageHeader } from '@/components/portfolio/A4Page';
import { AD_CAMPAIGNS } from '@/data/portfolioData';

export function Page17GoogleAds({ total }: { total: number }) {
  return (
    <A4Page page={17} total={total} footerLabel="Google Ads">
      <PageHeader eyebrow="Google Ads" title="Campaigns engineered for" highlight="measurable ROI" />

      <div className="space-y-4">
        {AD_CAMPAIGNS.map((camp) => (
          <article key={camp.name} className="a4-card overflow-hidden">
            <div className="grid grid-cols-[1fr_1.2fr]">
              <div className="relative h-32 overflow-hidden">
                <img src={camp.image} alt={camp.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-[11pt] font-semibold text-slate-900">{camp.name}</h3>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    { l: 'CTR', v: camp.ctr },
                    { l: 'CPC', v: camp.cpc },
                    { l: 'Conv.', v: camp.conversions },
                    { l: 'Spend', v: camp.spend },
                  ].map((m) => (
                    <div key={m.l} className="rounded-lg bg-slate-50 px-2 py-2 text-center">
                      <div className="text-[11pt] font-bold a4-gradient-text">{m.v}</div>
                      <div className="text-[6.5pt] uppercase tracking-wide text-slate-400">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 a4-card p-4">
        <h3 className="text-[9.5pt] font-semibold text-slate-800">Campaign Approach</h3>
        <div className="mt-2.5 grid grid-cols-3 gap-3 text-[8pt] text-slate-600">
          <p><span className="font-semibold text-slate-800">Structure</span> — tight ad groups by keyword theme with exact + phrase match.</p>
          <p><span className="font-semibold text-slate-800">Bidding</span> — target CPA / max conversions, refined weekly on search impression share.</p>
          <p><span className="font-semibold text-slate-800">Creative</span> — responsive search ads with tested headlines and descriptions.</p>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 a4-card p-4">
        <span className="text-[16pt] font-bold a4-gradient-text">360</span>
        <p className="text-[8.5pt] text-slate-600">Total conversions across two active campaigns on a modest monthly spend.</p>
      </div>
    </A4Page>
  );
}

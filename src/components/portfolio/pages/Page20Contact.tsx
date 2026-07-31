import { A4Page, CornerFlourish, PageHeader } from '@/components/portfolio/A4Page';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { PORTFOLIO } from '@/data/portfolioData';

export function Page20Contact({ total }: { total: number }) {
  return (
    <A4Page page={20} total={total} dark footerLabel="Contact">
      <CornerFlourish />
      <div className="relative">
        <PageHeader eyebrow="Contact" title="Let's build something" highlight="great together" dark />

        <p className="mt-1 max-w-[140mm] text-[9.5pt] leading-relaxed text-slate-300">
          Have a project in mind, a role to fill, or just want to say hello? I'd love to hear from you.
          Reach out through any channel below — I respond within 24 hours.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-4">
          <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={PORTFOLIO.email} />
          <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={PORTFOLIO.phone} />
          <ContactRow label="LinkedIn" value={PORTFOLIO.linkedin} />
          <ContactRow label="Instagram" value={`@${PORTFOLIO.instagram.split('/').pop()}`} />
          <ContactRow
            icon={<MessageCircle className="h-4 w-4" />}
            label="WhatsApp"
            value={PORTFOLIO.phone}
          />
          <ContactRow label="Website" value={PORTFOLIO.website} />
        </div>

        {/* QR placeholder */}
        <div className="mt-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-xl border border-dashed border-white/25 bg-white/5">
            <div className="grid grid-cols-5 gap-0.5">
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-[1px] ${
                    [0, 1, 2, 3, 4, 5, 9, 10, 12, 14, 15, 19, 20, 21, 22, 23, 24].includes(i)
                      ? 'bg-white/80'
                      : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10pt] font-semibold text-white">Scan to view my portfolio</p>
            <p className="mt-1 text-[8pt] text-slate-400">
              Point your phone camera here to open my online portfolio and get in touch instantly.
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-[8pt] text-slate-400">
          <span>Thank you for reviewing my portfolio.</span>
          <span>© {new Date().getFullYear()} {PORTFOLIO.name}</span>
        </div>
      </div>
    </A4Page>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      {icon && <span className="text-accent-400">{icon}</span>}
      <div className="min-w-0">
        <p className="text-[7.5pt] uppercase tracking-wider text-slate-500">{label}</p>
        <p className="truncate text-[9.5pt] font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

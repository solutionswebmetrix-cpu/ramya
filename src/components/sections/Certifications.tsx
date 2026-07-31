import { CERTIFICATIONS } from '@/data/content';
import { Icon, SectionHeading } from '@/components/ui/Primitives';
import { TiltCard, RevealMotion } from '@/components/ui/Animations';

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified"
          highlight="credentials"
          subtitle="Industry-recognized certifications that back my expertise."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => (
            <RevealMotion key={cert.title} delay={(i % 4) * 0.08} y={32}>
              <TiltCard max={12} lift={12} className="group h-full rounded-2xl">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-depth transition-colors duration-500 group-hover:border-accent-500/30">
                  {/* Ribbon shimmer */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-600/0 to-accent-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-600/10 group-hover:to-accent-500/10 group-hover:opacity-100" />

                  {/* Certificate-style top */}
                  <div className="relative flex items-center justify-between" style={{ transform: 'translateZ(30px)' }}>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-accent-500/20 text-accent-400 transition-transform duration-500 group-hover:scale-110">
                      <Icon name={cert.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-medium text-slate-400">{cert.year}</span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold leading-snug text-white" style={{ transform: 'translateZ(20px)' }}>
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400" style={{ transform: 'translateZ(10px)' }}>{cert.issuer}</p>

                  {/* Seal */}
                  <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-slate-400">Verified</span>
                    <span className="ml-auto text-xs font-medium text-gradient">Certified</span>
                  </div>
                </article>
              </TiltCard>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}

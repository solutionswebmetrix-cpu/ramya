import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/data/content';
import { Icon, SectionHeading } from '@/components/ui/Primitives';
import { TiltCard, RevealMotion } from '@/components/ui/Animations';

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can"
          highlight="do for you"
          subtitle="End-to-end marketing services, from search visibility to scroll-stopping creative."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <RevealMotion key={service.title} delay={(i % 3) * 0.1} y={32}>
              <TiltCard max={10} lift={12} className="group h-full rounded-2xl">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-depth transition-colors duration-500 group-hover:border-brand-500/30">
                  {/* Top gradient line */}
                  <motion.div
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                  />

                  <div className="flex items-start justify-between" style={{ transform: 'translateZ(30px)' }}>
                    <motion.span
                      className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-600/30"
                      whileHover={{ scale: 1.1, rotate: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <Icon name={service.icon} className="h-6 w-6" />
                    </motion.span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-500 group-hover:text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white" style={{ transform: 'translateZ(20px)' }}>{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400" style={{ transform: 'translateZ(10px)' }}>
                    {service.description}
                  </p>

                  {/* number watermark */}
                  <span className="pointer-events-none absolute -bottom-4 right-2 text-7xl font-black text-white/[0.03]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </article>
              </TiltCard>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}

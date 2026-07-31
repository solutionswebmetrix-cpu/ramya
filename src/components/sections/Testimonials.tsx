import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/data/content';
import { SectionHeading } from '@/components/ui/Primitives';
import { TiltCard, RevealMotion } from '@/components/ui/Animations';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients"
          highlight="say about me"
          subtitle="Trusted by founders and marketing leaders to deliver real results."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <RevealMotion key={t.name} delay={(i % 3) * 0.12} y={36}>
              <TiltCard max={8} lift={8} className="group h-full rounded-3xl">
                <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl shadow-depth">
                  {/* Quote mark */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Quote className="h-10 w-10 text-brand-500/30 transition-colors duration-500 group-hover:text-brand-500/50" />
                  </motion.div>

                  {/* Stars */}
                  <div className="mt-4 flex gap-0.5" style={{ transform: 'translateZ(20px)' }}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <motion.span
                        key={s}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + s * 0.1, type: 'spring', stiffness: 200 }}
                      >
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      </motion.span>
                    ))}
                  </div>

                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300" style={{ transform: 'translateZ(15px)' }}>
                    "{t.quote}"
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5" style={{ transform: 'translateZ(25px)' }}>
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </TiltCard>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}

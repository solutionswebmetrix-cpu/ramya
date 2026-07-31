import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/data/content';
import { SectionHeading } from '@/components/ui/Primitives';
import { RevealMotion } from '@/components/ui/Animations';

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="My professional"
          highlight="journey"
          subtitle="Roles where I've driven SEO, content, and creative results."
        />

        <div className="relative mt-16">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-4 top-2 w-px bg-gradient-to-b from-brand-500 via-accent-500/50 to-transparent sm:left-1/2 sm:-translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="space-y-10">
            {EXPERIENCE.map((exp, i) => {
              const right = i % 2 === 1;
              return (
                <li key={`${exp.role}-${exp.org}`} className="relative">
                  <div
                    className={`sm:flex sm:items-center sm:gap-8 ${
                      right ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Animated node */}
                    <motion.div
                      className="absolute left-4 top-2 -translate-x-1/2 sm:left-1/2"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 200, damping: 14 }}
                    >
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
                        <span className="relative grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-400 ring-4 ring-ink-900" />
                      </span>
                    </motion.div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden sm:block sm:flex-1" />

                    {/* Card */}
                    <RevealMotion className="pl-12 sm:pl-0 sm:flex-1" delay={i * 0.15} y={30}>
                      <motion.div
                        whileHover={{ y: -6, rotateX: 4, rotateY: right ? -4 : 4 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                        style={{ transformStyle: 'preserve-3d', transformPerspective: 800 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-depth"
                      >
                        <div className="flex items-center gap-2 text-xs font-medium text-accent-400">
                          <Briefcase className="h-3.5 w-3.5" />
                          {exp.period}
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-white" style={{ transform: 'translateZ(20px)' }}>{exp.role}</h3>
                        <p className="text-sm font-medium text-brand-400">{exp.org}</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                          {exp.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </RevealMotion>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

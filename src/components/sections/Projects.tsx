import { ArrowUpRight, ExternalLink, FileText, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/content';
import { SectionHeading } from '@/components/ui/Primitives';
import { RevealMotion, GlowingBorder, MagneticButton } from '@/components/ui/Animations';

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work &"
          highlight="case studies"
          subtitle="A few projects where strategy, content, and design came together to deliver results."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <RevealMotion key={project.id} delay={(i % 2) * 0.12} y={36}>
              <GlowingBorder className="rounded-3xl">
                <article className="group/card relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-depth">
                  {/* Image with 3D zoom on hover */}
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-900/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {project.category}
                    </span>

                    {/* Result badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {project.result}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition-all duration-500 group-hover/card:text-accent-400 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Technology Used
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <MagneticButton href={project.demoUrl} className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-4 py-2 text-xs font-semibold text-white transition-transform">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </MagneticButton>
                      <MagneticButton href={project.caseStudyUrl} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-accent-400/60 hover:bg-white/10" strength={0.18}>
                        <FileText className="h-3.5 w-3.5" />
                        Case Study
                      </MagneticButton>
                    </div>
                  </div>
                </article>
              </GlowingBorder>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}

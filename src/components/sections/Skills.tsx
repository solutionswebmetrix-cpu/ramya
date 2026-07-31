import { SKILLS } from '@/data/content';
import { Icon, SectionHeading } from '@/components/ui/Primitives';
import { TiltCard, RevealMotion } from '@/components/ui/Animations';

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="A full-stack"
          highlight="digital toolkit"
          subtitle="The disciplines I use to plan, create, and optimize campaigns end to end."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <RevealMotion key={skill.name} delay={(i % 4) * 0.08} y={32}>
              <TiltCard max={12} lift={10} className="group h-full rounded-2xl">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl shadow-depth transition-colors duration-500 group-hover:border-brand-500/30">
                  {/* hover wash */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-600/0 to-accent-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-600/10 group-hover:to-accent-500/10 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-3" style={{ transform: 'translateZ(30px)' }}>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-accent-500/20 text-brand-400 transition-transform duration-500 group-hover:scale-110">
                      <Icon name={skill.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                  </div>

                  {/* Proficiency bar */}
                  <div className="relative mt-4" style={{ transform: 'translateZ(15px)' }}>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Proficiency</span>
                      <span className="tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400 transition-[width] duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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

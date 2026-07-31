import {
  Award,
  BarChart3,
  CheckCircle2,
  Compass,
  GraduationCap,
  Search,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CERTIFICATIONS, PROFILE } from '@/data/content';
import { SectionHeading } from '@/components/ui/Primitives';
import { RevealMotion, TiltCard, MagneticButton } from '@/components/ui/Animations';

const ABOUT_POINTS = [
  'SEO',
  'Content Marketing',
  'Graphic Design',
  'Social Media Marketing',
  'WordPress',
  'Google Analytics',
  'Content Strategy',
];

const SECONDARY_IMAGE =
  'https://images.pexels.com/photos/6476373/pexels-photo-6476373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="about" ref={sectionRef} className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning strategy into"
          highlight="measurable growth"
          subtitle="A multidisciplinary digital marketer blending data, story, and design."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Image collage with parallax + 3D tilt */}
          <RevealMotion className="relative">
            <TiltCard max={8} lift={0} className="relative mx-auto max-w-md lg:max-w-none">
              <motion.div style={{ y: imgY }} className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-600/30 to-accent-500/20 blur-2xl" />
                <div className="gradient-border relative overflow-hidden rounded-[1.75rem] border border-white/10">
                  <img
                    src={SECONDARY_IMAGE}
                    alt="Tuba Ansari working on a digital marketing strategy"
                    className="aspect-[5/4] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating experience badge with parallax */}
                <motion.div
                  style={{ y: badgeY }}
                  className="absolute -bottom-6 -right-4 glass-strong rounded-2xl px-5 py-4 shadow-xl sm:-right-8"
                >
                  <div className="text-3xl font-bold text-gradient">2+</div>
                  <div className="text-xs text-slate-300">Years Experience</div>
                </motion.div>
              </motion.div>
            </TiltCard>
          </RevealMotion>

          {/* Copy */}
          <div>
            <RevealMotion>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Hello, I'm {PROFILE.name.split(' ')[0]}.
              </h3>
            </RevealMotion>
            <RevealMotion delay={0.08}>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                I'm a digital marketing specialist focused on helping brands grow online. I combine
                a data-driven approach with strong creative instincts — building SEO strategies,
                writing content that ranks and converts, and designing visuals that stop the scroll.
              </p>
            </RevealMotion>
            <RevealMotion delay={0.16}>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                From keyword research and technical audits to full content strategies, social media
                campaigns, and WordPress management, I handle the full funnel. I care about the
                details that turn traffic into loyal customers — and I report on results with the
                clarity leadership needs.
              </p>
            </RevealMotion>

            <RevealMotion delay={0.24}>
              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ABOUT_POINTS.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="flex items-center gap-2.5 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-accent-400" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </RevealMotion>

            <RevealMotion delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#contact" className="btn-primary">
                  Let's work together
                </MagneticButton>
                <MagneticButton href="#projects" className="btn-ghost" strength={0.22}>
                  View projects
                </MagneticButton>
              </div>
            </RevealMotion>
          </div>
        </div>

        {/* Education & Certifications — merged timeline */}
        <RevealMotion className="mt-20">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Education &amp; Certifications
            </h3>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </RevealMotion>

        <div className="relative mt-10">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-4 top-2 w-px bg-gradient-to-b from-brand-500 via-accent-500/50 to-transparent sm:left-1/2 sm:-translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="space-y-8">
            {CERTIFICATIONS.map((cert, i) => {
              const right = i % 2 === 1;
              return (
                <li key={`${cert.title}-${cert.year}`} className="relative">
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
                      transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200, damping: 14 }}
                    >
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-60" />
                        <span className="relative grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-400 ring-4 ring-ink-900" />
                      </span>
                    </motion.div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden sm:block sm:flex-1" />

                    {/* Card */}
                    <RevealMotion className="pl-12 sm:pl-0 sm:flex-1" delay={i * 0.12} y={28}>
                      <motion.div
                        whileHover={{ y: -5, rotateX: 4, rotateY: right ? -4 : 4 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                        style={{ transformStyle: 'preserve-3d', transformPerspective: 800 }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl shadow-depth"
                      >
                        <motion.span
                          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-accent-500/20 text-accent-400"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                          <CertIcon name={cert.icon} />
                        </motion.span>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                          <p className="text-xs text-slate-400">
                            {cert.issuer} · {cert.year}
                          </p>
                        </div>
                        <span className="ml-auto hidden shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300 sm:inline">
                          Verified
                        </span>
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

/* Icon resolver — keeps About self-contained without importing the full Icon map. */
function CertIcon({ name }: { name: string }) {
  const map: Record<string, React.ComponentType<{ className?: string }>> = {
    Award,
    BarChart3,
    GraduationCap,
    Search,
    Compass,
  };
  const Cmp = map[name] ?? Award;
  return <Cmp className="h-6 w-6" />;
}

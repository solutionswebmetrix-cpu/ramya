import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { PROFILE } from '@/data/content';
import { MagneticButton, FloatingIcon3D } from '@/components/ui/Animations';

const FLOATING_CHIPS = [
  { label: 'SEO', top: '12%', left: '4%', delay: '0s' },
  { label: 'Content', top: '26%', right: '2%', delay: '1.4s' },
  { label: 'Analytics', bottom: '28%', left: '0%', delay: '0.8s' },
  { label: 'Design', bottom: '14%', right: '6%', delay: '2.1s' },
  { label: 'Meta Ads', top: '48%', left: '-4%', delay: '1.1s' },
];

const HERO_ICONS = [
  { name: 'Search', label: 'SEO', tint: '#2563EB', x: '6%', y: '22%', delay: 0 },
  { name: 'BarChart3', label: 'Analytics', tint: '#F59E0B', x: '88%', y: '18%', delay: 0.5 },
  { name: 'PenLine', label: 'Content', tint: '#10B981', x: '10%', y: '70%', delay: 1 },
  { name: 'Globe', label: 'WordPress', tint: '#6366F1', x: '90%', y: '68%', delay: 1.5 },
  { name: 'Palette', label: 'Canva', tint: '#06B6D4', x: '78%', y: '88%', delay: 2 },
  { name: 'Target', label: 'Google Ads', tint: '#EF4444', x: '18%', y: '86%', delay: 2.5 },
  { name: 'Share2', label: 'Social', tint: '#8B5CF6', x: '50%', y: '12%', delay: 3 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Mouse-driven 3D portrait tilt + lighting
  const rx = useSpring(useMotionValue(0), { stiffness: 100, damping: 15 });
  const ry = useSpring(useMotionValue(0), { stiffness: 100, damping: 15 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const sgx = useSpring(gx, { stiffness: 120, damping: 20 });
  const sgy = useSpring(gy, { stiffness: 120, damping: 20 });
  const glare = useMotionTemplate`radial-gradient(circle at ${sgx}% ${sgy}%, rgba(96,165,250,0.25), transparent 55%)`;

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      ry.set(x * 16);
      rx.set(-y * 16);
      gx.set((x + 0.5) * 100);
      gy.set((y + 0.5) * 100);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [rx, ry, gx, gy]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* 3D floating glass shapes */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[15%] top-[20%] h-24 w-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0], rotateX: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transform: 'translateZ(40px)' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-[55%] h-16 w-16 rounded-full border border-accent-400/20 bg-accent-500/10 backdrop-blur-xl"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ transform: 'translateZ(30px)' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[8%] bottom-[18%] h-20 w-20 rounded-xl border border-brand-400/20 bg-brand-600/10 backdrop-blur-xl"
        animate={{ y: [0, -16, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ transform: 'translateZ(50px)' }}
      />

      {/* Floating 3D icons */}
      {HERO_ICONS.map((ic) => (
        <div
          key={ic.label}
          className="pointer-events-none absolute hidden lg:block"
          style={{ left: ic.x, top: ic.y, transform: 'translateZ(60px)' }}
        >
          <FloatingIcon3D name={ic.name} label={ic.label} tint={ic.tint} delay={ic.delay} />
        </div>
      ))}

      <motion.div style={{ y: textY, opacity }} className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="show">
            <span className="eyebrow justify-center lg:justify-start">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Marketing Portfolio
            </span>
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tightest text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-lg font-medium text-slate-200 sm:text-xl"
          >
            Digital Marketing Specialist
            <span className="mx-2 text-slate-500">|</span>
            SEO Expert
            <span className="mx-2 text-slate-500">|</span>
            Content Strategist
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
          >
            {PROFILE.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <MagneticButton href="#projects" className="btn-primary group">
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href={PROFILE.resumeUrl} download className="btn-ghost group" strength={0.22}>
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" className="btn-ghost group" strength={0.22}>
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 grid max-w-md grid-cols-3 gap-4 mx-auto lg:mx-0"
          >
            {[
              { v: '45%', l: 'Avg. Organic Growth' },
              { v: '120+', l: 'SEO Articles' },
              { v: '30+', l: 'Happy Clients' },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gradient sm:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-slate-400">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          style={{ y: portraitY }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
            className="relative"
          >
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-600/40 to-accent-500/30 blur-3xl" />

            {/* Rotating dashed ring */}
            <motion.div
              className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Portrait card */}
            <div className="gradient-border relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <img
                  src={PROFILE.heroImage}
                  alt="Portrait of Tuba Ansari, digital marketing specialist"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                {/* Mouse-following glare */}
                <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 mix-blend-screen" />

                {/* Name plate */}
                <div className="absolute inset-x-4 bottom-4" style={{ transform: 'translateZ(40px)' }}>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
                      <p className="text-xs text-slate-300">Available for work</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Online
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            {FLOATING_CHIPS.map((chip) => (
              <motion.div
                key={chip.label}
                className="absolute hidden sm:block"
                style={{ top: chip.top, bottom: chip.bottom, left: chip.left, right: chip.right }}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5 + parseFloat(chip.delay), repeat: Infinity, ease: 'easeInOut', delay: parseFloat(chip.delay) }}
              >
                <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                  {chip.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors hover:text-white md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/70"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  );
}

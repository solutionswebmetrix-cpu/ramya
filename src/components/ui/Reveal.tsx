import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/** Fades + slides children in when scrolled into view. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 40,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Parallax wrapper — translates child on Y based on scroll progress through viewport. */
export function Parallax({
  children,
  className = '',
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 120, -speed * 120]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/** Standard luxury section heading block: eyebrow + serif title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex max-w-3xl flex-col ${alignCls}`}>
      <Reveal>
        <span className="section-eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`mt-5 font-serif-lux text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl ${
            light ? 'text-marble-100' : 'text-marble-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${
              light ? 'text-marble-300' : 'text-marble-600'
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.3}>
        <div className="lux-divider mt-8 w-32" />
      </Reveal>
    </div>
  );
}

/** Animated count-up number that triggers when scrolled into view. */
export function useCountUp(target: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  return { ref };
}

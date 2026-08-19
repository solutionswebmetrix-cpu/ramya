import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const STATS = [
  { value: 37, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Happy Customers' },
  { value: 500, suffix: '+', label: 'Premium Products' },
  { value: 100, suffix: '%', label: 'Handcrafted' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section className="relative overflow-hidden bg-marble-950 py-24 md:py-28" style={{ background: 'radial-gradient(ellipse at 50% 50%, #2a2218 0%, #14100b 70%, #0a0805 100%)' }}>
      {/* gold rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/10 animate-spinSlow" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/15" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-center font-serif-lux text-2xl italic text-marble-300 md:text-3xl">
            37+ years of devotion, measured in numbers
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="text-center">
                <div className="font-serif-lux text-5xl font-semibold gold-text md:text-7xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-marble-400 md:text-sm">{s.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { STATS } from '@/data/content';
import { useCountUp } from '@/lib/hooks';
import { RevealMotion, TiltCard } from '@/components/ui/Animations';

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: 0 | 1 | 2 | 3 }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <RevealMotion delay={delay * 0.1} y={28}>
      <TiltCard max={8} lift={8} className="group rounded-2xl">
        <div className="glow-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl shadow-depth">
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <div className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ transform: 'translateZ(20px)' }}>
            <span ref={ref} className="text-gradient tabular-nums">
              {current}
            </span>
            <span className="text-gradient">{suffix}</span>
          </div>
          <p className="mt-2 text-sm text-slate-300" style={{ transform: 'translateZ(10px)' }}>{label}</p>
        </div>
      </TiltCard>
    </RevealMotion>
  );
}

export function Statistics() {
  return (
    <section id="statistics" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={(i % 4) as 0 | 1 | 2 | 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

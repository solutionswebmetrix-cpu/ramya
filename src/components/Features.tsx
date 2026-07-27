import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Sparkles, Gem, PenTool } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';

const FEATURES = [
  {
    icon: Hammer,
    title: 'Expert Craftsmanship',
    desc: 'Master sculptors with decades of devotion in every chisel stroke, preserving techniques passed through generations.',
  },
  {
    icon: Sparkles,
    title: 'Divine Creations',
    desc: 'Each murti is conceived as a vessel of faith — proportioned, luminous and alive with spiritual presence.',
  },
  {
    icon: Gem,
    title: 'Premium Marble',
    desc: 'Only the finest Makrana and onyx grades, selected for purity, veining and a soft inner glow.',
  },
  {
    icon: PenTool,
    title: 'Customized Designs',
    desc: 'Bespoke commissions tailored to your temple, dimensions and devotion — from sketch to sanctum.',
  },
];

function FeatureCard({ f, index }: { f: (typeof FEATURES)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${py * -10}deg) translateY(-10px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0) translateY(0)';
  };

  return (
    <Reveal delay={index * 0.1}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="tilt-card group relative h-full overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-b from-white/80 to-marble-100/60 p-8 shadow-soft backdrop-blur-md"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* gold glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,144,47,0.18), transparent 70%)' }} />
        {/* animated gold border sheen */}
        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(226,173,79,0.3) 50%, transparent 70%)', backgroundSize: '200% 100%' }} />

        <div className="relative" style={{ transform: 'translateZ(40px)' }}>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-200 to-gold-500 shadow-gold">
            <f.icon className="h-7 w-7 text-marble-900" />
          </div>
          <h3 className="mt-6 font-serif-lux text-2xl font-semibold text-marble-900">{f.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-marble-600">{f.desc}</p>
        </div>

        {/* floating number */}
        <span className="absolute right-6 top-6 font-serif-lux text-5xl font-light text-gold-500/20 transition-colors group-hover:text-gold-500/40">
          0{index + 1}
        </span>
      </div>
    </Reveal>
  );
}

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The Ramya Standard"
          title={<>Where Marble <span className="gold-text">Becomes Devotion</span></>}
          intro="Four pillars that define every piece that leaves our atelier — the difference between an object and an heirloom."
        />

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-marble-200 bg-white/70 shadow-soft">
          <img src={pickImage(['marble lamps', 'marble vases', 'decorative plates'])} alt="Featured marble craftsmanship" className="h-72 w-full object-cover" loading="lazy" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Award, Hand, Gem, PenTool, Globe, ShieldCheck } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';

const REASONS = [
  { icon: Award, title: '35+ Years Experience', desc: 'Three decades of mastering the chisel and the soul of marble.' },
  { icon: Hand, title: '100% Handmade', desc: 'No machines finish our work — only the hands of devoted artisans.' },
  { icon: Gem, title: 'Premium Marble', desc: 'Sourced from the finest quarries, graded for purity and glow.' },
  { icon: PenTool, title: 'Custom Orders', desc: 'Any deity, any size, any finish — shaped to your vision.' },
  { icon: Globe, title: 'Worldwide Shipping Ready', desc: 'Securely crated and shipped to homes and temples worldwide.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Each piece passes a final blessing and a rigorous craft audit.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The Ramya <span className="gold-text">Difference</span></>}
          intro="Six reasons families and temples across the world trust us with their most sacred pieces."
        />

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-marble-200 bg-white/70 shadow-soft">
          <img src={pickImage(['our heritage', 'marble murtis'])} alt="Premium craftsmanship detail" className="h-72 w-full object-cover" loading="lazy" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-marble-200 bg-white/70 p-8 shadow-soft backdrop-blur-sm"
              >
                {/* hover gold glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,144,47,0.15), transparent 65%)' }} />

                <div className="relative flex items-start gap-5">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold-500/30 bg-gradient-to-br from-marble-50 to-marble-100 transition-all duration-500 group-hover:border-gold-400 group-hover:shadow-gold">
                    <r.icon className="h-8 w-8 text-gold-600 transition-transform duration-500 group-hover:scale-110" />
                    {/* rotating ring */}
                    <motion.div
                      className="absolute -inset-1 rounded-2xl border border-dashed border-gold-400/0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ opacity: 0 }}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif-lux text-xl font-semibold text-marble-900">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-marble-600">{r.desc}</p>
                  </div>
                </div>

                <span className="absolute bottom-4 right-5 font-serif-lux text-4xl font-light text-gold-500/15 transition-colors group-hover:text-gold-500/30">
                  0{i + 1}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

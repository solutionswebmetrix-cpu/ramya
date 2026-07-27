import { motion } from 'framer-motion';
import { MessageSquare, PencilRuler, Hammer, Sparkles, Brush, Truck } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';

const STEPS = [
  { icon: MessageSquare, title: 'Consultation', desc: 'We listen to your devotion, dimensions and vision for the piece.' },
  { icon: PencilRuler, title: 'Design', desc: 'Our artists sketch proportions and poses for your approval.' },
  { icon: Hammer, title: 'Carving', desc: 'Master sculptors bring the form out of raw marble, stroke by stroke.' },
  { icon: Sparkles, title: 'Polishing', desc: 'The surface is refined until it glows with inner light.' },
  { icon: Brush, title: 'Painting', desc: 'Meenakari and gold-leaf detailing applied by hand where desired.' },
  { icon: Truck, title: 'Delivery', desc: 'Securely crated and shipped to your home or temple, anywhere.' },
];

export default function WorkProcess() {
  return (
    <section className="relative overflow-hidden bg-marble-950 py-24 md:py-32" style={{ background: 'radial-gradient(ellipse at 50% 0%, #2a2218 0%, #14100b 70%, #0a0805 100%)' }}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,144,47,0.3), transparent 70%)' }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Work Process"
          light
          title={<>From Stone to <span className="gold-text">Sanctum</span></>}
          intro="Six stages that transform raw marble into an object worthy of worship."
        />

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-gold-500/20 bg-marble-900/50 shadow-soft">
          <img src={pickImage(['our heritage', 'marble pooja mandir', 'marble temple'])} alt="Workshop process from stone to sanctum" className="h-72 w-full object-cover" loading="lazy" />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-full rounded-2xl border border-gold-500/20 bg-marble-900/40 p-6 text-center backdrop-blur-sm"
              >
                {/* connector arrow (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="pointer-events-none absolute right-[-1.5rem] top-1/2 hidden h-px w-12 -translate-y-1/2 bg-gradient-to-r from-gold-500/40 to-transparent lg:block" />
                )}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-marble-950/60 transition-all duration-500 group-hover:border-gold-400 group-hover:shadow-gold">
                  <s.icon className="h-7 w-7 text-gold-400 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="mt-4 block font-serif-lux text-3xl font-light text-gold-500/40">0{i + 1}</span>
                <h3 className="mt-1 font-serif-lux text-lg font-semibold text-marble-100">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-marble-400">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

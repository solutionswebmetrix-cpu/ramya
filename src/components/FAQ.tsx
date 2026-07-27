import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';

const FAQS = [
  { q: 'Do you ship marble murtis internationally?', a: 'Yes. We securely crate every piece for worldwide shipping, with full insurance and tracking. We have delivered to homes and temples across the UK, USA, UAE, Australia and beyond.' },
  { q: 'Can I order a completely custom idol?', a: 'Absolutely. Choose the deity, marble type, size and finish through our customization process, and our artisans will craft it to your exact vision. Custom commissions typically take 4–12 weeks depending on complexity.' },
  { q: 'What marble do you use?', a: 'We work with premium Makrana white marble, Vietnam white, Ambaji marble, and select onyx — all graded for purity, veining and luminosity before carving begins.' },
  { q: 'Are all pieces genuinely handmade?', a: 'Yes, 100%. Every murti is carved, polished and finished by hand by our master artisans. No machine finishing is used on any devotional piece.' },
  { q: 'Do you offer meenakari and gold-leaf detailing?', a: 'Yes. We offer traditional meenakari painting and 24k gold-leaf finishing on request, applied by hand by specialist artists.' },
  { q: 'How do I care for my marble murti?', a: 'Simply wipe with a soft dry cloth. Avoid chemicals. For meenakari pieces, use a very soft brush. We provide a care guide with every order.' },
];

function Row({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${open ? 'border-gold-500/50 bg-white/80 shadow-soft' : 'border-marble-200 bg-white/40'}`}>
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-serif-lux text-lg font-semibold text-marble-900 md:text-xl">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-gold-600">
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-marble-600 md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden marble-veined py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="gold-text">Answered</span></>}
          intro="Everything you might want to know before commissioning your piece."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <Row q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

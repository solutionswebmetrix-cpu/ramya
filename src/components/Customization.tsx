import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { scrollToId } from '@/lib/smoothScroll';
import { pickImage } from '../lib/assetImages';

const STEPS = [
  { key: 'idol', title: 'Choose Idol', options: ['Ram Darbar', 'Radha Krishna', 'Ganesh', 'Hanuman', 'Buddha', 'Custom Deity'] },
  { key: 'marble', title: 'Choose Marble', options: ['Makrana White', 'Vietnam White', 'Onyx', 'Ambaji Marble'] },
  { key: 'size', title: 'Choose Size', options: ['6 inch', '12 inch', '24 inch', 'Life Size'] },
  { key: 'finish', title: 'Choose Finish', options: ['Polished', 'Meenakari', 'Gold Leaf', 'Antique'] },
];

export default function Customization() {
  const [active, setActive] = useState(0);
  const [picks, setPicks] = useState<Record<string, string | null>>({ idol: null, marble: null, size: null, finish: null });

  const pick = (key: string, val: string) => {
    setPicks((p) => ({ ...p, [key]: val }));
    if (active < STEPS.length - 1) setTimeout(() => setActive((a) => a + 1), 250);
  };

  const allDone = Object.values(picks).every(Boolean);

  return (
    <section id="customization" className="relative overflow-hidden marble-veined py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Customization"
          title={<>Commission Your <span className="gold-text">Own Murti</span></>}
          intro="Four simple steps from intention to invocation. Tell us your vision and we shape it in stone."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Process timeline */}
          <div className="relative">
            <div className="absolute left-6 top-2 h-full w-px bg-gradient-to-b from-gold-500 via-gold-400/40 to-transparent" />
            <div className="space-y-6">
              {STEPS.map((s, i) => {
                const done = picks[s.key];
                const isActive = active === i;
                return (
                  <button
                    key={s.key}
                    onClick={() => setActive(i)}
                    className="relative flex w-full items-center gap-4 text-left"
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        done
                          ? 'border-gold-500 bg-gold-500 text-marble-900'
                          : isActive
                          ? 'border-gold-500 bg-marble-50 text-gold-600 shadow-gold'
                          : 'border-marble-300 bg-marble-50 text-marble-400'
                      }`}
                    >
                      {done ? <Check className="h-5 w-5" /> : <span className="font-serif-lux text-lg font-semibold">{i + 1}</span>}
                    </span>
                    <div>
                      <div className={`font-serif-lux text-lg font-semibold transition-colors ${isActive || done ? 'text-marble-900' : 'text-marble-500'}`}>
                        {s.title}
                      </div>
                      {done && <div className="text-xs uppercase tracking-[0.2em] text-gold-600">{done}</div>}
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {allDone && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 ml-16"
                >
                  <button onClick={() => scrollToId('contact')} className="btn-gold flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em]">
                    <Sparkles className="h-4 w-4" />
                    Request Quote
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Options panel */}
          <div className="rounded-3xl border border-marble-200 bg-white/70 p-8 shadow-soft backdrop-blur-md">
            <img src={pickImage(['our heritage', 'marble murtis'])} alt="Custom carving process" className="mb-6 h-56 w-full rounded-2xl object-cover" loading="lazy" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <span className="section-eyebrow">Step {active + 1} of {STEPS.length}</span>
                <h3 className="mt-3 font-serif-lux text-3xl font-semibold text-marble-900">{STEPS[active].title}</h3>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {STEPS[active].options.map((opt) => {
                    const selected = picks[STEPS[active].key] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => pick(STEPS[active].key, opt)}
                        className={`rounded-xl border px-4 py-5 text-center text-sm font-medium transition-all duration-300 ${
                          selected
                            ? 'border-gold-500 bg-gold-500/10 text-gold-700 shadow-gold'
                            : 'border-marble-200 bg-marble-50 text-marble-700 hover:border-gold-400 hover:bg-marble-100'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    disabled={active === 0}
                    className="rounded-full border border-marble-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-600 transition-all hover:border-gold-500 disabled:opacity-40"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setActive((a) => Math.min(STEPS.length - 1, a + 1))}
                    disabled={active === STEPS.length - 1}
                    className="rounded-full bg-marble-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-50 transition-all hover:bg-marble-800 disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

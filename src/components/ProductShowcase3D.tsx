import { motion } from 'framer-motion';
import { SectionHeading, Reveal } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';

export default function ProductShowcase3D() {
  return (
    <section className="relative overflow-hidden bg-marble-950 py-24 md:py-32" style={{ background: 'radial-gradient(ellipse at 50% 40%, #2a2218 0%, #14100b 70%, #0a0805 100%)' }}>
      {/* gold ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,144,47,0.3), transparent 70%)' }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="3D Atelier"
          theme="light"
          title={<>Inspect Every <span className="gold-text">Chisel Stroke</span></>}
          intro="Every detail reflects the precision, craftsmanship and artistry behind our marble creations."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Static image viewport */}
          <Reveal>
            <div
              className="relative h-[60vh] overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-marble-900/40 to-marble-950/60 backdrop-blur-sm md:h-[70vh]"
            >
              <img
                src={pickImage(['Shiv Parivar', 'marble murti', 'marble carving', 'Marble Radha Krishna Statue', 'craftsmanship sculpture'])}
                alt="Handcrafted marble murti showcasing the chisel strokes and masterful craftsmanship of Ramya atelier"
                className="h-full w-full object-contain p-6 md:p-10"
                loading="lazy"
                decoding="async"
              />
              {/* soft edge vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 0 120px 20px rgba(10,8,5,0.55)' }} />
            </div>
          </Reveal>

          {/* side panel */}
          <div className="flex flex-col justify-center gap-6">
            {[
              { t: 'Premium Lighting', d: 'Studio HDR environment reveals the marble\'s true luminosity and the gold halo\'s warmth.' },
              { t: 'Marble Material', d: 'Physical-based rendering shows accurate subsurface scattering and subtle veining.' },
              { t: 'Real-time Reflection', d: 'The contact shadow and reflective floor simulate how the murti sits in your sanctum.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-6">
                  <h3 className="font-serif-lux text-xl font-semibold text-marble-100">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-marble-300">{c.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="font-serif-lux text-lg italic text-gold-300">
                "Every angle reveals what the hands of devotion have shaped."
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

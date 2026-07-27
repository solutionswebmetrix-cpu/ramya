import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';

export default function VideoSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={pickImage(['our heritage', 'marble murtis', 'marble temple'])}
          alt="Marble carving workshop"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-marble-950/70 via-marble-950/50 to-marble-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-marble-950/60 to-transparent" />
      </div>

      {/* Subtle zoom on the bg via framer */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212,144,47,0.15), transparent 50%)' }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <Reveal>
          <span className="section-eyebrow !text-gold-300">Inside The Atelier</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-3xl font-serif-lux text-4xl font-semibold leading-tight text-marble-50 md:text-6xl">
            Where Stone Becomes <span className="gold-text">Sacred</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-marble-300 md:text-base">
            Step into our workshop — where every chisel strike is a prayer and every
            finished murti a quiet miracle of patience.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <button className="group mt-10 flex items-center gap-4">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/50 bg-marble-950/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold-300 group-hover:shadow-gold-lg">
              <Play className="h-8 w-8 text-gold-300" fill="currentColor" />
            </span>
            <span className="text-left">
              <span className="block text-xs uppercase tracking-[0.3em] text-gold-300">Watch Film</span>
              <span className="block font-serif-lux text-xl text-marble-100">The Craft of Ramya</span>
            </span>
            <Volume2 className="ml-2 h-5 w-5 text-marble-400" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

import { Phone, BookOpen, ArrowRight, Volume2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cloudinaryHeroVideo } from '../lib/cloudinary';

function GodRays() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {[
        { left: '12%', delay: 0, w: 180 },
        { left: '32%', delay: 1.5, w: 120 },
        { left: '58%', delay: 2.8, w: 200 },
        { left: '78%', delay: 1, w: 140 },
      ].map((r, i) => (
        <div
          key={i}
          className="absolute top-0 h-full origin-top"
          style={{
            left: r.left,
            width: r.w,
            background:
              'linear-gradient(to bottom, rgba(226,173,79,0.18) 0%, rgba(212,144,47,0.06) 40%, transparent 80%)',
            filter: 'blur(12px)',
            transform: 'skewX(-8deg)',
            opacity: 0.35,
          }}
        />
      ))}
    </div>
  );
}

function SmokeLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -inset-x-20 bottom-0 h-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,144,47,0.25), transparent 70%)' }}
      />
    </div>
  );
}

function TempleBells() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-24 z-10 flex justify-center gap-16 md:gap-32" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex flex-col items-center"
        >
          {/* rope */}
          <div className="h-10 w-px bg-gradient-to-b from-gold-500/60 to-gold-500/20" />
          {/* bell */}
          <div className="origin-top">
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
              <path
                d="M11 1c-1 0-1.8.7-2 1.7C5.5 4 3 7 3 11v5l-2 3h20l-2-3v-5c0-4-2.5-7-6-8.3C12.8 1.7 12 1 11 1z"
                fill="url(#bellGold)"
                stroke="#b97423"
                strokeWidth="0.6"
              />
              <circle cx="11" cy="26" r="1.6" fill="#d4902f" />
              <defs>
                <linearGradient id="bellGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#faf2dc" />
                  <stop offset="50%" stopColor="#e2ad4f" />
                  <stop offset="100%" stopColor="#b97423" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const textLines = [
    'SINCE 1989',
    'Astha Ko Dijiye Murti Ka Roop',
    'All types of Marble Murti, Temples, Busts, Statues and Handicrafts — with customization as per customer demand.',
  ];

  const brandLine1 = 'RAMYA';
  const brandLine2 = 'MARBLE MURTI';
  const brandLine3 = '& HANDICRAFT';

  const WORD_LOOP_DURATION = 9;
  const WORD_KEY_TIMES = [0, 0.11, 0.22, 0.33, 0.67, 0.78, 1] as const;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden vignette">
      {/* Cinematic marble temple backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #2a2218 0%, #14100b 55%, #0a0805 100%)',
        }}
      />
      {/* temple arch silhouette */}
      <div
        className="absolute left-1/2 top-0 h-[80%] w-[60%] -translate-x-1/2 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 40%, rgba(212,144,47,0.15), transparent 70%)',
        }}
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={cloudinaryHeroVideo()} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <GodRays />
      <SmokeLayer />
      <TempleBells />

      {/* Foreground content */}
      <div className="relative z-20 mx-auto flex min-h-screen items-center justify-center px-5 py-20 text-left md:justify-center md:text-center lg:justify-start lg:text-left">
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full max-w-[900px] lg:ml-[8vw] mt-4 md:mt-6 lg:mt-8"
        >
          <div className="flex flex-col items-center lg:items-start gap-0">
            {/* Since 1989 */}
            <motion.span
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="section-eyebrow !text-gold-300 text-sm md:text-base"
            >
              {textLines[0]}
            </motion.span>

            {/* Brand Name — WORD-BY-WORD loop: RAMYA → MARBLE MURTI → & HANDICRAFT → reset → repeat */}
            <motion.h1 className="mt-3 mb-4 font-serif-lux text-[clamp(3rem,5vw,5rem)] font-semibold leading-[0.95] text-gold-300 md:text-[clamp(3.25rem,4.5vw,5.25rem)] lg:text-[clamp(3.75rem,4vw,5.75rem)] min-h-[72px] md:min-h-[96px]">
              <motion.span
                className="block break-words"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 1, 1, 0, 0], y: [10, 0, 0, 0, 0, 10, 10] }}
                transition={{ duration: WORD_LOOP_DURATION, ease: 'easeInOut', times: WORD_KEY_TIMES, repeat: Infinity, repeatType: 'loop' }}
              >
                {brandLine1}
              </motion.span>
              <motion.span
                className="block break-words"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 0, 1, 1, 1, 0, 0], y: [10, 10, 0, 0, 0, 10, 10] }}
                transition={{ duration: WORD_LOOP_DURATION, ease: 'easeInOut', times: WORD_KEY_TIMES, repeat: Infinity, repeatType: 'loop' }}
              >
                {brandLine2}
              </motion.span>
              <motion.span
                className="block break-words"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 0, 0, 1, 1, 0, 0], y: [10, 10, 10, 0, 0, 10, 10] }}
                transition={{ duration: WORD_LOOP_DURATION, ease: 'easeInOut', times: WORD_KEY_TIMES, repeat: Infinity, repeatType: 'loop' }}
              >
                {brandLine3}
              </motion.span>
            </motion.h1>

            {/* Tagline with dividers */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 flex flex-col items-center gap-3 text-center lg:flex-row lg:items-center lg:text-left w-full"
            >
              <span className="hidden lg:block h-px w-12 bg-gold-500/60" />
              <p className="font-serif-lux text-lg italic text-marble-200 md:text-xl leading-tight">
                {textLines[1]}
              </p>
              <span className="hidden lg:block h-px w-12 bg-gold-500/60" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-marble-300 md:text-base text-center lg:text-left"
            >
              {textLines[2]}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start w-full"
            >
              <Link
                to="/collections"
                className="btn-gold group flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-ghost-gold flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] !text-marble-100"
              >
                <BookOpen className="h-4 w-4" />
                Request Catalogue
              </Link>
              <a
                href="tel:+919557463257"
                className="btn-ghost-gold flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] !text-marble-100"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Music icon + scroll indicator */}
      <div className="absolute bottom-8 left-8 z-30 hidden md:block">
        <button
          className="flex items-center gap-2 text-marble-400 transition-colors hover:text-gold-300"
          aria-label="Ambient temple music"
        >
          <Volume2 className="h-5 w-5" />
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Ambient Sound</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <Link
        to="/about"
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2 text-marble-400"
        aria-label="Learn more about us"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em]">DISCOVER</span>
        <ChevronDown className="h-5 w-5 text-gold-400" />
      </Link>
    </section>
  );
}
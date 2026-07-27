import { Phone, BookOpen, ArrowRight, Volume2, ChevronDown } from 'lucide-react';
import { scrollToId } from '@/lib/smoothScroll';
import { pickImage } from '../lib/assetImages';

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

      <GodRays />
      <SmokeLayer />
      <TempleBells />

      <div className="absolute bottom-20 right-8 z-20 hidden w-64 overflow-hidden rounded-[2rem] border border-gold-500/30 bg-marble-950/60 shadow-2xl backdrop-blur-md lg:block">
        <img src={pickImage(['ram darbar murti', 'marble murtis'])} alt="Premium marble murti detail" className="h-80 w-full object-cover" loading="eager" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pt-24 text-center">
        <div className="flex flex-col items-center">
          <span className="section-eyebrow !text-gold-300">
            Since 1989
          </span>

          <h1 className="mt-6 font-serif-lux text-6xl font-semibold leading-[0.95] text-marble-50 md:text-8xl lg:text-9xl">
            <span className="block">RAMYA</span>
            <span className="mt-1 block gold-text-shimmer">MARBLE MURTI</span>
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold-500/60" />
            <p className="font-serif-lux text-xl italic text-marble-200 md:text-2xl">
              Astha Ko Dijiye Murti Ka Roop
            </p>
            <span className="h-px w-12 bg-gold-500/60" />
          </div>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-marble-300 md:text-base">
            Handcrafting premium marble idols, temples, onyx and meenakari masterpieces
            for over three decades — where devotion meets artistry.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToId('collections')}
              className="btn-gold group flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="btn-ghost-gold flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] !text-marble-100"
            >
              <BookOpen className="h-4 w-4" />
              Request Catalogue
            </button>
            <a
              href="tel:+919557463257"
              className="btn-ghost-gold flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] !text-marble-100"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
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

      <button
        onClick={() => scrollToId('about')}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2 text-marble-400"
        aria-label="Scroll down"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown className="h-5 w-5 text-gold-400" />
      </button>
    </section>
  );
}

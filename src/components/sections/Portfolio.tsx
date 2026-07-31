import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { GALLERY, GALLERY_FILTERS } from '@/data/content';
import { SectionHeading } from '@/components/ui/Primitives';
import { RevealMotion } from '@/components/ui/Animations';

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  const active = lightbox !== null ? GALLERY[lightbox] : null;

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((v) => (v === null ? v : (v + 1) % GALLERY.length));
      if (e.key === 'ArrowLeft') setLightbox((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <section id="portfolio" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Gallery"
          title="A visual showcase of"
          highlight="my work"
          subtitle="Browse projects by category — filter to see exactly what you're looking for."
        />

        {/* Filters */}
        <RevealMotion className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {GALLERY_FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <motion.button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  whileTap={{ scale: 0.94 }}
                  className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 shadow-lg shadow-brand-600/30"
                      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </motion.button>
              );
            })}
          </div>
        </RevealMotion>

        {/* Grid with layout animation */}
        <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              >
                <motion.button
                  type="button"
                  onClick={() => setLightbox(GALLERY.findIndex((g) => g.id === item.id))}
                  whileHover={{ y: -6, rotateX: 6, rotateY: -6, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  style={{ transformStyle: 'preserve-3d', transformPerspective: 800 }}
                  className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-depth"
                  aria-label={`Open ${item.title}`}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Category chip */}
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-ink-900/60 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur-md">
                    {item.category}
                  </span>

                  {/* Hover label */}
                  <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" style={{ transform: 'translateZ(30px)' }}>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-300">Click to view</p>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Previous"
              className="absolute left-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length));
              }}
            >
              <span className="text-lg">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next"
              className="absolute right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((v) => (v === null ? v : (v + 1) % GALLERY.length));
              }}
            >
              <span className="text-lg">›</span>
            </button>

            <motion.figure
              key={active.id}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={active.image} alt={active.title} className="max-h-[78vh] w-full object-contain" />
              <figcaption className="glass-strong absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3">
                <span className="text-sm font-medium text-white">{active.title}</span>
                <span className="text-xs text-accent-400">{active.category}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ZoomIn } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { getFolderImages } from '../lib/assetImages';

type Tile = { src: string; alt: string; tall?: boolean; video?: boolean };

const galleryAssets = getFolderImages('gallery');
const collectionAssets = getFolderImages('collections');

const preferredGallery = [
  'Marble Krishna and Radha Shrine.webp',
  'Gilded White Marble Ganesha Statue.webp',
  'Marble Mandir with Deities and Sages.webp',
  'Majestic Marble Durga on Lion.webp',
  'Marble Hanuman Statue with Golden Crown.webp',
  'White Marble Lord Shiva with Trident and Drum.webp',
  'White Marble Radha Krishna Under Ornate Arch.webp',
  'Marble Deity Shrine with Golden Details.webp',
  'Golden Ganesha Shrine Statue.webp',
  'White Marble Goddess on Lion.webp',
  'Marble Shiva.webp',
  'Marble Pavilion Under Blue Skies.webp',
  'Ornate White Marble Deity Shrine.webp',
  'White Stone Temple Spire Against Blue Sky.webp',
  'Ganesha Idol in Ornate Splendor.webp',
];

const galleryCandidates = [
  ...preferredGallery
    .map((name) => {
      const match = [...galleryAssets, ...collectionAssets].find((src) => src.split('/').pop()?.toLowerCase() === name.toLowerCase());
      return match ?? '';
    })
    .filter(Boolean),
  ...[...galleryAssets, ...collectionAssets].filter((src) => !preferredGallery.some((name) => src.split('/').pop()?.toLowerCase() === name.toLowerCase())),
];

const uniqueGalleryAssets = Array.from(new Set(galleryCandidates)).slice(0, 18);

const TILES: Tile[] = uniqueGalleryAssets.map((src, index) => ({
  src,
  alt: `Marble artwork ${index + 1}`,
  tall: index % 4 === 0,
  video: false,
}));

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden marble-veined py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={<>A Gallery of <span className="gold-text">Devotion</span></>}
          intro="A glimpse into our atelier and the masterpieces that have found their sanctuaries."
        />

        {/* Masonry */}
        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {TILES.map((t, i) => (
            <Reveal key={i} delay={(i % 4) * 0.05}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${t.tall ? 'aspect-[3/4]' : 'aspect-square'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marble-950/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                {/* hover actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
                    {t.video ? <Play className="h-4 w-4 text-marble-50" /> : <ZoomIn className="h-4 w-4 text-marble-50" />}
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-marble-50">{t.video ? 'Play' : 'View'}</span>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-marble-950/85 backdrop-blur-md" onClick={() => setActive(null)} />
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
            >
              <img src={TILES[active].src} alt={TILES[active].alt} className="max-h-[85vh] w-full object-contain" />
              {TILES[active].video && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/90 shadow-gold-lg">
                    <Play className="h-8 w-8 text-marble-900" />
                  </div>
                </div>
              )}
            </motion.div>

            {/* prev / next */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button onClick={() => setActive((a) => (a! - 1 + TILES.length) % TILES.length)} className="rounded-full bg-white/15 p-3 text-marble-50 backdrop-blur-md hover:bg-white/30">‹</button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button onClick={() => setActive((a) => (a! + 1) % TILES.length)} className="rounded-full bg-white/15 p-3 text-marble-50 backdrop-blur-md hover:bg-white/30">›</button>
            </div>
            <button onClick={() => setActive(null)} className="absolute right-5 top-5 text-marble-300 hover:text-marble-50" aria-label="Close">
              <X className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

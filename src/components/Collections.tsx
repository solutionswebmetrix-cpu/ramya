import { forwardRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MessageCircle, X } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { getAllImages, getFolderImages } from '../lib/assetImages';
import { getCollectionImageCategory } from '../data/collections';

type Item = {
  name: string;
  cat: string;
  img: string;
  desc: string;
};

const collectionAssets = getFolderImages('collections');
const usedImages = new Set<string>();

function getUniqueCollectionImage(category: string) {
  const categoryAssets = collectionAssets.filter((src) => getCollectionImageCategory(src) === category.toLowerCase());
  const available = categoryAssets.filter((src) => !usedImages.has(src));
  const candidate = available[0] ?? categoryAssets[0] ?? collectionAssets.find((src) => !usedImages.has(src)) ?? '';

  if (candidate) {
    usedImages.add(candidate);
  }

  return candidate;
}

const COLLECTIONS: Item[] = [
  { name: 'Marble Pooja Mandir', cat: 'Temples', img: getUniqueCollectionImage('Temples'), desc: 'Carved home temples with domes and pillars.' },
  { name: 'Ram Darbar Murti', cat: 'Murtis', img: getUniqueCollectionImage('Murtis'), desc: 'Ram, Lakshman, Sita and Hanuman in divine assembly.' },
  { name: 'Radha Krishna', cat: 'Murtis', img: getUniqueCollectionImage('Murtis'), desc: 'The eternal union in flowing marble form.' },
  { name: 'Buddha in Marble', cat: 'Murtis', img: getUniqueCollectionImage('Murtis'), desc: 'Serene Buddha busts radiating stillness.' },
  { name: 'Ganesh Idol', cat: 'Murtis', img: getUniqueCollectionImage('Murtis'), desc: 'Vighnaharta in detailed Makrana marble.' },
  { name: 'Hanuman Ji', cat: 'Murtis', img: getUniqueCollectionImage('Murtis'), desc: 'Bhakti personified, carved with devotion.' },
  { name: 'Marble Temple', cat: 'Temples', img: getUniqueCollectionImage('Temples'), desc: 'Grand standalone temples for homes and ashrams.' },
  { name: 'Meenakari Decor', cat: 'Meenakari', img: getUniqueCollectionImage('Meenakari'), desc: 'Hand-painted meenakari on marble plates and panels.' },
  { name: 'Marble Lamps', cat: 'Decor', img: getUniqueCollectionImage('Decor'), desc: 'Carved oil lamps to light the sanctum.' },
  { name: 'Marble Vases', cat: 'Decor', img: getUniqueCollectionImage('Decor'), desc: 'Elegant urns and vases in veined marble.' },
  { name: 'Onyx Bowls', cat: 'Onyx', img: getUniqueCollectionImage('Onyx'), desc: 'Translucent onyx bowls that glow with light.' },
  { name: 'Onyx Chess Set', cat: 'Onyx', img: getUniqueCollectionImage('Onyx'), desc: 'Hand-turned chess pieces in onyx and marble.' },
  { name: 'Onyx Goblets', cat: 'Onyx', img: getUniqueCollectionImage('Onyx'), desc: 'Royal goblets carved from a single stone.' },
  { name: 'Decorative Plates', cat: 'Decor', img: getUniqueCollectionImage('Decor'), desc: 'Wall plates with meenakari and relief carving.' },
  { name: 'Planters', cat: 'Decor', img: getUniqueCollectionImage('Decor'), desc: 'Marble planters for sacred and living spaces.' },
  { name: 'Marble Murtis', cat: 'Murtis', img: getUniqueCollectionImage('Murtis'), desc: 'A full pantheon of deities, custom-sized.' },
];

const FILTERS = ['All', 'Murtis', 'Temples', 'Meenakari', 'Onyx', 'Decor'];

const TiltCard = forwardRef<HTMLDivElement, { item: Item; onQuickView: () => void }>(({ item, onQuickView }, ref) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${px * 8}deg) rotateX(${py * -8}deg)`;
  };
  const onLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={tiltRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="tilt-card group relative overflow-hidden rounded-2xl bg-marble-900 shadow-soft"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* gradient + reflection */}
          <div className="absolute inset-0 bg-gradient-to-t from-marble-950/85 via-marble-900/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent opacity-50" />
        </div>

        {/* hover overlay actions */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="mb-2 w-fit rounded-full bg-gold-500/20 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-gold-200 backdrop-blur-sm">
            {item.cat}
          </span>
          <h3 className="font-serif-lux text-xl font-semibold text-marble-50">{item.name}</h3>

          <div className="mt-4 flex gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100" style={{ transform: 'translateZ(40px)' }}>
            <button
              onClick={onQuickView}
              className="flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-marble-50 backdrop-blur-md transition-colors hover:bg-white/30"
            >
              <Eye className="h-3.5 w-3.5" /> Quick View
            </button>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-marble-900 transition-colors hover:bg-gold-400"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Enquire
            </Link>
          </div>
        </div>

        {/* gold corner */}
        <div className="pointer-events-none absolute left-3 top-3 h-10 w-10 rounded-tl-lg border-l border-t border-gold-400/40 transition-all duration-500 group-hover:border-gold-300" />
      </div>
    </motion.div>
  );
});

TiltCard.displayName = 'TiltCard';

export default function Collections() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState<Item | null>(null);

  const items = filter === 'All' ? COLLECTIONS : COLLECTIONS.filter((c) => c.cat === filter);

  return (
    <section id="collections" className="marble-veined relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Collections"
          title={<>A Pantheon in <span className="gold-text">Stone</span></>}
          intro="From marble murtis and temples to onyx and meenakari — every category is a curated gallery of devotion."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {getAllImages().slice(0, 3).map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-[1.5rem] border border-marble-200 bg-white/70 shadow-soft"
            >
              <img src={src} alt="Luxury marble collection detail" className="h-56 w-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  filter === f
                    ? 'bg-marble-900 text-marble-50 shadow-soft'
                    : 'border border-marble-300 text-marble-600 hover:border-gold-500 hover:text-gold-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <TiltCard key={item.name} item={item} onQuickView={() => setActive(item)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick view modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-marble-950/70 backdrop-blur-md" onClick={() => setActive(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 grid w-full max-w-3xl overflow-hidden rounded-3xl bg-marble-50 shadow-2xl md:grid-cols-2"
            >
              <div className="relative aspect-square md:aspect-auto">
                <img src={active.img} alt={active.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="section-eyebrow">{active.cat}</span>
                <h3 className="mt-3 font-serif-lux text-3xl font-semibold text-marble-900">{active.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-marble-600">{active.desc}</p>
                <div className="lux-divider my-6" />
                <p className="text-sm text-marble-500">
                  Each piece is handcrafted to order. Enquire for pricing, sizes and customization.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link to="/contact" onClick={() => setActive(null)} className="btn-gold rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em]">
                    Enquire Now
                  </Link>
                  <button onClick={() => setActive(null)} className="rounded-full border border-marble-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-600 hover:border-gold-500">
                    Close
                  </button>
                </div>
              </div>
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 text-marble-400 hover:text-marble-900" aria-label="Close">
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

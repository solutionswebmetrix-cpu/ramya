import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { getCollectionItemsByCategory, getProductDetailRoute, type CollectionItem } from '../data/collections';

function getHomeShowcaseItems() {
  const murtiItems = getCollectionItemsByCategory('murtis');
  const templeItems = getCollectionItemsByCategory('temples');
  const handicraftItems = getCollectionItemsByCategory('handicraft');

  const pickByName = (source: CollectionItem[], names: string[]) =>
    names
      .map((name) => source.find((item) => item.name === name))
      .filter((item): item is CollectionItem => Boolean(item));

  const selected = [
    ...pickByName(
      murtiItems.filter((item) => item.subcategory === 'Marble Murti'),
      [
        'Blessing Saint with Floral Garland',
        'Ganesha Idol in Ornate Splendor',
        'Marble Ganesha in the Stone Workshop',
        'Marble Goddess Lakshmi Idol',
      ],
    ),
    ...pickByName(murtiItems.filter((item) => item.subcategory === 'Bust'), ['Ornate White Marble Deity Bust', 'Marble Statesman in the Stone Yard bust']),
    ...pickByName(murtiItems.filter((item) => item.subcategory === 'Statue'), ['Brightly Painted Namaste Statue in Stone Workshop', 'Military Statue in Sculpture Workshop']),
    ...pickByName(templeItems, ['Marble Mandir with Deities and Sages', 'White Marble Mandir with Floral Inlay', 'Marble Pavilion Under Blue Skies']),
    ...pickByName(handicraftItems, ['Marble Peacock Decorative Wall Clock', 'Marble Decorative Lantern']),
  ];

  return selected.filter((item, index, array) => array.findIndex((candidate) => candidate.image === item.image) === index);
}

function ProductCard({ item, index }: { item: CollectionItem; index: number }) {
  const navigate = useNavigate();
  const productRoute = getProductDetailRoute(item.category, item.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      onClick={() => navigate(productRoute)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          navigate(productRoute);
        }
      }}
      role="button"
      tabIndex={0}
      className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-marble-200 bg-white/90 shadow-soft"
    >
      <div className="overflow-hidden bg-marble-50">
        <img src={item.image} alt={item.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="flex h-full flex-col p-6">
        <h3 className="font-serif-lux text-xl font-semibold text-marble-900">{item.name}</h3>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          <span>{item.category === 'murtis' ? 'Marble Murti' : item.category === 'temples' ? 'Temple' : 'Handicraft'}</span>
        </div>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            navigate('/contact');
          }}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900 transition-colors hover:bg-gold-400"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Inquiry Now
        </button>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const homeShowcaseItems = getHomeShowcaseItems();

  return (
    <section id="collections" className="marble-veined relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Collections"
          title={<>A Pantheon in <span className="gold-text">Stone</span></>}
          intro="Marble murtis, temple pieces and handcrafted decor are now grouped by the new product structure."
        />

        <div className="mt-14">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-marble-200 bg-white/80 shadow-soft backdrop-blur-sm">
              <div className="border-b border-marble-200/80 p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <span className="section-eyebrow">Featured Home Showcase</span>
                    <h3 className="mt-3 font-serif-lux text-2xl font-semibold text-marble-900">A curated selection of unique products from every category.</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-marble-600">Only 13 carefully chosen images are shown here so the home page stays focused and uncluttered.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8 xl:grid-cols-3">
                {homeShowcaseItems.map((item, itemIndex) => (
                  <ProductCard key={item.image} item={item} index={itemIndex} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

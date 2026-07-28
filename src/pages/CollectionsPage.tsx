import { Link } from 'react-router-dom';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { COLLECTION_CATEGORIES } from '../data/collections';

export default function CollectionsPage() {
  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Collections"
          title={<>Explore Our <span className="gold-text">Collections</span></>}
          intro="Every category reflects our commitment to devotion, craftsmanship and luxury marble artistry."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {COLLECTION_CATEGORIES.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.08}>
              <div className="group h-full overflow-hidden rounded-[2rem] border border-marble-200 bg-white/80 shadow-soft backdrop-blur-sm">
                <img src={category.image} alt={category.title} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="p-8">
                  <span className="section-eyebrow">{category.title}</span>
                  <h3 className="mt-4 font-serif-lux text-2xl font-semibold text-marble-900">{category.description}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-marble-600">{category.blurb}</p>
                  <Link to={`/collections/${category.slug}`} className="mt-6 inline-flex rounded-full bg-marble-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-50 transition-colors hover:bg-marble-800">
                    View Collection
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

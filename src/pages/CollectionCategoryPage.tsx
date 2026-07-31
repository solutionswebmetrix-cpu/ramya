import { Link, useParams } from 'react-router-dom';
import { SectionHeading, Reveal } from '../components/ui/Reveal';
import { getCollectionCategory, getCollectionItemsByCategory } from '../data/collections';

export default function CollectionCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = category ? getCollectionCategory(category) : undefined;
  const items = category ? getCollectionItemsByCategory(category) : [];

  if (!categoryInfo) {
    return (
      <section className="py-24 text-center">
        <p className="text-marble-600">The selected collection could not be found.</p>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link to="/collections" className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600 transition-colors hover:text-gold-700">
          ← Back to Collections
        </Link>

        <SectionHeading
          eyebrow={categoryInfo.title}
          title={<>Crafted in <span className="gold-text">Stone</span></>}
          intro={categoryInfo.description}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} delay={index * 0.06}>
              <div className="group h-full overflow-hidden rounded-[1.8rem] border border-marble-200 bg-white/80 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-7">
                  <h3 className="font-serif-lux text-2xl font-semibold text-marble-900">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-marble-600">{item.description}</p>
                  <Link to="/contact" className="mt-6 inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900 transition-colors hover:bg-gold-400">
                    Inquiry Now
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

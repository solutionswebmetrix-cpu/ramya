import { Link, useParams } from 'react-router-dom';
import { SectionHeading, Reveal } from '../components/ui/Reveal';
import { getCollectionCategory, getCollectionItemsByCategory, FEATURED_PRODUCT } from '../data/collections';

export default function CollectionCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = category ? getCollectionCategory(category) : undefined;
  const items = category ? getCollectionItemsByCategory(category) : [];

  // If this is the handicraft category, ensure the featured product appears first
  const orderedItems = (category === 'handicraft' && FEATURED_PRODUCT)
    ? [...items.filter((it) => it.name === FEATURED_PRODUCT.name), ...items.filter((it) => it.name !== FEATURED_PRODUCT.name)]
    : items;

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

        <div className="mt-10 rounded-[2rem] border border-marble-200 bg-white/80 p-8 shadow-soft">
          <h3 className="font-serif-lux text-xl font-semibold text-marble-900">Product Information</h3>
          <ul className="mt-5 space-y-3 text-sm text-marble-600">
            {categoryInfo.productInfo.map((line, index) => (
              <li key={index} className="leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {orderedItems.map((item, index) => {
            const isFeatured = !!FEATURED_PRODUCT && item.name === FEATURED_PRODUCT.name;
            const spanClass = isFeatured ? 'md:col-span-2 xl:col-span-2' : '';

            return (
              <div key={`${item.name}-wrap-${index}`} className={spanClass}>
                <Reveal key={`${item.name}-${index}`} delay={index * 0.06}>
                  <div className={`group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-marble-200 bg-white/80 shadow-soft transition-transform duration-500 hover:-translate-y-1 ${isFeatured ? 'ring-2 ring-gold-200/30' : ''}`}>
                    {isFeatured && (
                      <div className="absolute right-4 top-4 z-20">
                        <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gold-200">Featured Product</span>
                      </div>
                    )}

                    <div className="h-[380px] w-full overflow-hidden bg-white">
                      <img src={item.image} alt={item.name} className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-serif-lux text-2xl font-semibold text-marble-900">{item.name}</h3>
                      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-gold-600">{item.marbleType}</p>
                      <p className="mt-2 text-sm leading-relaxed text-marble-600"><span className="font-semibold text-marble-900">Available Size:</span> {item.availableSize}</p>
                      <p className="mt-4 text-sm leading-relaxed text-marble-600">{item.description}</p>
                      <Link to="/contact" className="mt-auto inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900 transition-colors hover:bg-gold-400">
                        Inquiry Now
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

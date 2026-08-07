import { Link, useParams } from 'react-router-dom';
import { SectionHeading, Reveal } from '../components/ui/Reveal';
import { getCollectionCategory, getCollectionItemsByCategory } from '../data/collections';

const subcategories = [
  { key: 'marble-murti', title: 'Marble Murti' },
  { key: 'bust', title: 'Bust' },
  { key: 'statue', title: 'Statue' },
] as const;

export default function CollectionCategoryPage() {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  const categoryInfo = category ? getCollectionCategory(category) : undefined;
  let items = category ? getCollectionItemsByCategory(category) : [];

  if (category === 'marble-murti' && subcategory) {
    const normalizedSubcategory = subcategory.toLowerCase();

    items = items.filter((item) => {
      if (normalizedSubcategory === 'bust') {
        return item.subcategory === 'Bust';
      }

      if (normalizedSubcategory === 'statue') {
        return item.subcategory === 'Statue';
      }

      return item.subcategory === 'Marble Murti';
    });
  }

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

        {(category === 'murtis' || category === 'marble-murti') ? (
          <div className="mt-14 space-y-8">
            {subcategories.map((subcategory) => {
              const products = items.filter((item) => item.subcategory === subcategory.title);
              return (
                <div key={subcategory.key}>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-serif-lux text-2xl font-semibold text-marble-900">{subcategory.title}</h3>
                    <span className="text-sm text-marble-500">{products.length} product{products.length === 1 ? '' : 's'}</span>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((item, index) => (
                      <Reveal key={`${item.image}-${index}`} delay={index * 0.04}>
                        <div className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-marble-200 bg-white/80 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                          <div className="h-[320px] w-full overflow-hidden bg-white">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                          </div>
                          <div className="flex flex-1 flex-col p-7">
                            <h4 className="font-serif-lux text-2xl font-semibold text-marble-900">{item.name}</h4>
                            <div className="mt-4 space-y-2 text-sm text-marble-600">
                              <p className="leading-relaxed">{item.description}</p>
                              <div>
                                <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Available Sizes</p>
                                <ul className="mt-1 space-y-1">
                                  {item.sizeDetails.map((size) => (
                                    <li key={size}>• {size}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Available Marble</p>
                                <ul className="mt-1 space-y-1">
                                  {item.marbleDetails.map((marble) => (
                                    <li key={marble}>• {marble}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <Link to="/contact" className="mt-auto inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900 transition-colors hover:bg-gold-400">
                              Inquiry Now
                            </Link>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <Reveal key={`${item.image}-${index}`} delay={index * 0.04}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-marble-200 bg-white/80 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                  <div className="h-[320px] w-full overflow-hidden bg-white">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif-lux text-2xl font-semibold text-marble-900">{item.name}</h3>
                    <div className="mt-4 space-y-2 text-sm text-marble-600">
                      <p className="leading-relaxed">{item.description}</p>
                      <div>
                        <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Available Sizes</p>
                        <ul className="mt-1 space-y-1">
                          {item.sizeDetails.map((size) => (
                            <li key={size}>• {size}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Available Marble</p>
                        <ul className="mt-1 space-y-1">
                          {item.marbleDetails.map((marble) => (
                            <li key={marble}>• {marble}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link to="/contact" className="mt-auto inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900 transition-colors hover:bg-gold-400">
                      Inquiry Now
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { COLLECTION_CATEGORIES, getCollectionItemsByCategory } from '../data/collections';

const subcategories = [
  { key: 'marble-murti', title: 'Marble Murti' },
  { key: 'bust', title: 'Bust' },
  { key: 'statue', title: 'Statue' },
] as const;

export default function CollectionsPage() {
  const categories = COLLECTION_CATEGORIES.map((category) => ({
    ...category,
    items: getCollectionItemsByCategory(category.slug),
  }));

  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Collections"
          title={<>Explore Our <span className="gold-text">Collections</span></>}
          intro="Every category now reflects the new structure with marble murtis, temple pieces and handicraft works."
        />

        <div className="mt-16 space-y-8">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <div className="overflow-hidden rounded-[2rem] border border-marble-200 bg-white/80 shadow-soft backdrop-blur-sm">
                <div className="flex flex-col gap-4 border-b border-marble-200/80 p-6 md:flex-row md:items-end md:justify-between md:p-8">
                  <div>
                    <span className="section-eyebrow">{category.title}</span>
                    <h3 className="mt-3 font-serif-lux text-2xl font-semibold text-marble-900">{category.description}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-marble-600">{category.blurb}</p>
                  </div>
                  <Link to={`/collections/${category.slug}`} className="inline-flex rounded-full bg-marble-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-50 transition-colors hover:bg-marble-800">
                    View Category
                  </Link>
                </div>

                {category.slug === 'murtis' ? (
                  <div className="p-6 md:p-8">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {subcategories.map((subcategory) => {
                        const products = category.items.filter((item) => item.subcategory === subcategory.title);
                        return (
                          <div key={subcategory.key} className="rounded-full border border-marble-200 bg-marble-50 px-4 py-2 text-sm text-marble-700">
                            <span className="font-semibold text-marble-900">{subcategory.title}</span>
                            <span className="ml-2 text-marble-500">{products.length} items</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-8">
                      {subcategories.map((subcategory) => {
                        const products = category.items.filter((item) => item.subcategory === subcategory.title);
                        return (
                          <div key={subcategory.key}>
                            <div className="mb-4 flex items-center justify-between">
                              <h4 className="font-serif-lux text-xl font-semibold text-marble-900">{subcategory.title}</h4>
                              <span className="text-sm text-marble-500">{products.length} product{products.length === 1 ? '' : 's'}</span>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                              {products.map((item) => (
                                <div key={item.image} className="group overflow-hidden rounded-[1.5rem] border border-marble-200 bg-marble-50 shadow-sm">
                                  <div className="h-[300px] w-full overflow-hidden bg-white">
                                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                                  </div>
                                  <div className="p-5">
                                    <h5 className="font-serif-lux text-lg font-semibold text-marble-900">{item.name}</h5>
                                    <Link to="/contact" className="mt-4 inline-flex rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900">Inquiry Now</Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8 xl:grid-cols-3">
                    {category.items.map((item) => (
                      <div key={item.image} className="group overflow-hidden rounded-[1.5rem] border border-marble-200 bg-marble-50 shadow-sm">
                        <div className="h-[300px] w-full overflow-hidden bg-white">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                        </div>
                        <div className="p-5">
                          <h5 className="font-serif-lux text-lg font-semibold text-marble-900">{item.name}</h5>
                          <Link to="/contact" className="mt-4 inline-flex rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900">Inquiry Now</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

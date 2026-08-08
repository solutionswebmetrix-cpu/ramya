import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { getCategoryLabel, getProductRoute, searchProducts } from '../data/collections';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const query = useQuery().get('q') ?? '';

  const products = useMemo(() => searchProducts(query), [query]);

  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Search Results"
          title={<>Results for <span className="gold-text">{query || 'All Products'}</span></>}
          intro="Search the entire marble catalog by product name, category, subcategory, description and marble type."
        />

        {query.trim() ? (
          products.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((item) => (
                <Reveal key={item.id} delay={0}>
                  <button
                    type="button"
                    onClick={() => navigate(getProductRoute(item))}
                    className="group flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-marble-200 bg-white/90 shadow-soft transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="h-72 w-full overflow-hidden bg-marble-50">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="font-serif-lux text-xl font-semibold text-marble-900">{item.name}</h3>
                      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-marble-500">{getCategoryLabel(item.category)}</p>
                      <p className="mt-4 text-sm text-marble-600 line-clamp-3">{item.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-gold-600">
                        <span>{item.subcategory ?? getCategoryLabel(item.category)}</span>
                        <span>{item.marble}</span>
                      </div>
                      <span className="mt-5 inline-flex rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900">View Details</span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-[2rem] border border-marble-200 bg-white/90 p-10 text-center shadow-soft">
              <p className="text-marble-900 text-xl font-semibold">No products found</p>
              <p className="mt-4 text-sm text-marble-600">Try searching for Murti, Temple, Bust, Statue or Handicraft.</p>
            </div>
          )
        ) : (
          <div className="mt-12 rounded-[2rem] border border-marble-200 bg-white/90 p-10 text-center shadow-soft">
            <p className="text-marble-900 text-xl font-semibold">Search the catalog</p>
            <p className="mt-4 text-sm text-marble-600">Enter a product name, category, subcategory or marble type to find matching items.</p>
          </div>
        )}
      </div>
    </section>
  );
}

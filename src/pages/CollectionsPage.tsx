import { Link } from 'react-router-dom';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { COLLECTION_CATEGORIES, getCollectionImageCategory, FEATURED_PRODUCT } from '../data/collections';
import { getFolderImages } from '../lib/assetImages';

type CategoryConfig = {
  slug: 'murtis' | 'temples' | 'handicraft';
  title: string;
  description: string;
  blurb: string;
};

const CATEGORY_META: CategoryConfig[] = COLLECTION_CATEGORIES.map((category) => ({
  slug: category.slug as CategoryConfig['slug'],
  title: category.title,
  description: category.description,
  blurb: category.blurb,
}));

const getImageName = (src: string) => src.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';

const getCategoryForImage = (src: string) => getCollectionImageCategory(src);

export default function CollectionsPage() {
  const collectionImages = getFolderImages('collections');

  const groupedCollections = CATEGORY_META.map((category) => {
    const images = collectionImages.filter((src) => getCategoryForImage(src) === category.slug);

    if (FEATURED_PRODUCT && category.slug === 'handicraft') {
      const featured = FEATURED_PRODUCT.image;
      if (images.includes(featured)) {
        return {
          ...category,
          images: [featured, ...images.filter((s) => s !== featured)],
        };
      }
    }

    return {
      ...category,
      images,
    };
  });

  const uncategorizedImages = collectionImages.filter((src) => {
    return !groupedCollections.some((group) => group.images.includes(src));
  });

  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Collections"
          title={<>Explore Our <span className="gold-text">Collections</span></>}
          intro="Every category reflects our commitment to devotion, craftsmanship and luxury marble artistry."
        />

        {/* Featured product banner within Collections page */}
        {FEATURED_PRODUCT && (
          <Reveal delay={0.04}>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-marble-200 bg-white/80 p-6 shadow-soft md:flex md:items-center md:gap-6">
              <div className="w-full md:w-2/5">
                <img src={FEATURED_PRODUCT.image} alt={FEATURED_PRODUCT.name} className="h-48 w-full object-contain" loading="lazy" />
              </div>
              <div className="mt-4 md:mt-0 md:w-3/5">
                <div className="inline-flex items-center gap-3">
                  <span className="rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">Featured Product</span>
                </div>
                <h3 className="mt-3 font-serif-lux text-2xl font-semibold text-marble-900">{FEATURED_PRODUCT.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-marble-600">{FEATURED_PRODUCT.description}</p>
                <div className="mt-4">
                  <Link to="/collections/handicraft" className="inline-flex rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900">View in Handicraft</Link>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-16 space-y-8">
          {groupedCollections.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <div className="overflow-hidden rounded-[2rem] border border-marble-200 bg-white/80 shadow-soft backdrop-blur-sm">
                <div className="flex flex-col gap-4 border-b border-marble-200/80 p-6 md:flex-row md:items-end md:justify-between md:p-8">
                  <div>
                    <span className="section-eyebrow">{category.title}</span>
                    <h3 className="mt-3 font-serif-lux text-2xl font-semibold text-marble-900">{category.description}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-marble-600">{category.blurb}</p>
                  </div>
                  <Link to={`/collections/${category.slug}`} className="inline-flex rounded-full bg-marble-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-marble-50 transition-colors hover:bg-marble-800">
                    View Collection
                  </Link>
                </div>

                {category.images.length > 0 ? (
                  <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8 xl:grid-cols-3">
                    {category.images.map((src, imageIndex) => (
                      <div key={`${category.slug}-${imageIndex}`} className="group overflow-hidden rounded-[1.5rem] border border-marble-200 bg-marble-50 shadow-sm">
                        <div className="h-[350px] w-full overflow-hidden bg-white">
                          <img
                            src={src}
                            alt={`${category.title} ${imageIndex + 1}`}
                            className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-sm text-marble-600 md:p-8">Curated imagery will appear here as more pieces are added to this collection.</div>
                )}
              </div>
            </Reveal>
          ))}

          {uncategorizedImages.length > 0 && (
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-[2rem] border border-marble-200 bg-white/80 shadow-soft backdrop-blur-sm">
                <div className="border-b border-marble-200/80 p-6 md:p-8">
                  <span className="section-eyebrow">Additional Pieces</span>
                  <h3 className="mt-3 font-serif-lux text-2xl font-semibold text-marble-900">More sculptural works from the collection archive.</h3>
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8 xl:grid-cols-3">
                  {uncategorizedImages.map((src, index) => (
                    <div key={`uncategorized-${index}`} className="group overflow-hidden rounded-[1.5rem] border border-marble-200 bg-marble-50 shadow-sm">
                      <img src={src} alt={`Collection piece ${index + 1}`} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

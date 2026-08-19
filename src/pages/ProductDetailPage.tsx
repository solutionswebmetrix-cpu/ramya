import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle, PackageCheck, Sparkles } from 'lucide-react';
import { getCategoryLabel, getCollectionItemsByCategory, getProductById, getProductRoute, type CollectionItem } from '../data/collections';

function getCategoryInfo(category: string, subcategory?: string) {
  const normalized = category.toLowerCase();
  const normalizedSubcategory = subcategory?.toLowerCase();

  if (normalized === 'marble-murti' || normalized === 'murtis') {
    if (normalizedSubcategory === 'bust') {
      return {
        sizes: ['2 Feet to 3 Feet'],
        marble: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
        note: 'Custom sizes available on demand.',
        label: 'Bust',
      };
    }

    if (normalizedSubcategory === 'statue') {
      return {
        sizes: ['2 Feet to 3 Feet'],
        marble: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
        note: 'Vietnam Marble statues are available only from 3 Feet onwards.',
        label: 'Statue',
      };
    }

    return {
      sizes: ['12 Inches to 36 Inches'],
      marble: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
      note: 'Custom sizes available on demand.',
      label: 'Marble Murti',
    };
  }

  if (normalized === 'temple' || normalized === 'temples') {
    return {
      sizes: ['Starts from 2 Feet'],
      marble: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
      note: 'Larger sizes available on customer demand.',
      label: 'Temple',
    };
  }

  if (normalized === 'handicraft') {
    return {
      sizes: ['Available on demand'],
      marble: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
      note: 'Sizes depend on the product and are available on customer demand.',
      label: 'Handicraft',
    };
  }

  return {
    sizes: ['Available on request'],
    marble: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    note: '',
    label: 'Collection',
  };
}

export default function ProductDetailPage() {
  const { category, productName, productId } = useParams<{ category?: string; productName?: string; productId?: string }>();

  const product = productId ? getProductById(productId) : category && productName ? getProductById(productName) : undefined;
  const isWallClock = product?.name === 'Marble Lord Rama Wall Clock';
  const categoryInfo = product ? getCategoryInfo(product.category, product.subcategory) : undefined;

  const relatedProducts = useMemo(() => {
    if (!product) return [] as CollectionItem[];
    const items = getCollectionItemsByCategory(product.category);
    return items.filter((item) => item.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product || !categoryInfo) {
    return (
      <section className="min-h-screen bg-marble-50 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-marble-200 bg-white/80 p-8 text-center shadow-soft">
          <p className="text-marble-600">The requested product could not be found.</p>
        </div>
      </section>
    );
  }

  const mainImage = product.image;

  return (
    <section className="relative min-h-screen bg-marble-50 px-5 pb-24 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <Link to="/collections" className="relative z-20 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold-600 transition-colors hover:text-gold-700">
          <ArrowLeft className="h-4 w-4" /> Back to Collections
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-marble-200 bg-white/90 p-5 shadow-soft md:p-8">
            <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-marble-200 bg-marble-50 p-3 md:p-4">
              <img
                src={mainImage}
                alt={product.name}
                className="max-h-[560px] w-full object-contain object-center"
                loading="eager"
                fetchPriority="high"
              />
            </div>

          </div>

          <div className="lg:sticky lg:top-24 h-fit rounded-[2rem] border border-marble-200 bg-white/90 p-7 shadow-soft md:p-8">
            <span className="section-eyebrow">{getCategoryLabel(product.category)}</span>
            <h1 className="mt-3 font-serif-lux text-3xl font-semibold text-marble-900">{product.name}</h1>

            <div className="mt-6 space-y-4 text-sm text-marble-600">
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Category</p>
                <p className="mt-2 text-marble-900">{getCategoryLabel(product.category)}</p>
              </div>
              {product.subcategory ? (
                <div>
                  <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Subcategory</p>
                  <p className="mt-2 text-marble-900">{product.subcategory}</p>
                </div>
              ) : null}
              {!isWallClock ? (
                <>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Size</p>
                    <p className="mt-2 text-marble-900">{product.size}</p>
                  </div>
                </>
              ) : null}
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Marble</p>
                <p className="mt-2 text-marble-900">{product.marbleType}</p>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Description</p>
                <p className="mt-2 leading-relaxed">{product.description}</p>
              </div>
              {!isWallClock ? (
                <div>
                  <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Available Sizes</p>
                  <ul className="mt-2 space-y-1">
                    {categoryInfo.sizes.map((size) => (
                      <li key={size}>• {size}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Available Marble</p>
                <ul className="mt-2 space-y-1">
                  {categoryInfo.marble.map((marble) => (
                    <li key={marble}>• {marble}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Description</p>
                <p className="mt-2 leading-relaxed">{product.description}</p>
              </div>
              {!isWallClock && categoryInfo.note ? (
                <div className="rounded-[1rem] border border-gold-200 bg-gold-50/70 p-4 text-sm text-marble-700">
                  <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Note</p>
                  <p className="mt-2 leading-relaxed">{categoryInfo.note}</p>
                </div>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1rem] border border-marble-200 bg-marble-50 p-4">
                  <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Customization</p>
                  <p className="mt-2 text-marble-900">Available</p>
                </div>
                <div className="rounded-[1rem] border border-marble-200 bg-marble-50 p-4">
                  <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Availability</p>
                  <p className="mt-2 text-marble-900">✔ Made to Order</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1rem] border border-marble-200 bg-marble-50 p-4">
                  <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Delivery</p>
                  <p className="mt-2 text-marble-900">Pan India</p>
                </div>
                <div className="rounded-[1rem] border border-marble-200 bg-marble-50 p-4">
                  <p className="font-semibold uppercase tracking-[0.16em] text-gold-700">Customization</p>
                  <p className="mt-2 text-marble-900">Available</p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://wa.me/919557463257" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900 transition-colors hover:bg-gold-400">
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>
              <a href="tel:+919557463257" className="inline-flex items-center gap-2 rounded-full border border-marble-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-700 transition-colors hover:border-gold-500 hover:text-gold-700">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-marble-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-700 transition-colors hover:border-gold-500 hover:text-gold-700">
                <Sparkles className="h-4 w-4" /> Request Custom Size
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-marble-200 bg-white/90 p-7 shadow-soft md:p-8">
          <h2 className="font-serif-lux text-2xl font-semibold text-marble-900">Customer Benefits</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              'Premium Marble',
              'Handcrafted',
              'Custom Sizes',
              'Secure Packaging',
              'Pan India Delivery',
            ].map((benefit) => (
              <div key={benefit} className="rounded-[1rem] border border-marble-200 bg-marble-50 p-4 text-sm font-medium text-marble-700">
                <div className="mb-2 flex items-center gap-2 text-gold-700"><PackageCheck className="h-4 w-4" /> {benefit}</div>
                <p className="text-marble-600">Crafted to order with premium care.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-serif-lux text-2xl font-semibold text-marble-900">Related Products</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link key={item.image} to={getProductRoute(item)} className="overflow-hidden rounded-[1.5rem] border border-marble-200 bg-white/90 shadow-soft transition-transform hover:-translate-y-1">
                <img src={item.image} alt={item.name} className="h-56 w-full object-contain p-3" loading="lazy" decoding="async" />
                <div className="p-5">
                  <h3 className="font-serif-lux text-lg font-semibold text-marble-900">{item.name}</h3>
                  <p className="mt-2 text-sm text-marble-600">{getCategoryLabel(item.category)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

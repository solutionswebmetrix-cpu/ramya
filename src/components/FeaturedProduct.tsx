import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';
import { FEATURED_PRODUCT } from '../data/collections';

export default function FeaturedProduct() {
  if (!FEATURED_PRODUCT) return null;

  return (
    <Reveal>
      <section className="relative -mt-6 mb-12 mx-auto max-w-7xl px-5 md:px-8">
        <div
          className="group overflow-hidden rounded-[2rem] border border-marble-200 bg-white/90 p-4 shadow-2xl md:flex md:items-stretch md:gap-6 md:p-6"
          style={{ boxShadow: '0 40px 100px rgba(74,43,20,0.14), 0 12px 45px rgba(212,144,47,0.08)' }}
        >
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-0 pointer-events-none rounded-[1.5rem] opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,144,47,0.26), transparent 40%)' }} />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-marble-50 p-4 md:p-6 flex items-center justify-center" style={{ minHeight: 550 }}>
              <img
                src={FEATURED_PRODUCT.image}
                alt={FEATURED_PRODUCT.name}
                loading="eager"
                className="h-[600px] w-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="mt-4 flex w-full flex-col justify-center gap-4 px-3 md:mt-0 md:w-1/2 md:px-6">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gold-500/20 px-3 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-gold-200 backdrop-blur-sm">⭐ Featured Product</span>
            </div>

            <h2 className="font-serif-lux text-3xl font-semibold text-marble-900">Marble Lord Rama Wall Clock</h2>
            <h3 className="mt-1 text-sm uppercase tracking-[0.18em] text-marble-600">Premium Marble Handicraft Collection</h3>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-marble-600">A handcrafted luxury marble wall clock featuring Lord Rama, crafted with exquisite detailing and premium marble. Perfect for homes, temples, hotels, offices, and gifting.</p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <h4 className="text-xs uppercase tracking-[0.18em] text-marble-600">Material</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-marble-700">
                  <li>Makrana Marble</li>
                  <li>Vietnam Marble</li>
                  <li>Rajnagar Marble</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.18em] text-marble-600">Availability</h4>
                <div className="mt-1 text-sm font-semibold text-marble-900">Customized sizes available on demand.</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-gold-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-900 shadow-md hover:bg-gold-400">
                Inquiry Now
              </Link>
              <Link to="/collections/handicraft" className="rounded-full border border-marble-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-700 hover:border-gold-500">
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

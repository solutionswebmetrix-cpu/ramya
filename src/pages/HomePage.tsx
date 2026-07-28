import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Collections from '../components/Collections';
import ProductShowcase3D from '../components/ProductShowcase3D';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Collections />
      <ProductShowcase3D />
      <section className="relative overflow-hidden bg-marble-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-[2rem] border border-marble-200 bg-white/80 p-8 shadow-soft md:p-10">
            <h3 className="font-serif-lux text-3xl font-semibold text-marble-900">Discover the full experience</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-marble-600">Browse our curated galleries, explore customization possibilities, and learn what makes our marble work exceptional.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/gallery" className="rounded-full bg-marble-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-50 transition-colors hover:bg-marble-800">View Gallery</Link>
              <Link to="/customization" className="rounded-full border border-marble-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-700 transition-colors hover:border-gold-500 hover:text-gold-700">Customization</Link>
              <Link to="/why-us" className="rounded-full border border-marble-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-700 transition-colors hover:border-gold-500 hover:text-gold-700">Why Us</Link>
              <Link to="/testimonials" className="rounded-full border border-marble-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-700 transition-colors hover:border-gold-500 hover:text-gold-700">Testimonials</Link>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

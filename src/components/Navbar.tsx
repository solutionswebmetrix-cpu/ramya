import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoImage from './LogoImage';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Collections', to: '/collections' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Customization', to: '/customization' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

const COLLECTION_LINKS = [
  { label: 'Murtis', to: '/collections/murtis' },
  { label: 'Temples', to: '/collections/temples' },
  { label: 'Meenakari', to: '/collections/meenakari' },
  { label: 'Onyx', to: '/collections/onyx' },
  { label: 'Decor', to: '/collections/decor' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[70] isolate pointer-events-auto transition-all duration-500 ${
          scrolled
            ? 'bg-marble-50/85 py-3 shadow-soft backdrop-blur-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Ramya Marble Murti & Handicraft home" className="flex items-center">
            <div className="h-18 w-auto md:h-18 lg:h-25">
              <LogoImage />
            </div>
          </Link>

          {/* Center menu (desktop) */}
          <ul
            className={`hidden items-center gap-7 xl:flex ${
              scrolled ? 'text-marble-700' : 'text-marble-100'
            }`}
          >
            {NAV.map((item) => {
              if (item.label !== 'Collections') {
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      onClick={() => {
                        setOpen(false);
                        setCollectionsOpen(false);
                      }}
                      className="group relative z-[71] pointer-events-auto text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-600"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label} className="relative" onMouseEnter={() => setCollectionsOpen(true)} onMouseLeave={() => setCollectionsOpen(false)}>
                  <Link
                    to={item.to}
                    onClick={() => {
                      setOpen(false);
                      setCollectionsOpen(false);
                    }}
                    className="group relative z-[71] pointer-events-auto text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-600"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                  </Link>

                  <AnimatePresence>
                    {collectionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-[1.25rem] border border-gold-500/20 bg-marble-50/95 p-3 shadow-[0_20px_60px_-20px_rgba(74,43,20,0.45)] backdrop-blur-xl"
                      >
                        <ul className="space-y-1">
                          {COLLECTION_LINKS.map((collection) => (
                            <li key={collection.label}>
                              <Link
                                to={collection.to}
                                onClick={() => setCollectionsOpen(false)}
                                className="block rounded-xl px-3 py-2 text-left text-[0.72rem] font-medium uppercase tracking-[0.2em] text-marble-700 transition-all duration-300 hover:bg-gold-500/10 hover:text-gold-700"
                              >
                                {collection.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Contact button (desktop) */}
          <div className="hidden xl:block">
            <Link
              to="/contact"
              className="btn-gold relative z-[71] pointer-events-auto flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              <Phone className="h-3.5 w-3.5" />
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className={`xl:hidden ${scrolled ? 'text-marble-900' : 'text-marble-100'}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 xl:hidden"
          >
            <div className="absolute inset-0 bg-marble-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] marble-veined p-8 pt-28 shadow-2xl"
            >
              <ul className="space-y-6">
                {NAV.map((item, i) => {
                  if (item.label !== 'Collections') {
                    return (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                      >
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="font-serif-lux text-2xl text-marble-800 transition-colors hover:text-gold-600"
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  }

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileCollectionsOpen((v) => !v)}
                        className="font-serif-lux text-2xl text-marble-800 transition-colors hover:text-gold-600"
                      >
                        Collections
                      </button>
                      <AnimatePresence>
                        {mobileCollectionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-3 overflow-hidden rounded-2xl border border-gold-500/20 bg-white/70 p-3"
                          >
                            {COLLECTION_LINKS.map((collection) => (
                              <Link
                                key={collection.label}
                                to={collection.to}
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-3 py-2 text-left text-sm font-medium uppercase tracking-[0.2em] text-marble-700 transition-all duration-300 hover:bg-gold-500/10 hover:text-gold-700"
                              >
                                {collection.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="lux-divider mt-10" />
              <a
                href="tel:+919557463257"
                className="mt-8 flex items-center gap-3 text-marble-700"
              >
                <Phone className="h-4 w-4 text-gold-600" />
                <span className="text-sm tracking-wide">+91 95574 63257</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

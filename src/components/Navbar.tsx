import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { scrollToId } from '@/lib/smoothScroll';

const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Collections', id: 'collections' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Customization', id: 'customization' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-marble-50/85 py-3 shadow-soft backdrop-blur-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <button onClick={() => go('home')} aria-label="Ramya Marble Murti home">
            <Logo light={!scrolled} />
          </button>

          {/* Center menu (desktop) */}
          <ul
            className={`hidden items-center gap-7 xl:flex ${
              scrolled ? 'text-marble-700' : 'text-marble-100'
            }`}
          >
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className="group relative text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-600"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Contact button (desktop) */}
          <div className="hidden xl:block">
            <button
              onClick={() => go('contact')}
              className="btn-gold flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              <Phone className="h-3.5 w-3.5" />
              Contact
            </button>
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
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <button
                      onClick={() => go(item.id)}
                      className="font-serif-lux text-2xl text-marble-800 transition-colors hover:text-gold-600"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
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

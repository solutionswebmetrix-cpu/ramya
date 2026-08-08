import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getProductRoute, searchProducts } from '../data/collections';
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
  {
    label: 'Marble Murti',
    to: '/collections/marble-murti',
    children: [
      { label: 'Marble Murti', to: '/collections/marble-murti' },
      { label: 'Bust', to: '/collections/marble-murti/bust' },
      { label: 'Statue', to: '/collections/marble-murti/statue' },
    ],
  },
  { label: 'Temple', to: '/collections/temple' },
  { label: 'Handicraft', to: '/collections/handicraft' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [marbleMurtiOpen, setMarbleMurtiOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const [mobileMarbleMurtiOpen, setMobileMarbleMurtiOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchProducts(searchQuery).slice(0, 10);
  }, [searchQuery]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActiveLink = (to: string) => {
    if (to === '/') {
      return location.pathname === '/';
    }

    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

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
                        setMarbleMurtiOpen(false);
                      }}
                      className={`group relative z-[71] pointer-events-auto text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-600 ${
                        isActiveLink(item.to) ? 'text-gold-600' : ''
                      }`}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setCollectionsOpen(true)}
                  onMouseLeave={() => {
                    setCollectionsOpen(false);
                    setMarbleMurtiOpen(false);
                  }}
                >
                  <Link
                    to={item.to}
                    onClick={() => {
                      setOpen(false);
                      setCollectionsOpen(false);
                      setMarbleMurtiOpen(false);
                    }}
                    className={`group relative z-[71] pointer-events-auto text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold-600 ${
                      isActiveLink(item.to) ? 'text-gold-600' : ''
                    }`}
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
                        className="absolute left-1/2 top-full mt-3 w-[26rem] -translate-x-1/2 rounded-[1.5rem] border border-gold-500/20 bg-white/95 p-3 shadow-[0_20px_70px_-20px_rgba(74,43,20,0.45)] backdrop-blur-xl"
                      >
                        <div className="flex gap-3">
                          <ul className="w-44 space-y-1 border-r border-marble-200/80 pr-2">
                            {COLLECTION_LINKS.map((collection) => {
                              const showSubmenu = collection.label === 'Marble Murti';

                              return (
                                <li
                                  key={collection.label}
                                  className="relative"
                                  onMouseEnter={() => showSubmenu && setMarbleMurtiOpen(true)}
                                  onMouseLeave={() => showSubmenu && setMarbleMurtiOpen(false)}
                                >
                                  <Link
                                    to={collection.to}
                                    onClick={() => {
                                      setCollectionsOpen(false);
                                      setMarbleMurtiOpen(false);
                                    }}
                                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                                      isActiveLink(collection.to)
                                        ? 'bg-gold-500/12 text-gold-700'
                                        : 'text-marble-700 hover:bg-gold-500/10 hover:text-gold-700'
                                    }`}
                                  >
                                    <span>{collection.label}</span>
                                    {showSubmenu && <span className="text-sm">›</span>}
                                  </Link>
                                  {showSubmenu && marbleMurtiOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 6 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 6 }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute left-full top-0 ml-2 w-44 rounded-[1rem] border border-gold-500/20 bg-marble-50/95 p-2 shadow-[0_16px_40px_-20px_rgba(74,43,20,0.4)]"
                                    >
                                      <ul className="space-y-1">
                                        {collection.children?.map((child) => (
                                          <li key={child.label}>
                                            <Link
                                              to={child.to}
                                              onClick={() => {
                                                setCollectionsOpen(false);
                                                setMarbleMurtiOpen(false);
                                              }}
                                              className={`block rounded-lg px-3 py-2 text-left text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                                                isActiveLink(child.to)
                                                  ? 'bg-gold-500/12 text-gold-700'
                                                  : 'text-marble-700 hover:bg-gold-500/10 hover:text-gold-700'
                                              }`}
                                            >
                                              {child.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  )}
                                </li>
                              );
                            })}
                          </ul>

                          <div className="flex-1 rounded-[1rem] border border-marble-200/70 bg-marble-50/70 p-4">
                            <p className="section-eyebrow">Collection highlights</p>
                            <p className="mt-2 text-sm leading-relaxed text-marble-600">
                              Explore marble murtis, refined temple forms, and elegant handicraft pieces in one premium menu.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="hidden xl:block relative">
            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              className={`relative z-[71] inline-flex h-12 w-12 items-center justify-center rounded-full border border-marble-200 bg-white/90 text-marble-700 transition-colors hover:border-gold-500 hover:text-gold-700 ${scrolled ? 'shadow-sm' : ''}`}
              aria-label="Search products"
            >
              <Search className="h-5 w-5" />
            </button>

            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 top-full z-50 mt-3 w-[28rem] rounded-[1.5rem] border border-marble-200 bg-white/95 p-4 shadow-soft"
                >
                  <div className="flex items-center gap-3 rounded-full border border-marble-200 bg-marble-50 px-4 py-2">
                    <Search className="h-4 w-4 text-marble-500" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          setSearchOpen(false);
                          navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        }
                      }}
                      autoFocus
                      placeholder="Search products"
                      className="w-full bg-transparent text-sm text-marble-900 outline-none placeholder:text-marble-400"
                    />
                  </div>

                  <div className="mt-4 max-h-72 overflow-auto">
                    {searchResults.length > 0 ? (
                      <ul className="space-y-2">
                        {searchResults.map((item) => (
                          <Link
                            key={item.id}
                            to={getProductRoute(item)}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="block rounded-[1.25rem] px-4 py-3 transition hover:bg-marble-50"
                          >
                            <p className="font-medium text-marble-900">{item.name}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-marble-500">
                              {item.category === 'murtis' ? 'Marble Murti' : item.category === 'temples' ? 'Temple' : 'Handicraft'}
                            </p>
                          </Link>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-marble-500">Type any product name to see matching results.</p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className={`xl:hidden ${scrolled ? 'text-marble-900' : 'text-marble-100'}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </motion.header>

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
                          className={`font-serif-lux text-2xl transition-colors hover:text-gold-600 ${
                            isActiveLink(item.to) ? 'text-gold-600' : 'text-marble-800'
                          }`}
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
                              <div key={collection.label} className="space-y-2">
                                {collection.children ? (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => setMobileMarbleMurtiOpen((v) => !v)}
                                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium uppercase tracking-[0.2em] text-marble-700 transition-all duration-300 hover:bg-gold-500/10 hover:text-gold-700"
                                    >
                                      <span>{collection.label}</span>
                                      <span className="text-base">{mobileMarbleMurtiOpen ? '−' : '+'}</span>
                                    </button>
                                    <AnimatePresence>
                                      {mobileMarbleMurtiOpen && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: 'auto' }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="space-y-1 pl-3"
                                        >
                                          {collection.children.map((child) => (
                                            <Link
                                              key={child.label}
                                              to={child.to}
                                              onClick={() => setOpen(false)}
                                              className={`block rounded-xl px-3 py-2 text-left text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                                                isActiveLink(child.to)
                                                  ? 'bg-gold-500/12 text-gold-700'
                                                  : 'text-marble-700 hover:bg-gold-500/10 hover:text-gold-700'
                                              }`}
                                            >
                                              {child.label}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link
                                    to={collection.to}
                                    onClick={() => setOpen(false)}
                                    className={`block rounded-xl px-3 py-2 text-left text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                                      isActiveLink(collection.to)
                                        ? 'bg-gold-500/12 text-gold-700'
                                        : 'text-marble-700 hover:bg-gold-500/10 hover:text-gold-700'
                                    }`}
                                  >
                                    {collection.label}
                                  </Link>
                                )}
                              </div>
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

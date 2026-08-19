import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoImage from './LogoImage';
import { RamMark } from './Logo';
import { pickImage } from '../lib/assetImages';

const LINKS = [
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
  { label: 'Marble Murti', to: '/collections/marble-murti' },
  { label: 'Bust', to: '/collections/marble-murti/bust' },
  { label: 'Statue', to: '/collections/marble-murti/statue' },
  { label: 'Temple', to: '/collections/temple' },
  { label: 'Handicraft', to: '/collections/handicraft' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61593275424927', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/ramyamarblemurti/?hl=en', Icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative z-[60] isolate overflow-hidden marble-veined border-t border-gold-500/30 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <img src={pickImage(['marble vases', 'marble murtis'])} alt="Marble texture background" className="h-full w-full object-cover opacity-10" loading="lazy" decoding="async" />
      </div>
      {/* golden top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[60vw] -translate-x-1/2 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,144,47,0.4), transparent 70%)' }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-2xl bg-white/10 p-3 shadow-soft">
                <div className="flex h-[100px] w-[100px] items-center justify-center">
                  <LogoImage />
                </div>
              </div>
              <div>
                <div className="font-serif-lux text-lg font-semibold uppercase tracking-[0.2em] text-marble-900">
                  Ramya Marble Murti & Handicraft
                </div>
                <p className="mt-3 max-w-xs font-serif-lux text-lg italic leading-relaxed text-marble-600">
                  "Astha Ko Dijiye Murti Ka Roop"
                </p>
                <p className="mt-4 text-sm leading-relaxed text-marble-500">
                  Handcrafting premium marble idols, temples and handicrafts with devotion since 1989.
                </p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif-lux text-lg font-semibold text-marble-900">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="relative z-[61] pointer-events-auto text-sm text-marble-600 transition-colors hover:text-gold-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif-lux text-lg font-semibold text-marble-900">Collections</h4>
            <ul className="mt-5 space-y-3">
              {COLLECTION_LINKS.map((c) => (
                <li key={c.label}>
                  <Link to={c.to} className="relative z-[61] pointer-events-auto text-sm text-marble-600 transition-colors hover:text-gold-700">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif-lux text-lg font-semibold text-marble-900">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-marble-600">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-600" />
                <a href="tel:+919557463257" className="hover:text-gold-700">+91 95574 63257</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <div>
                  <div className="font-semibold text-marble-800">Ritik Sharma — Sales Head</div>
                  <a href="tel:+917733041922" className="hover:text-gold-700">+91 77330 41922</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-600" />
                <a href="mailto:contact@ramyamarblemurti.in" className="hover:text-gold-700">Ramyamarblehandicraft@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <span>Pani Ki Tanki, Aasha Ke Paas, Rampur (Bansur), Kotputli, Rajasthan, India</span>
              </li>
            </ul>

            {/* social */}
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-[61] pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-marble-300 text-marble-600 transition-all hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-700"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Thank you banner */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-gold-500/30 bg-gradient-to-b from-white/60 to-marble-100/40 px-6 py-10 text-center">
          <RamMark className="h-[100px] w-[100px]" />
          <p className="font-serif-lux text-2xl font-semibold text-marble-900 md:text-3xl">
            Thank You for Choosing Us <span className="gold-text">Since 1989</span>
          </p>
          <p className="max-w-md text-sm text-marble-600">
            Your faith is the stone from which we carve. We are honoured to be part of your devotion.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-marble-200 py-8 md:flex-row">
          <p className="text-xs text-marble-500">
            © {new Date().getFullYear()} Ramya Marble Murti & Handicraft. All rights reserved.
          </p>
          <Link
            to="/"
            className="relative z-[61] pointer-events-auto flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-marble-600 transition-colors hover:text-gold-700"
          >
            Back to Top <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

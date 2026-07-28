import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';

const PHONES = ['+91 9557463257'];
const EMAIL = 'Ramyamarblehandicraft@gmail.com';
const ADDRESS = 'Pani Ki Tanki, Aasha Ke Paas, Rampur (Bansur), Kotputli, Rajasthan, India';
const BUSINESS_NAME = 'Ramya Marble Murti & Handicraft';
const CONTACT_PERSON = 'Praveen Gaur';
const MAP_QUERY = encodeURIComponent(ADDRESS);

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-marble-950 py-24 md:py-32" style={{ background: 'radial-gradient(ellipse at 30% 20%, #2a2218 0%, #14100b 70%, #0a0805 100%)' }}>
      {/* gold glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[50vh] w-[40vw] rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(212,144,47,0.3), transparent 70%)' }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          light
          title={<>Begin Your <span className="gold-text">Devotion</span></>}
          intro="Reach out for custom commissions, catalogue requests or any question. We respond with the care our craft deserves."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact info + map */}
          <div className="space-y-6">
            <Reveal>
              <div className="glass-dark rounded-3xl p-7">
                <h3 className="font-serif-lux text-2xl font-semibold text-marble-100">{BUSINESS_NAME}</h3>
                <p className="mt-2 text-sm text-gold-300">{CONTACT_PERSON}</p>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-marble-950/50">
                      <Phone className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-marble-400">Phone</div>
                      {PHONES.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block font-serif-lux text-lg text-marble-100 transition-colors hover:text-gold-300">{p}</a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-marble-950/50">
                      <Mail className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-marble-400">Email</div>
                      <a href={`mailto:${EMAIL}`} className="font-serif-lux text-lg text-marble-100 transition-colors hover:text-gold-300">{EMAIL}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-marble-950/50">
                      <MapPin className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-marble-400">Address</div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-serif-lux text-lg text-marble-100 transition-colors hover:text-gold-300"
                      >
                        {ADDRESS}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919557463257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Google Map */}
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-gold-500/20 shadow-soft">
                <img src={pickImage(['marble temple', 'our heritage'])} alt="Workshop and showroom setting" className="h-56 w-full object-cover" loading="lazy" />
                <iframe
                  title="Ramya Marble Murti & Handicraft location"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  width="100%"
                  height="260"
                  loading="lazy"
                  style={{ border: 0, filter: 'grayscale(0.3) sepia(0.2)' }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass-dark rounded-3xl p-7 md:p-9">
              <h3 className="font-serif-lux text-2xl font-semibold text-marble-100">Send a Message</h3>
              <p className="mt-2 text-sm text-marble-400">Tell us about the piece you envision.</p>

              <div className="mt-6 space-y-5">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', ph: 'Full name' },
                  { id: 'email', label: 'Email', type: 'email', ph: 'you@email.com' },
                  { id: 'phone', label: 'Phone', type: 'tel', ph: '+91 …' },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs uppercase tracking-[0.2em] text-marble-400">{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) => setForm((s) => ({ ...s, [f.id]: e.target.value }))}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-xl border border-marble-700/40 bg-marble-950/40 px-4 py-3 text-marble-100 placeholder-marble-500 outline-none transition-colors focus:border-gold-500"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-marble-400">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Describe the murti, size, deity and finish you'd like…"
                    className="mt-2 w-full resize-none rounded-xl border border-marble-700/40 bg-marble-950/40 px-4 py-3 text-marble-100 placeholder-marble-500 outline-none transition-colors focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] disabled:opacity-70"
                >
                  {sent ? (<><Check className="h-4 w-4" /> Message Sent</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
                </button>
                {sent && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-gold-300">Thank you — we'll be in touch soon.</motion.p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

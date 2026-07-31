import { Instagram, Linkedin, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PROFILE } from '@/data/content';
import { supabase } from '@/lib/supabase';
import { SectionHeading } from '@/components/ui/Primitives';
import { RevealMotion, MagneticButton, TiltCard } from '@/components/ui/Animations';

type Status = 'idle' | 'loading' | 'success' | 'error';

const CONTACT_LINKS = [
  { label: 'Email', value: PROFILE.email, icon: 'Mail', href: `mailto:${PROFILE.email}` },
  { label: 'Phone', value: PROFILE.phone, icon: 'Phone', href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
  { label: 'LinkedIn', value: 'tubaansari', icon: 'Linkedin', href: PROFILE.linkedin },
  { label: 'Instagram', value: 'tubaansari', icon: 'Instagram', href: PROFILE.instagram },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    icon: 'MessageCircle',
    href: `https://wa.me/${PROFILE.whatsapp}`,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const { error: insertError } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (insertError) throw insertError;

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setError('Something went wrong sending your message. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="great together"
          subtitle="Have a project in mind? Send a message and I'll get back to you within 24 hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: contact info */}
          <RevealMotion className="flex flex-col gap-4">
            {CONTACT_LINKS.map((link, i) => (
              <TiltCard key={link.label} max={6} lift={6} className="rounded-2xl">
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl shadow-depth transition-colors duration-500 group-hover:border-accent-400/30"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <motion.span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-accent-500/20 text-brand-400"
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    {link.icon === 'Mail' && <Mail className="h-5 w-5" />}
                    {link.icon === 'Phone' && <Phone className="h-5 w-5" />}
                    {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                    {link.icon === 'Instagram' && <Instagram className="h-5 w-5" />}
                    {link.icon === 'MessageCircle' && <MessageCircle className="h-5 w-5" />}
                  </motion.span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-slate-500">{link.label}</div>
                    <div className="truncate text-sm font-medium text-white">{link.value}</div>
                  </div>
                </a>
              </TiltCard>
            ))}
          </RevealMotion>

          {/* Right: form */}
          <RevealMotion delay={0.12}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8 shadow-depth"
              initial={{ rotateX: 4 }}
              style={{ transformStyle: 'preserve-3d', transformPerspective: 1000 }}
            >
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent-400/60 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent-400/60 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, goals, and timeline…"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent-400/60 focus:bg-white/10"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary group w-full disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </MagneticButton>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
                  >
                    Thank you! Your message has been sent. I'll get back to you shortly.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
            </motion.form>
          </RevealMotion>
        </div>
      </div>
    </section>
  );
}

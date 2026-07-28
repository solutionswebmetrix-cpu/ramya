import { useState } from 'react';
import { ArrowRight, Gem, Hand, Ruler, Sparkles, Church, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading, Reveal } from '../components/ui/Reveal';
import { pickImage } from '../lib/assetImages';

const FEATURES = [
  { icon: Ruler, title: 'Custom Size', text: 'Create statues in compact devotional sizes or grand life-size statement sculptures.' },
  { icon: Sparkles, title: 'Custom Design', text: 'We transform your concept into a bespoke marble design with intricate detailing.' },
  { icon: Gem, title: 'Premium Marble', text: 'Choose from premium marble options selected for purity, texture and brilliance.' },
  { icon: Hand, title: 'Handcrafted Work', text: 'Each piece is chiseled and finished by experienced artisans by hand.' },
  { icon: Church, title: 'Religious & Decorative Sculptures', text: 'From sacred idols to luxury decor pieces, every sculpture is crafted with care.' },
  { icon: MessageSquare, title: 'Inquiry Support', text: 'Share your idea and we will guide you from concept to completion.' },
];

export default function CustomizationPage() {
  const [form, setForm] = useState({ name: '', email: '', details: '' });

  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Customization"
          title={<>Bespoke Marble <span className="gold-text">Sculptures</span></>}
          intro="From sacred murtis to statement decor, our team creates custom marble pieces shaped to your vision and space."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-marble-200 bg-white/80 shadow-soft">
              <img src={pickImage(['our heritage', 'marble murtis'])} alt="Custom marble craftsmanship" className="h-72 w-full object-cover" loading="lazy" />
              <div className="p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="rounded-2xl border border-marble-200 bg-marble-50/70 p-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 font-serif-lux text-xl font-semibold text-marble-900">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-marble-600">{feature.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-marble-200 bg-white/80 p-8 shadow-soft backdrop-blur-sm">
              <h3 className="font-serif-lux text-3xl font-semibold text-marble-900">Request a Custom Inquiry</h3>
              <p className="mt-3 text-sm leading-relaxed text-marble-600">Tell us about your idea, the deity or decor piece you wish to create, and the size you envision.</p>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-marble-500">Your Name</label>
                  <input value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} className="mt-2 w-full rounded-xl border border-marble-200 bg-marble-50 px-4 py-3 outline-none focus:border-gold-500" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-marble-500">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} className="mt-2 w-full rounded-xl border border-marble-200 bg-marble-50 px-4 py-3 outline-none focus:border-gold-500" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-marble-500">Project Details</label>
                  <textarea rows={5} value={form.details} onChange={(e) => setForm((s) => ({ ...s, details: e.target.value }))} className="mt-2 w-full resize-none rounded-xl border border-marble-200 bg-marble-50 px-4 py-3 outline-none focus:border-gold-500" placeholder="Describe the statue, size, marble finish and purpose..." />
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-marble-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-marble-50 transition-colors hover:bg-marble-800">
                  Send Inquiry <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

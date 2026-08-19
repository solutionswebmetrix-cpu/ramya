import { Award, Globe, Hand, PenTool, ShieldCheck, Gem } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/ui/Reveal';
import { pickImage } from '../lib/assetImages';

const FEATURES = [
  { icon: Gem, title: 'Premium Quality Marble', text: 'We source only the finest marble for strength, sheen and lasting beauty.' },
  { icon: Hand, title: 'Experienced Craftsmen', text: 'Generations of carving tradition inform every detail we shape.' },
  { icon: PenTool, title: 'Custom Designs', text: 'Your inspiration becomes a bespoke masterpiece in stone.' },
  { icon: ShieldCheck, title: 'Affordable Pricing', text: 'Luxury craftsmanship delivered with transparent and competitive pricing.' },
  { icon: Globe, title: 'Secure Packaging', text: 'Every piece is carefully packed to preserve its beauty on every journey.' },
  { icon: Award, title: 'PAN India Delivery', text: 'We deliver across India with dependable service and careful handling.' },
];

export default function WhyUsPage() {
  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Us"
          title={<>The <span className="gold-text">Ramya</span> Difference</>}
          intro="We combine artistry, integrity and experience to create marble pieces worthy of devotion and admiration."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-marble-200 bg-white/80 shadow-soft">
              <img src={pickImage(['our heritage', 'marble murtis'])} alt="Premium marble craftsmanship" className="h-72 w-full object-contain" loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-5 sm:grid-cols-2">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-[1.5rem] border border-marble-200 bg-white/80 p-6 shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-serif-lux text-xl font-semibold text-marble-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-marble-600">{feature.text}</p>
                    <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">0{index + 1}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

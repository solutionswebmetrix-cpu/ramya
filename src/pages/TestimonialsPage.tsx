import { Quote, Star } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/ui/Reveal';

const TESTIMONIALS = [
  { name: 'Rajesh Sharma', place: 'Jaipur, Rajasthan', text: 'The Ram Darbar murti we ordered exceeded every expectation. The detail in the faces, the glow of the marble — it feels divinely alive in our home temple.', rating: 5 },
  { name: 'Anita Patel', place: 'London, UK', text: 'Shipping a marble temple internationally felt daunting, but Ramya Marble Murti crated it perfectly. It arrived flawless. Truly world-class craftsmanship.', rating: 5 },
  { name: 'Vikram Singh', place: 'Delhi', text: 'I commissioned a custom Hanuman Ji in life size. The team understood the devotion behind it and delivered something breathtaking.', rating: 5 },
  { name: 'Meera Iyer', place: 'Bengaluru', text: 'The meenakari work on our decorative plates is museum quality. Guests cannot believe they are handmade.', rating: 5 },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <section className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Voices of <span className="gold-text">Devotion</span></>}
          intro="Families and temples across the world trust Ramya Marble Murti & Handicraft for sacred and luxurious marble pieces."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <div className="h-full rounded-[2rem] border border-marble-200 bg-white/80 p-8 shadow-soft">
                <Quote className="h-8 w-8 text-gold-500/40" />
                <p className="mt-4 font-serif-lux text-lg leading-relaxed text-marble-700">“{testimonial.text}”</p>
                <div className="mt-6 flex items-center justify-between border-t border-marble-200 pt-5">
                  <div>
                    <div className="font-serif-lux text-lg font-semibold text-marble-900">{testimonial.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-marble-500">{testimonial.place}</div>
                  </div>
                  <Stars n={testimonial.rating} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

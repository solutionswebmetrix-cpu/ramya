import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { SectionHeading, Reveal } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';
import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  { name: 'Rajesh Sharma', place: 'Jaipur, Rajasthan', text: 'The Ram Darbar murti we ordered exceeded every expectation. The detail in the faces, the glow of the marble — it feels divinely alive in our home temple.', rating: 5 },
  { name: 'Anita Patel', place: 'London, UK', text: 'Shipping a marble temple internationally felt daunting, but Ramya Marble Murti crated it perfectly. It arrived flawless. Truly world-class craftsmanship.', rating: 5 },
  { name: 'Vikram Singh', place: 'Delhi', text: 'I commissioned a custom Hanuman Ji in life size. The team understood the devotion behind it and delivered something breathtaking. 35 years of mastery shows.', rating: 5 },
  { name: 'Meera Iyer', place: 'Bengaluru', text: 'The meenakari work on our decorative plates is museum quality. Guests cannot believe they are handmade. We will be customers for life.', rating: 5 },
  { name: 'Sanjay Gupta', place: 'Dubai, UAE', text: 'Our onyx chess set is a conversation piece in every gathering. The translucency of the stone under light is simply magical. Premium in every sense.', rating: 5 },
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-marble-50 py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={pickImage(['our heritage', 'marble murtis'])} alt="Marble texture and craftsmanship" className="h-full w-full object-cover opacity-20" loading="lazy" />
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Voices of <span className="gold-text">Devotion</span></>}
          intro="What families and temples across the world say about their Ramya pieces."
        />

        <Reveal>
          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={28}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true, bulletClass: 'lux-bullet', bulletActiveClass: 'lux-bullet-active' }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="!pb-14"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.name} className="!h-auto">
                  <div className="glass card-float flex h-full flex-col rounded-3xl p-8">
                    <Quote className="h-8 w-8 text-gold-500/40" />
                    <p className="mt-4 flex-1 font-serif-lux text-lg italic leading-relaxed text-marble-700">
                      "{t.text}"
                    </p>
                    <div className="mt-6 lux-divider" />
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <div className="font-serif-lux text-lg font-semibold text-marble-900">{t.name}</div>
                        <div className="text-xs uppercase tracking-[0.2em] text-marble-500">{t.place}</div>
                      </div>
                      <Stars n={t.rating} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>
      </div>

      <style>{`
        .lux-bullet { width: 8px; height: 8px; border-radius: 9999px; background: #ddd0bd; opacity: 0.6; transition: all 0.3s; }
        .lux-bullet-active { background: #d4902f; opacity: 1; width: 28px; }
      `}</style>
    </section>
  );
}

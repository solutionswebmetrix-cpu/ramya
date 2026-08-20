import { motion } from 'framer-motion';
import { Hammer, Gem, Sparkles, Award, Crown, Briefcase, Users, ArrowRight, Store } from 'lucide-react';
import { Reveal, SectionHeading } from './ui/Reveal';
import { pickImage } from '../lib/assetImages';

const PILLARS = [
  { icon: Award, title: '37+ Years of Excellence', desc: 'A legacy of devotion forged in Makrana marble since 1989.' },
  { icon: Hammer, title: 'Handcrafted by Artisans', desc: 'Each piece carved by master sculptors across generations.' },
  { icon: Gem, title: 'Premium Marble', desc: 'Only the finest grade marble, chosen for purity and luminosity.' },
  { icon: Sparkles, title: 'Customized Designs', desc: 'Bespoke commissions shaped to your sacred vision.' },
];

const VENTURES = [
  { icon: Store, name: 'Khatu Shyam Murti Bhandar — 1989', desc: 'Founded in 1989 by Naresh Sharma, father of Praveen Gaur. Our foundational venture, rooted in traditional marble murti craftsmanship.' },
  { icon: Store, name: 'Ritik Marble Murti Arts — 2018', desc: 'An evolved chapter of artistry from 2018, refining our sculpting techniques and creative vision.' },
  { icon: Award, name: 'Ramya Marble Murti & Handicraft — 2026', desc: 'The present flagship brand since 2026, carrying forward a legacy of trust and masterful marble creations.' },
];

const TIMELINE = [
  { year: '1989', title: 'The Beginning', desc: 'A small workshop founded on devotion and the chisel.' },
  { year: '2000', title: 'Expanding the Craft', desc: 'Welcomed a second generation of master artisans.' },
  { year: '2010', title: 'Temples & Meenakari', desc: 'Began crafting complete marble temples and meenakari decor.' },
  { year: '2020', title: 'Worldwide Devotion', desc: 'Our murtis reached homes and temples across the world.' },
  { year: 'Today', title: 'A Living Legacy', desc: 'Over 1,000 families trust us with their faith.' },
];

const LEADERSHIP = [
  { icon: Crown, name: 'Himani Sharma', role: 'Owner', image: pickImage('Himani Sharma') },
  { icon: Briefcase, name: 'Praveen Goor', role: 'Director', image: pickImage('Praveen Gaur') },
  { icon: Users, name: 'Ritik Sharma', role: 'Sales Head', image: undefined },
];

export default function About() {
  return (
    <section id="about" className="marble-veined relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — image */}
          <div className="relative">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                  <img
                    src={pickImage('Jugal jodi')}
                    alt="Radha Krishna marble murti, handcrafted with devotion"
                    className="aspect-[4/5] w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marble-900/40 to-transparent" />
                </div>
              </Reveal>
              {/* floating stat card */}
              <Reveal delay={0.3}>
                <div className="glass absolute -bottom-8 -right-4 hidden rounded-2xl p-6 shadow-gold md:block">
                  <div className="font-serif-lux text-5xl font-semibold gold-text">37+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.25em] text-marble-600">Years of Devotion</div>
                </div>
              </Reveal>
              {/* gold corner accent */}
              <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-tl-[2rem] border-l-2 border-t-2 border-gold-500/50" />
            </div>

          {/* Right — story */}
          <div>
            <SectionHeading
              eyebrow="Our Heritage"
              align="left"
              title={
                <>
                  Crafting Faith <br />
                  <span className="gold-text">Since 1989</span>
                </>
              }
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-marble-600 md:text-lg">
                From our early journey with Khatu Shyam Murti Bhandar and Ritik Marble Murti Arts to the establishment of Ramya Marble Murti & Handicraft, our experience has grown through years of dedication to marble craftsmanship, traditional artistry and customer trust.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-marble-600 md:text-lg">
                For over three decades, we have been shaping raw stone into objects of devotion. What began as a humble workshop has grown into one of India's most respected ateliers for marble idols, temples and handicrafts — yet every piece is still finished by hand, the same way it was in 1989.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={0.1 * i}>
                  <div className="card-float group rounded-2xl border border-marble-200 bg-white/60 p-5 backdrop-blur-sm">
                    <p.icon className="h-7 w-7 text-gold-600 transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="mt-4 font-serif-lux text-xl font-semibold text-marble-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-marble-600">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Company Journey / Ventures */}
        <div className="mt-24 md:mt-32">
          <SectionHeading
            eyebrow="Our Evolution"
            title={<>From Heritage to <span className="gold-text">Horizon</span></>}
            intro="Three chapters of dedication, each building on the last, united by a single passion — marble craftsmanship."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {VENTURES.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-marble-200 bg-white/70 p-8 shadow-soft backdrop-blur-sm">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,144,47,0.15), transparent 65%)' }} />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-gradient-to-br from-marble-50 to-marble-100 transition-all duration-500 group-hover:border-gold-400 group-hover:shadow-gold">
                        <v.icon className="h-7 w-7 text-gold-600 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <span className="font-serif-lux text-5xl font-light text-gold-500/20 transition-colors group-hover:text-gold-500/40">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif-lux text-xl font-semibold text-marble-900">{v.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-marble-600">{v.desc}</p>

                    {i < VENTURES.length - 1 && (
                      <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 md:block">
                        <ArrowRight className="h-6 w-6 text-gold-500/50" />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <h3 className="text-center font-serif-lux text-3xl font-semibold text-marble-900 md:text-4xl">
              A Journey Through Time
            </h3>
          </Reveal>

          <div className="relative mt-16">
            {/* center line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent md:block" />

            <div className="space-y-12 md:space-y-20">
              {TIMELINE.map((t, i) => {
                const left = i % 2 === 0;
                return (
                  <div key={t.year} className="relative md:grid md:grid-cols-2 md:gap-12">
                    {/* node */}
                    <div className="absolute left-1/2 top-2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold-500 bg-marble-50 shadow-gold md:block" />

                    <motion.div
                      initial={{ opacity: 0, x: left ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`md:col-span-1 ${left ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}
                    >
                      <div className="font-serif-lux text-4xl font-semibold gold-text md:text-5xl">{t.year}</div>
                      <h4 className="mt-2 font-serif-lux text-2xl font-semibold text-marble-900">{t.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-marble-600">{t.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Leadership / Management */}
        <div className="mt-24 md:mt-32">
          <SectionHeading
            eyebrow="Leadership"
            title={<>The Vision <span className="gold-text">Behind</span></>}
            intro="Guided by experienced hands and a shared devotion to marble artistry, our leadership carries forward the Ramya legacy."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-marble-200 bg-white/70 p-8 shadow-soft backdrop-blur-sm">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,144,47,0.18), transparent 70%)' }} />
                  <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(226,173,79,0.3) 50%, transparent 70%)', backgroundSize: '200% 100%' }} />

                  <div className="relative">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-gold-500/40 bg-gradient-to-br from-marble-50 to-marble-100 transition-all duration-500 group-hover:border-gold-400 group-hover:shadow-gold">
                      {l.image ? (
                        <img
                          src={l.image}
                          alt={l.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <l.icon className="h-12 w-12 text-gold-600 transition-transform duration-500 group-hover:scale-110" />
                      )}
                    </div>

                    <div className="lux-divider mt-8" />

                    <h3 className="mt-7 text-center font-serif-lux text-2xl font-semibold text-marble-900">{l.name}</h3>
                    <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">{l.role}</p>
                  </div>

                  <span className="absolute right-6 top-6 font-serif-lux text-5xl font-light text-gold-500/15 transition-colors group-hover:text-gold-500/35">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

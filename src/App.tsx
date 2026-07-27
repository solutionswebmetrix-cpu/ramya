import { useState } from 'react';
import { useLenis } from './lib/smoothScroll';
import Preloader from './components/Preloader';
import CursorGlow from './components/CursorGlow';
import GoldParticles from './components/GoldParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Collections from './components/Collections';
import ProductShowcase3D from './components/ProductShowcase3D';
import WhyChooseUs from './components/WhyChooseUs';
import Customization from './components/Customization';
import WorkProcess from './components/WorkProcess';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import CounterSection from './components/CounterSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <CursorGlow />
      <GoldParticles density={70} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Collections />
        <ProductShowcase3D />
        <WhyChooseUs />
        <Customization />
        <WorkProcess />
        <Gallery />
        <VideoSection />
        <Testimonials />
        <CounterSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './lib/smoothScroll';
import GoldParticles from './components/GoldParticles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CollectionsPage from './pages/CollectionsPage';
import CollectionCategoryPage from './pages/CollectionCategoryPage';
import GalleryPage from './pages/GalleryPage';
import CustomizationPage from './pages/CustomizationPage';
import WhyUsPage from './pages/WhyUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';

function AppRoutes() {
  const location = useLocation();

  useLenis();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <>
      <GoldParticles density={70} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:category" element={<CollectionCategoryPage />} />
          <Route path="/collections/:category/:subcategory" element={<CollectionCategoryPage />} />
          <Route path="/collections/:category/:subcategory/:productName/:productId" element={<ProductDetailPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/product/:category/:productName" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/customization" element={<CustomizationPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

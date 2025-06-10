import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  console.log("Home page rendered");

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeatureHighlights />
      <ContactSection />
      <Footer />
    </main>
  );
}

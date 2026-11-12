import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import FeaturesSection from "./components/FeaturesSection";
import HowToOrderSection from "./components/HowToOrderSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <div className="min-h-screen" style={{ background: "#FAF7F2" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <FeaturesSection />
      <HowToOrderSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;

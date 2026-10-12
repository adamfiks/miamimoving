import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LocalMovingContentSection from "@/components/LocalMovingContentSection";

import FAQSection from "@/components/FAQSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServiceAreasSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        
        <LocalMovingContentSection />
        <FAQSection />
        <BlogPreviewSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;

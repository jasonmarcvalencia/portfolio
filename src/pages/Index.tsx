import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StrategySection from "@/components/StrategySection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StrategySection />
      <AboutSection />
      <CaseStudiesSection />
      <CertificatesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;

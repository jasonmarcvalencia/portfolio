import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectShowcaseSection from "@/components/ProjectShowcaseSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import SnowEffect from "@/components/SnowEffect";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle anchor links for smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute("href");
        if (id) {
          const el = document.querySelector(id);
          if (el) lenis.scrollTo(el as HTMLElement);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <SnowEffect />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectShowcaseSection />
      <WorkExperienceSection />
      <CertificatesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;

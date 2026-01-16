import { motion } from "framer-motion";
import hugoPortrait from "@/assets/hugo-portrait.jpg";

const navItems = [
  { label: "Why Me", href: "#strategy" },
  { label: "Strategy", href: "#strategy" },
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen section-cream pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-12">
              DRIVE PROFIT.
              <br />
              MITIGATE
              <br />
              RISK.
            </h1>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Free Consultation <span>→</span>
            </a>
          </motion.div>

          {/* Right side - Image and navigation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8 items-start"
          >
          {/* Profile image container */}
          <div className="relative">
            <div className="w-64 h-80 bg-secondary relative overflow-visible">
              <div className="absolute inset-0 bg-secondary" />
              <img
                src={hugoPortrait}
                alt="Hugo Waverly"
                className="relative z-10 w-full h-full object-cover object-top mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-secondary/40 z-20 mix-blend-color" />
            </div>
            {/* Handwritten note */}
            <span className="absolute -bottom-8 right-0 text-handwriting text-xl text-primary rotate-[-5deg] z-30">
                Your budget's
                <br />
                new BFF.
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-3 pt-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Hugo Waverly intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 max-w-md"
        >
          <h2 className="font-heading text-xl font-bold mb-2">HUGO WAVERLY</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I help companies optimize budgets, build forecasts, and make
            data-driven decisions for sustainable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

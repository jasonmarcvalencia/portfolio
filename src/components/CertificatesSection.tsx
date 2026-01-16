import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Member Certificate",
    organization: "Association of Chartered Certified Accountants",
  },
  {
    id: 2,
    title: "Registered Provider",
    organization: "CIMA - Chartered Institute of Management Accountants",
  },
  {
    id: 3,
    title: "Financial Analysis Certificate",
    organization: "CFA Institute",
  },
];

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <section id="certificates" className="py-24 section-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag mb-8 inline-block">Certificates</span>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-8">
              TRUSTED
              <br />
              CREDENTIALS
              <br />
              & ALLIANCES
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-12">
              Global certifications and strategic partnerships that validate our
              expertise and ensure quality service.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-handwriting text-xl text-primary">
                Proof in black
                <br />& white
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right side - Certificates carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex gap-6 overflow-hidden">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  animate={{
                    x: `${(index - currentIndex) * 100}%`,
                    opacity: index >= currentIndex && index < currentIndex + 2 ? 1 : 0.3,
                    scale: index === currentIndex ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.4 }}
                  className="min-w-[280px] bg-white border border-border p-8 shadow-sm"
                >
                  <div className="h-64 flex flex-col justify-between">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {cert.organization}
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-heading font-bold text-lg">
                        {cert.title}
                      </h3>
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-2xl">✓</span>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Verified</span>
                      <span>•</span>
                      <span>Active</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

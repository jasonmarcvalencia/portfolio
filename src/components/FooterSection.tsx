import { motion } from "framer-motion";
import hugoPortrait from "@/assets/hugo-portrait.jpg";

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter (X)", href: "#" },
];

const FooterSection = () => {
  return (
    <footer className="py-16 section-cream">
      <div className="container mx-auto px-6">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 mb-16"
        >
          {/* Name */}
          <div className="lg:col-span-2">
            <span className="font-heading font-bold text-sm">HUGO WAVERLY</span>
          </div>

          {/* Intro text */}
          <div className="lg:col-span-2">
            <p className="text-xs text-muted-foreground leading-relaxed">
              I'm Hugo, your strategic partner in financial growth. Let's
              transform your data into profit.
            </p>
          </div>

          {/* Profile image */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="w-32 h-40 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary" />
                <img
                  src={hugoPortrait}
                  alt="Hugo Waverly"
                  className="relative z-10 w-full h-full object-cover object-top mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-secondary/40 z-20 mix-blend-color" />
              </div>
              <span className="absolute -bottom-2 -left-4 text-handwriting text-lg text-primary rotate-[-8deg]">
                Coffee's on
                <br />
                me—let's
                <br />
                chat.
              </span>
            </div>
          </div>

          {/* Smiley */}
          <div className="lg:col-span-2">
            <span className="text-4xl">☺</span>
          </div>

          {/* Social links */}
          <div className="lg:col-span-3">
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Large contact info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <a
            href="mailto:h.waverly@consulting.co"
            className="heading-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl block hover:opacity-70 transition-opacity"
          >
            H.WAVERLY@CONSULTING.CO
          </a>
          <a
            href="tel:+447911234567"
            className="heading-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl block hover:opacity-70 transition-opacity"
          >
            +44 7911 234567
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Contact", href: "#contact" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen section-burgundy pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Big headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 text-white">
              TURNING IDEAS INTO
              <br />
              FUNCTIONAL WEB
              <br />
              APPLICATIONS
            </h1>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
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
            <div className="w-64 h-80 bg-white/10 relative overflow-visible">
              <img
                src="/speed.jpg"
                alt="Jason Marc Valencia"
                className="relative z-10 w-full h-full object-cover object-top"
              />
              {/* Handwritten note */}
              <span className="absolute -bottom-8 -right-6 text-handwriting text-xl text-white/80 rotate-[-5deg] z-30">
                Let's build
                <br />
                something great.
              </span>
            </div>
              {/* Jason Marc Valencia intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-14 max-w-[16rem]"
              >
                <h2 className="font-heading text-xl font-bold mb-2 text-white">JASON MARC VALENCIA</h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  Frontend developer with hands-on experience in React, Next.js, and
                  Tailwind CSS. Focused on building clean, responsive web applications.
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-3 pt-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
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

      </div>
    </section>
  );
};

export default HeroSection;

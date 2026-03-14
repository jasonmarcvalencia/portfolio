import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 section-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="section-tag mb-6 inline-block">
            Contact
          </span>
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:jasonvalencia18@gmail.com"
              className="inline-flex items-center gap-3 text-sm text-white hover:opacity-70 transition-opacity"
            >
              <span className="w-8 h-[1px] bg-white/30" />
              jasonvalencia18@gmail.com
            </a>
            <a
              href="tel:+639569469527"
              className="inline-flex items-center gap-3 text-sm text-white hover:opacity-70 transition-opacity"
            >
              <span className="w-8 h-[1px] bg-white/30" />
              +63 956 946 9527
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

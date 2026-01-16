import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 section-burgundy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 mb-16"
        >
          <div>
            <span className="section-tag border-primary-foreground text-primary-foreground mb-8 inline-block">
              Contact me
            </span>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              SCHEDULE
              <br />
              A CONSULTATION
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
              I'm here to help you unlock financial clarity and drive growth.
              Reach out today to discuss your challenges and explore tailored
              solutions.
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b border-primary-foreground/30 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
            />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
              className="bg-transparent border-b border-primary-foreground/30 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-primary-foreground/30 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Type message"
              rows={1}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-primary-foreground/30 py-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-primary-foreground text-sm font-medium border-b border-primary-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Schedule a Free Consultation <span>→</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

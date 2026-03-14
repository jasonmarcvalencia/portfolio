import { motion } from "framer-motion";

const skills = [
  "Frontend: HTML/CSS, React, TypeScript, Next.js, Tailwind CSS",
  "Programming Languages: Java, JavaScript",
  "UI/UX: UI/UX Design, Responsive Design",
  "AI-Assisted Development Tools: Lovable, Claude, Codex",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-tag mb-8 inline-block">
            About Me
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white">
            WHO AM I AND HOW CAN I BE OF HELP?
          </h2>
        </motion.div>

        <div className="border-t border-white/10 pt-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/60 text-sm leading-relaxed"
            >
              A frontend developer with internship experience at Globe International
              and Hytec Power. I build responsive web interfaces using React, Next.js,
              and Tailwind CSS, with a strong interest in UI/UX design.
            </motion.p>

            {/* Right - Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading font-bold text-white text-lg mb-4">
                KEY SKILLS
              </h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import hugoPortrait from "@/assets/hugo-portrait.jpg";

const skills = [
  "Financial modeling",
  "Budgeting & variance analysis",
  "BI dashboards (Power BI, Tableau)",
  "Reporting automation (Python, SQL)",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-burgundy">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="section-tag border-primary-foreground text-primary-foreground mb-8 inline-block">
              About Me
            </span>
            <div className="w-full max-w-sm h-96 bg-accent relative overflow-hidden">
              <div className="absolute inset-0 bg-accent" />
              <img
                src={hugoPortrait}
                alt="Hugo Waverly"
                className="relative z-10 w-full h-full object-cover object-top mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-accent/30 z-20 mix-blend-color" />
            </div>
            {/* Contact info */}
            <div className="mt-8 space-y-2 text-sm">
              <div className="flex gap-12">
                <span className="text-primary-foreground/60 w-16">Phone:</span>
                <a href="tel:+447911234567" className="text-primary-foreground hover:opacity-70">
                  +44 7911 234567
                </a>
              </div>
              <div className="flex gap-12">
                <span className="text-primary-foreground/60 w-16">Email:</span>
                <a href="mailto:h.waverly@consulting.co" className="text-primary-foreground hover:opacity-70">
                  h.waverly@consulting.co
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-8">
              WHO AM I AND
              <br />
              HOW CAN I BE
              <br />
              OF HELP?
            </h2>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-12 max-w-md">
              I'm Hugo Waverly, financial analyst in retail & FMCG, boosting
              profits and optimizing capital for 30+ companies.
            </p>

            <div>
              <h3 className="font-heading font-bold text-primary-foreground text-lg mb-4">
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
                    className="flex items-center gap-3 text-sm text-primary-foreground/90"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const internExperience = [
  {
    role: "Frontend Developer Intern",
    company: "GLOBE INTERNATIONAL DISTRIBUTOR CENTER INC.",
    period: "September 2024 - December 2024",
    details: {
      responsibilities:
        "Developed and maintained responsive web interfaces, collaborated with the development team to implement UI components, and optimized frontend performance.",
      technologies:
        "React, JavaScript, Tailwind CSS, Node.js, Git.",
      achievements:
        "Improved page load times by 30%, built reusable component library used across multiple projects.",
    },
  },
  {
    role: "Web Designer Intern",
    company: "HYTEC POWER INC.",
    period: "February 2025 - April 2025",
    details: {
      responsibilities:
        "Designed and prototyped web layouts, translated UI/UX wireframes into functional pages, and ensured consistent branding across the company website.",
      technologies:
        "Next.js, React, Tailwind CSS, JavaScript, Figma.",
      achievements:
        "Redesigned the company website, enhancing user engagement and visual consistency.",
    },
  },
];

const WorkExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="work-experience" className="py-24 section-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag mb-8 inline-block">
            Intern Experience
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white">
            MY JOURNEY
          </h2>
        </motion.div>

        <div className="space-y-0">
          {internExperience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-white/10"
            >
              <div
                className="grid grid-cols-12 gap-8 py-6 cursor-pointer group"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="col-span-3">
                  <p className="text-sm text-white/50">
                    {job.role}
                  </p>
                  <p className="text-xs text-white/30 mt-1">
                    {job.period}
                  </p>
                </div>
                <div className="col-span-8">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-white/60 transition-colors">
                    {job.company}
                  </h3>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-white/40 transition-colors ${
                      expandedIndex === index ? "bg-white" : ""
                    }`}
                  />
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && job.details && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-8 pb-8">
                      <div className="col-span-3" />
                      <div className="col-span-9 grid grid-cols-3 gap-8">
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-2 text-white">
                            Responsibilities
                          </h4>
                          <p className="text-xs text-white/50 leading-relaxed">
                            {job.details.responsibilities}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-2 text-white">
                            Technologies
                          </h4>
                          <p className="text-xs text-white/50 leading-relaxed">
                            {job.details.technologies}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-2 text-white">
                            Achievements
                          </h4>
                          <p className="text-xs text-white/50 leading-relaxed">
                            {job.details.achievements}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;

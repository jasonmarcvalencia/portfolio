import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    industry: "Manufacturing",
    company: "GREENFIELD MANUFACTURING",
    details: null,
  },
  {
    industry: "IT consulting",
    company: "FUTURESCAPE GROUP",
    details: null,
  },
  {
    industry: "E-commerce",
    projectsCompleted: "32 Projects Completed",
    company: "TECHNOVA SOLUTIONS",
    details: {
      challenge:
        "Client lacked clarity on product profitability, leading to excess illiquid inventory.",
      solution:
        "Conducted ABC analysis, set up stock controls, and optimized pricing strategies.",
      result:
        "In 3 months, we increased profitability by 18% and reduced illiquid inventory by 30%.",
    },
  },
  {
    industry: "Renewable energy",
    company: "SUNWAVE SOLAR",
    details: null,
  },
];

const CaseStudiesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(2);

  return (
    <section id="case-studies" className="py-24 section-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag mb-8 inline-block">Case Studies</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl">
            SUCCESS STORIES
          </h2>
        </motion.div>

        <div className="space-y-0">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-border"
            >
              <div
                className="grid grid-cols-12 gap-8 py-6 cursor-pointer group"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="col-span-3">
                  <p className="text-sm text-muted-foreground">
                    {study.industry}
                  </p>
                  {study.projectsCompleted && (
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      ({study.projectsCompleted})
                    </p>
                  )}
                </div>
                <div className="col-span-8">
                  <h3 className="font-heading font-bold text-lg group-hover:opacity-70 transition-opacity">
                    {study.company}
                  </h3>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-foreground transition-colors ${
                      expandedIndex === index ? "bg-foreground" : ""
                    }`}
                  />
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && study.details && (
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
                          <h4 className="font-heading font-bold text-sm mb-2">
                            Challenge
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {study.details.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-2">
                            Solution
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {study.details.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm mb-2">
                            Result
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {study.details.result}
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

export default CaseStudiesSection;

import { motion } from "framer-motion";

const strategies = [
  {
    number: "01",
    title: "ASSESSMENT & INSIGHTS",
    description:
      "Conduct a comprehensive review of your financial processes to identify core issues, pinpoint inefficiencies, and uncover hidden growth opportunities.",
  },
  {
    number: "02",
    title: "DATA MODELING & ANALYSIS",
    description:
      "Develop tailored financial models and perform in-depth trend analyses, leveraging historical and real-time data to guide strategic decisions.",
  },
  {
    number: "03",
    title: "OBJECTIVES & ACTIONS",
    description:
      "Craft action plans and roadmaps focused on high-impact initiatives, allocate resources for maximum ROI, and manage risks proactively.",
  },
  {
    number: "04",
    title: "IMPLEMENTATION & TRAINING",
    description:
      "Execute chosen solutions seamlessly, integrate tools into your workflow, and empower your team through hands-on training and documentation.",
  },
  {
    number: "05",
    title: "PERFORMANCE & OPTIMIZATION",
    description:
      "Continuously track key performance indicators, evaluate outcomes, and refine strategies to ensure sustained improvement and agility.",
  },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="py-24 section-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-8 mb-16"
        >
          <span className="section-tag">Strategy</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl max-w-xl">
            HOW I SOLVE YOUR CHALLENGES
          </h2>
        </motion.div>

        <div className="space-y-0">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-12 gap-8 py-8 border-t border-border"
            >
              <div className="col-span-1 text-sm text-muted-foreground">
                {strategy.number}
              </div>
              <div className="col-span-4">
                <h3 className="font-heading font-bold text-lg">
                  {strategy.title}
                </h3>
              </div>
              <div className="col-span-7">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {strategy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;

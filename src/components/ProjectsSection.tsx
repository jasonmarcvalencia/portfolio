import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "COMING SOON",
    description:
      "Project details will be added here. Stay tuned.",
  },
  {
    number: "02",
    title: "COMING SOON",
    description:
      "Project details will be added here. Stay tuned.",
  },
  {
    number: "03",
    title: "COMING SOON",
    description:
      "Project details will be added here. Stay tuned.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 section-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-8 mb-16"
        >
          <span className="section-tag">Projects</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl max-w-xl">
            WHAT I'VE BUILT
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-12 gap-8 py-8 border-t border-border"
            >
              <div className="col-span-1 text-sm text-muted-foreground">
                {project.number}
              </div>
              <div className="col-span-4">
                <h3 className="font-heading font-bold text-lg">
                  {project.title}
                </h3>
              </div>
              <div className="col-span-7">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

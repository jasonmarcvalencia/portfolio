import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Fremi",
    description: "A business website for a Norwegian machine entrepreneur company featuring services, about, and contact sections.",
    image: "/fremi.png",
    category: "Business Website",
    url: "https://fremi-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Pro Gamer Gear",
    description: "An e-commerce platform for high-performance gaming peripherals — mice, keyboards, and accessories.",
    image: "/pro-gamer-gear.png",
    category: "E-Commerce",
    url: "https://pro-gamer-gear.vercel.app/",
  },
  {
    id: 3,
    title: "Azure Paradise",
    description: "A luxury resort booking site for private villas in the Maldives with elegant UI and smooth animations.",
    image: "/azure-paradise.png",
    category: "Hotel & Resort",
    url: "https://azure-paradise.vercel.app/",
  },
  {
    id: 4,
    title: "Grand Line DB",
    description: "A One Piece encyclopedia featuring characters, devil fruits, and story arcs with search and dark mode.",
    image: "/one-piece.png",
    category: "Encyclopedia / Database",
    url: "https://one-piece-sooty.vercel.app/",
  },
];

const ProjectShowcaseSection = () => {
  return (
    <section id="projects" className="py-24 section-burgundy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-8 mb-16"
        >
          <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-sm font-medium text-white/80">
            My Work
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl max-w-xl text-white">
            PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 cursor-pointer overflow-hidden block rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-xs text-white/70 uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white text-center px-4">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 text-center px-6 mt-2 max-w-xs">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectShowcaseSection;

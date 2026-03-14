import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Best Research Paper (QCU) — Mobile Category",
    image: "/certification.jpg",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 section-burgundy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 border border-white/30 rounded-full text-sm font-medium text-white/80 mb-8">
            Certificates
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white">
            ACHIEVEMENTS
          </h2>
        </motion.div>

        <div className="space-y-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-white/15 overflow-hidden"
            >
              <div className="aspect-video relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-white">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

interface Certification {
  title: string;
  issuer: string;
  imageSrc: string;
  imageAlt?: string;
}

export const Certifications = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const certifications: Certification[] = [
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      imageSrc: `${baseUrl}certifications/programming-in-java-nptel.jpg`,
      imageAlt: "NPTEL certificate: Programming in Java",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Simplilearn SkillUp",
      imageSrc: `${baseUrl}certifications/full-stack-web-development-simplilearn.jpg`,
      imageAlt: "Simplilearn SkillUp certificate: Full Stack Web Development",
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "IBM",
      imageSrc: `${baseUrl}certifications/intro-web-dev-ibm.jpg`,
      imageAlt: "IBM certificate: Introduction to Web Development with HTML, CSS, JavaScript",
    },
    {
      title: "AI Workflow: Business Priorities and Data Ingestion",
      issuer: "IBM",
      imageSrc: `${baseUrl}certifications/ai-workflow-ibm.jpg`,
      imageAlt: "IBM certificate: AI Workflow: Business Priorities and Data Ingestion",
    },
    {
      title: "AI For Everyone",
      issuer: "Certificate",
      imageSrc: `${baseUrl}certifications/AI For Everyone.jpg`,
      imageAlt: "Certificate: AI For Everyone",
    },
    {
      title: "CSS Basic",
      issuer: "Certificate",
      imageSrc: `${baseUrl}certifications/CSS Basic.jpg`,
      imageAlt: "Certificate: CSS Basic",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Certificate",
      imageSrc: `${baseUrl}certifications/Data Analytics Job Simulation.jpg`,
      imageAlt: "Certificate: Data Analytics Job Simulation",
    },
    {
      title: "Java Basic",
      issuer: "Certificate",
      imageSrc: `${baseUrl}certifications/Java Basic.jpg`,
      imageAlt: "Certificate: Java Basic",
    },
    {
      title: "Python Basic",
      issuer: "Certificate",
      imageSrc: `${baseUrl}certifications/Python Basic.jpg`,
      imageAlt: "Certificate: Python Basic",
    },
    {
      title: "Python Data Representations",
      issuer: "Certificate",
      imageSrc: `${baseUrl}certifications/Python Data Representations.jpg`,
      imageAlt: "Certificate: Python Data Representations",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            (() => {
              const imageUrl = encodeURI(cert.imageSrc);
              return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full text-center">
                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  aria-label={`Open certificate image for ${cert.title}`}
                >
                  <img
                    src={imageUrl}
                    alt={cert.imageAlt ?? cert.title}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                </a>

                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                    <Award size={32} />
                  </div>
                </div>

                <h3 className="font-semibold mb-2 text-gray-200 min-h-[3rem] flex items-center justify-center">
                  {cert.title}
                </h3>

                <p className="text-sm text-blue-400 font-medium mb-3">
                  {cert.issuer}
                </p>

                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              </GlassCard>
            </motion.div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
};

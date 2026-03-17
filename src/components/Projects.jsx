import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export const Projects = () => {
  const projects = [
    {
      title: "StaffSphere – Employee Leave Management System",
      description:
        "Full-stack employee leave and attendance management system with secure role-based authentication and automated leave approval workflow.",
      techStack: [
        "React",
        "Java",
        "Spring Boot",
        "Firebase Auth",
        "MySQL",
        "Tailwind CSS",
      ],
    },
    {
      title: "Banking System",
      description:
        "GUI-based banking system for managing accounts, transactions, and financial records with validation and search functionality.",
      techStack: ["Java Swing", "SQL"],
    },
    {
      title: "Tunexia – Music Streaming App",
      description:
        "Responsive music streaming application with play/pause, shuffle, repeat, and authentication features.",
      techStack: ["React", "JavaScript", "Firebase", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="Building innovative solutions"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


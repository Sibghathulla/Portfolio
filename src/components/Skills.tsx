import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

interface Skill {
  name: string;
  category: string;
}

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Java Swing"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "Firebase"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "XAMPP"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <GlassCard>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

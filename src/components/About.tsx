import { motion } from "framer-motion";
import { Code2, Sparkles, TrendingUp, Users } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "AI & ML Specialization",
      description:
        "Deep focus on artificial intelligence and machine learning technologies",
    },
    {
      icon: Sparkles,
      title: "Strong Programming Foundation",
      description:
        "Proficient in Java, Python, and JavaScript with modern frameworks",
    },
    {
      icon: TrendingUp,
      title: "Full Stack Development",
      description:
        "Building end-to-end web applications with React and backend technologies",
    },
    {
      icon: Users,
      title: "Continuous Learning",
      description:
        "Committed to staying current with emerging technologies and best practices",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false} className="h-full">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Passionate Software Engineer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a final-year B.Tech student specializing in Artificial
                Intelligence and Machine Learning, I bring a unique blend of
                theoretical knowledge and practical experience to software
                development.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in technology has been driven by a passion for
                building scalable applications that solve real-world problems.
                With strong expertise in Java, Python, and JavaScript, I focus
                on creating efficient, maintainable, and user-friendly
                solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm particularly interested in full-stack development, where I
                can leverage both frontend and backend technologies to create
                comprehensive applications. My commitment to continuous learning
                keeps me at the forefront of emerging technologies and industry
                best practices.
              </p>
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <highlight.icon className="text-blue-400 mb-3" size={32} />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-400">
                    {highlight.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

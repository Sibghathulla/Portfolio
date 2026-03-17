import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Machine Learning",
      institution: "Malla Reddy University",
      location: "Hyderabad",
      duration: "2022 – 2026",
      grade: "CGPA: 8.34",
    },
    {
      degree: "Senior Secondary (XII)",
      field: "Science",
      institution: "MS Junior College",
      location: "Hyderabad",
      duration: "2020 – 2022",
      grade: "Percentage: 93.1%",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Education" subtitle="Academic journey" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium">{edu.field}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <GraduationCap size={16} className="text-gray-500" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} className="text-gray-500" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} className="text-gray-500" />
                    <span>{edu.duration}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {edu.grade}
                    </span>
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


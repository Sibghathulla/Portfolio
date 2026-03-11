import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

interface Achievement {
  title: string;
  event: string;
  type: "prize" | "participation";
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "2nd Prize",
      event: "Summit Chapter 2025",
      type: "prize",
    },
    {
      title: "Participant",
      event: "Sparks Intelligentia 2024 Technical Fest",
      type: "participation",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Achievements"
          subtitle="Recognition and accomplishments"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      achievement.type === "prize"
                        ? "bg-gradient-to-br from-yellow-500 to-orange-500"
                        : "bg-gradient-to-br from-blue-500 to-purple-500"
                    }`}
                  >
                    {achievement.type === "prize" ? (
                      <Trophy size={28} />
                    ) : (
                      <Medal size={28} />
                    )}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      {achievement.event}
                    </p>
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

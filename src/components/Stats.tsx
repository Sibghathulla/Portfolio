import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

const StatCard = ({
  value,
  label,
  suffix = "",
  decimals = 0,
}: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div
            ref={ref}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
          >
            0{suffix}
          </div>
          <div className="text-gray-400 font-medium">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard value={3} label="Projects Built" />
          <StatCard value={3} label="Programming Languages" />
          <StatCard value={10} label="Technologies Learned" suffix="+" />
          <StatCard value={8.34} label="CGPA" decimals={2} />
        </div>
      </div>
    </section>
  );
};

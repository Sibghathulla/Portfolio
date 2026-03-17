import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-2">© 2026 Mirza Sibghathulla Baig</p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Built with React and modern web technologies
            <Heart size={16} className="text-red-500 inline" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};


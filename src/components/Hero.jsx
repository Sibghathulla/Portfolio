import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-semibold mb-4"
            >
              Hi, I'm Mirza Sibghathulla Baig
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Building{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Scalable Software
              </span>{" "}
              & Intelligent Applications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-4"
            >
              Aspiring Software Engineer | AI & ML Student | Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mb-8 leading-relaxed"
            >
              Final-year B.Tech student specializing in Artificial Intelligence
              and Machine Learning at Malla Reddy University with strong
              experience in Java, Python, JavaScript, and React. Passionate
              about building scalable software, solving complex problems, and
              creating modern web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                View Projects
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>

              <a
                href={`${baseUrl}resume.pdf`}
                download
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full">
                <div className="bg-[#0b0b0f] p-2 rounded-full">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <img
                      src={`${baseUrl}profile.jpg`}
                      alt="Portrait of Mirza Sibghathulla Baig"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


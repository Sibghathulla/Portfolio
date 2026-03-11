import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Sib262004@gmail.com",
      link: "mailto:Sib262004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8897891590",
      link: "tel:+918897891590",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mirza-sibghathulla-baig/",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's connect and collaborate"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                      <info.icon size={24} />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-300">
                    {info.label}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.value}</p>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard hover={false}>
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connect with me
              </h3>

              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

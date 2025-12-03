import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Palette,
  Server,
  BookOpen,
  FileText,
  Sparkles,
  Check,
} from "lucide-react";

const services = [
  {
    category: "Jasa Pembuatan Website",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "Laravel Framework",
        description: "Website modern dengan Laravel & MySQL",
        icon: Server,
      },
      {
        name: "PHP Native",
        description: "Website custom dengan PHP murni",
        icon: FileCode,
      },
      {
        name: "React.js / Next.js",
        description: "Web app interaktif & responsive",
        icon: Palette,
      },
      {
        name: "JavaScript / Node.js",
        description: "Fullstack web development",
        icon: Code2,
      },
    ],
  },
  {
    category: "Jasa Penulisan Akademik",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Proposal Penelitian",
        description: "Penyusunan proposal yang berkualitas",
        icon: FileText,
      },
      {
        name: "Skripsi / Thesis",
        description: "Bantuan penulisan & konsultasi skripsi",
        icon: BookOpen,
      },
      {
        name: "Artikel Ilmiah",
        description: "Penulisan artikel jurnal & paper",
        icon: Sparkles,
      },
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Layanan Saya
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Menyediakan berbagai layanan profesional untuk kebutuhan web
            development dan penulisan akademik Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="p-2 bg-white/10 rounded-lg mt-1">
                      <service.icon size={20} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                    <Check
                      size={20}
                      className="text-green-500 mt-1 flex-shrink-0"
                    />
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className="block w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <Sparkles size={20} className="text-yellow-400" />
            <span className="text-gray-300">
              Harga bersaing & hasil berkualitas professional!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

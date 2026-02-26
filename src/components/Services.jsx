import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Palette,
  Server,
  BookOpen,
  FileText,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";

const services = [
  {
    category: "Jasa Pembuatan Website",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    emoji: "💻",
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
    emoji: "📝",
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
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Layanan <span className="text-gradient-purple">Saya</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Menyediakan berbagai layanan profesional untuk kebutuhan web
            development dan penulisan akademik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`}
              />

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 relative">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <category.icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {category.category}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    {category.services.length} layanan tersedia
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-3 relative">
                {category.services.map((service, idx) => {
                  const serviceKey = `${index}-${idx}`;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default ${
                        hoveredService === serviceKey
                          ? "bg-white/[0.08] translate-x-2"
                          : "bg-white/[0.02] hover:bg-white/[0.05]"
                      }`}
                      onMouseEnter={() => setHoveredService(serviceKey)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                          hoveredService === serviceKey
                            ? `bg-gradient-to-br ${category.color} shadow-lg`
                            : "bg-white/5"
                        }`}
                      >
                        <service.icon
                          size={18}
                          className={`transition-colors duration-300 ${
                            hoveredService === serviceKey
                              ? "text-white"
                              : "text-purple-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm">
                          {service.name}
                        </h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          {service.description}
                        </p>
                      </div>
                      <ArrowRight
                        size={14}
                        className={`text-gray-600 transition-all duration-300 flex-shrink-0 ${
                          hoveredService === serviceKey
                            ? "translate-x-1 text-white opacity-100"
                            : "opacity-0"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="mt-8 relative">
                <a
                  href="#contact"
                  className={`group/btn block w-full py-3.5 px-6 bg-gradient-to-r ${category.color} text-white font-medium rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2`}
                >
                  <Zap size={16} />
                  Konsultasi Gratis
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-2xl">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="text-yellow-400 text-lg">⭐</span>
            </div>
            <span className="text-gray-300 text-sm font-medium">
              Harga bersaing & hasil berkualitas!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

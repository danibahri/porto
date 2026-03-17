import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Calendar, MapPin, ChevronDown, Briefcase } from "lucide-react";
import { SplitText, FadeUp } from "./TextReveal";

const experiences = [
  // frealence sampai sekarang
  {
    year: "Mar 2023 - Sekarang",
    title: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    type: "Freelance",
    color: "from-emerald-500 to-teal-500",
    points: [
      "Menyediakan jasa pembuatan website untuk berbagai kebutuhan, mulai dari portofolio pribadi hingga website bisnis.",
      "Menggunakan teknologi seperti Laravel, React.js, dan Node.js untuk membangun website yang modern, responsif, dan mudah digunakan.",
      "Bekerja sama dengan klien untuk memahami kebutuhan mereka dan memberikan solusi yang sesuai dengan anggaran dan timeline yang disepakati.",
    ],
  },
  {
    year: "Sep 2025 - Des 2025",
    title: "Magang IT App Developer (WFH)",
    company: "DBKlik",
    location: "Remote",
    type: "Internship",
    color: "from-blue-500 to-cyan-500",
    points: [
      "Membantu pengembangan website e-commerce dan admin.",
      "Membuat fitur membership, gebyar, Chatroom, dan optimasi halaman.",
    ],
  },
  {
    year: "Sep 2025 - Des 2025",
    title: "Magang",
    company: "PT HM Sampoerna - Vendor ISS",
    location: "On-site",
    type: "Internship",
    color: "from-purple-500 to-pink-500",
    points: [
      "Membuat sistem internal vendor ISS dengan menggunakan Laravel dan Tailwind.",
      "Membangun fitur maintenance dengan sistem QR untuk setiap unit barang.",
      "Monitoring unit barang secara realtime.",
    ],
  },
  {
    year: "Jan 2024 - Feb 2024",
    title: "Kerja Praktek",
    company: "Dinas Komunikasi dan Informatika",
    location: "Sumenep",
    type: "Practice",
    color: "from-emerald-500 to-teal-500",
    points: [
      "Mengembangkan website untuk open rekrutmen Komisi Informasi menggunakan Laravel, PHP, dan MySQL.",
      "Membangun fitur pendaftaran online, pengelolaan data pelamar, dan sistem notifikasi otomatis.",
      "Mengembangkan Website untuk PPID Sumenep.",
    ],
  },
  {
    year: "Apr 2021 - Jun 2021",
    title: "PKL Administrasi Jaringan",
    company: "Dinas Komunikasi dan Informatika",
    location: "Sumenep",
    type: "Practice",
    color: "from-orange-500 to-red-500",
    points: [
      "Membantu dalam proses pengalokasian kabel dan pengaturan jaringan di kantor dinas dan rumah sakit.",
      "Belajar menyambungkan kabel fiber optik menggunakan alat splicer fiber optik.",
    ],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 text-white px-4 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Career Path
            </span>
          </FadeUp>
          <SplitText
            className="text-4xl md:text-6xl font-black tracking-tight font-display text-white"
            delay={0.1}
            duration={0.03}
            as="h2"
          >
            Pengalaman Kerja
          </SplitText>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Animated Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/5">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500/0"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline Dot with pulse */}
                <motion.div
                  className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ring-4 ring-dark z-10`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                />

                {/* Card */}
                <div
                  className={`glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:bg-white/[0.08] ${
                    expandedIndex === index ? "ring-1 ring-purple-500/30" : ""
                  }`}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white font-display">
                          {exp.title}
                        </h3>
                        <h4 className="text-purple-400 font-medium">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}
                        >
                          {exp.type}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedIndex === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={18} className="text-gray-400" />
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 pt-4 border-t border-white/10 space-y-3">
                            {exp.points.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 text-gray-300 text-sm"
                              >
                                <span
                                  className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}
                                />
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

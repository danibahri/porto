import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - Sekarang",
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    description:
      "Memimpin pengembangan aplikasi web skala besar menggunakan React dan Next.js. Mengimplementasikan sistem desain modern dan meningkatkan performa aplikasi hingga 40%.",
  },
  {
    year: "2021 - 2023",
    title: "Frontend Developer",
    company: "Creative Solutions Studio",
    description:
      "Berkolaborasi dengan tim desain untuk menciptakan antarmuka pengguna yang interaktif. Mengembangkan fitur-fitur utama untuk klien e-commerce internasional.",
  },
  {
    year: "2019 - 2021",
    title: "Junior Web Developer",
    company: "StartUp Alpha",
    description:
      "Memulai karir dengan membangun landing page responsif dan memelihara kode legacy. Belajar banyak tentang best practices dan kerja tim dalam lingkungan agile.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Pengalaman Profesional
        </motion.h2>

        <div className="relative border-l border-gray-800 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-purple-400 font-mono mt-1 sm:mt-0">
                  {exp.year}
                </span>
              </div>

              <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
              <p className="text-gray-500 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

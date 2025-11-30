import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "September 2025 - Desember 2025",
    title: "Magang IT App Developer (WFH)",
    company: "DBKlik",
    points: [
      "Membantu pengembangan website e-commerce dan admin.",
      "Membuat fitur membership, gebyar, Chatroom, dan optimasi halaman.",
    ],
  },
  {
    year: "September 2025 - Desember 2025",
    title: "Magang",
    company: "PT HM Sampoerna - Vendor ISS",
    points: [
      "Membuat sistem internal vendor ISS dengan menggunakan Laravel dan Tailwind.",
      "Membangun fitur maintenance dengan sistem QR untuk setiap unit barang.",
      "Monitoring unit barang secara realtime.",
    ],
  },
  {
    year: "Januari 2024 - Februari 2024",
    title: "Kerja Praktek",
    company: "Dinas Komunikasi dan Informatika",
    points: [
      "Mengembangkan website untuk open rekrutmen Komisi Informasi menggunakan Laravel, PHP, dan MySQL.",
      "Membangun fitur pendaftaran online, pengelolaan data pelamar, dan sistem notifikasi otomatis.",
      "Mengembangkan Website untuk PPID Sumenep.",
    ],
  },
  {
    year: "April 2021 - Juni 2021",
    title: "PKL Administrasi Jaringan",
    company: "Dinas Komunikasi dan Informatika",
    points: [
      "Membantu dalam proses pengalokasian kabel dan pengaturan jaringan di kantor dinas dan rumah sakit.",
      "Belajar menyambungkan kabel fiber optik menggunakan alat splicer fiber optik.",
    ],
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
          Pengalaman
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
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-500 leading-relaxed max-w-2xl">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

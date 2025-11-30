import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "18+" },
    { label: "Companies", value: "3" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Tentang Saya
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Saya adalah Junior Web Developer dan mahasiswa Teknik Informatika
              di Universitas Trunojoyo Madura dengan ambisi kuat untuk menjadi
              Full Stack Developer.
            </p>
            <p>
              Saya senang membangun aplikasi web dan terus mempelajari teknologi
              baru untuk memperluas keahlian saya. Tujuan saya adalah menguasai
              pengembangan frontend dan backend untuk menciptakan solusi web
              yang lengkap dan skalabel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${
                  index === 2 ? "col-span-2" : ""
                } p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors text-center`}
              >
                <h3 className="text-3xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Building,
  Download,
  MapPin,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      label: "Years Experience",
      value: "2+",
      icon: Briefcase,
      color: "from-purple-500 to-purple-700",
    },
    {
      label: "Projects Completed",
      value: "18+",
      icon: FolderGit2,
      color: "from-pink-500 to-pink-700",
    },
    {
      label: "Companies",
      value: "3",
      icon: Building,
      color: "from-blue-500 to-blue-700",
    },
  ];

  const details = [
    { icon: MapPin, text: "Sumenep, Madura, Indonesia" },
    {
      icon: GraduationCap,
      text: "Teknik Informatika - Universitas Trunojoyo Madura",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Tentang <span className="text-gradient-purple">Saya</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Content - Takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Main Card */}
            <div className="glass rounded-3xl p-8 space-y-6">
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p className="text-lg text-white font-medium">
                  Halo! Saya adalah Web Developer yang passionate terhadap
                  teknologi web modern.
                </p>
                <p>
                  Saya adalah mahasiswa Teknik Informatika di{" "}
                  <span className="text-purple-400 font-medium">
                    Universitas Trunojoyo Madura
                  </span>{" "}
                  dengan ambisi kuat untuk menjadi Full Stack Developer. Saya
                  percaya bahwa kode yang baik bukan hanya tentang
                  fungsionalitas, tetapi juga tentang pengalaman pengguna yang
                  luar biasa.
                </p>
                <p>
                  Saya senang membangun aplikasi web dan terus mempelajari
                  teknologi baru untuk memperluas keahlian saya. Tujuan saya
                  adalah menguasai pengembangan frontend dan backend untuk
                  menciptakan solusi web yang lengkap, skalabel, dan berdampak.
                </p>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                {details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 rounded-xl px-3 py-2"
                  >
                    <detail.icon
                      size={14}
                      className="text-purple-400 flex-shrink-0"
                    />
                    {detail.text}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
                >
                  Let's Talk
                </a>
                {/* <a
                  href="/cv.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-2xl font-medium hover:bg-white/10 transition-all duration-300"
                >
                  <Download size={16} />
                  Resume
                </a> */}
              </div>
            </div>
          </motion.div>

          {/* Right Stats - Takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group glass rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-gradient-purple transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Info Card */}
            <div className="glass rounded-2xl p-6 space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Docker", "AWS"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-lg border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

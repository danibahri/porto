import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import { motion } from "framer-motion";

const TechCloud = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    const getIcon = (slug) =>
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}" width="${isMobile ? 35 : 50}" height="${isMobile ? 35 : 50}" alt="icon" style="pointer-events: none;" />`;

    const texts = [
      getIcon("react/react-original.svg"),
      getIcon("javascript/javascript-original.svg"),
      getIcon("css3/css3-original.svg"),
      getIcon("html5/html5-original.svg"),
      getIcon("php/php-original.svg"),
      getIcon("laravel/laravel-original.svg"),
      getIcon("nodejs/nodejs-original.svg"),
      getIcon("tailwindcss/tailwindcss-original.svg"),
      getIcon("git/git-original.svg"),
      getIcon("github/github-original.svg"),
      getIcon("vitejs/vitejs-original.svg"),
      getIcon("python/python-original.svg"),
      getIcon("mysql/mysql-original.svg"),
      getIcon("bootstrap/bootstrap-original.svg"),
      getIcon("livewire/livewire-original.svg"),
    ];

    const options = {
      radius: isMobile ? 150 : 300,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
      useHTML: true,
    };

    if (container) {
      container.innerHTML = "";
      TagCloud(container, texts, options);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section className="py-24 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
          Technologies
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Tech <span className="text-gradient-purple">Stack</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-purple-400 font-bold text-xl md:text-2xl cursor-pointer hover:text-purple-300 transition-colors relative z-10"
      >
        <span ref={containerRef} className="block" />
      </motion.div>
    </section>
  );
};

export default TechCloud;

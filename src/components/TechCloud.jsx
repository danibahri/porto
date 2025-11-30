import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const TechCloud = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const getIcon = (slug) =>
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}" width="50" height="50" alt="icon" style="pointer-events: none;" />`;

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
    ];

    const options = {
      radius: 300,
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
    <section className="py-20 bg-black flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">
        Tech Stack
      </h2>
      <div className="text-purple-400 font-bold text-xl md:text-2xl cursor-pointer hover:text-purple-300 transition-colors">
        <span ref={containerRef} className="block" />
      </div>
    </section>
  );
};

export default TechCloud;

import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const TechCloud = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "React",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Node.js",
      "Tailwind",
      "Git",
      "GitHub",
      "Framer Motion",
      "Vite",
      "TypeScript",
      "Next.js",
      "Firebase",
      "Supabase",
      "Three.js",
      "Matter.js",
      "Python",
      "SQL",
      "MongoDB",
      "GraphQL",
    ];

    const options = {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    };

    // Cleanup previous instance if any (TagCloud appends to container)
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

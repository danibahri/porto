import React from "react";
import SpotlightCard from "./SpotlightCard";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores with real-time analytics.",
    tech: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "AI Chat Interface",
    description:
      "Modern chat interface with streaming responses and markdown support.",
    tech: ["Next.js", "OpenAI", "Framer Motion"],
  },
  {
    title: "Crypto Portfolio",
    description:
      "Track your cryptocurrency assets with live price updates and charts.",
    tech: ["React", "Recharts", "CoinGecko API"],
  },
  {
    title: "Social Media App",
    description:
      "Full-featured social platform with stories, posts, and real-time messaging.",
    tech: ["Vue", "Firebase", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <SpotlightCard key={index} className="h-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

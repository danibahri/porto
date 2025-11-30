import React from "react";
import SpotlightCard from "./SpotlightCard";
import {
  Building2,
  Hospital,
  PlayCircle,
  BarChart2,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const projects = [
  {
    title: "Recruitment Komisi-Informasi Sumenep",
    subtitle: "Government Platform",
    description:
      "Professional recruitment platform for government commission with advanced security, compliance features, and multi-role user management system.",
    tech: ["Laravel", "Filament", "MySQL", "Tailwind"],
    features: [
      "Government-grade security & compliance",
      "Advanced admin dashboard with Filament",
      "Multi-role user management system",
      "Dynamic form builder & validation",
    ],
    icon: Building2,
    color: "bg-red-500",
    link: "#",
  },
  {
    title: "Medical Record Management System",
    subtitle: "Medical Record Management with 3 Roles",
    description:
      "Comprehensive medical record management system with multi-role access, real-time queue management, and advanced analytics for healthcare providers.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Multi-role access control (Admin, Doctor, Officer)",
      "Dynamic dashboard with real-time analytics",
      "Real-time queue management system",
      "Dynamic form builder for medical records",
    ],
    icon: Hospital,
    color: "bg-purple-500",
    link: "#",
  },
  {
    title: "AnimeFly - Streaming Platform",
    subtitle: "Video Streaming Platform",
    description:
      "Modern video streaming web application with high-performance streaming capabilities, advanced search, and responsive design.",
    tech: ["Flask", "Python", "JavaScript"],
    features: [
      "High-performance video streaming",
      "Advanced search & filtering system",
      "Responsive video player",
      "Modern UI/UX design",
    ],
    icon: PlayCircle,
    color: "bg-blue-500",
    link: "#",
  },
  {
    title: "Tourism Sentiment Analysis",
    subtitle: "Machine Learning Platform",
    description:
      "Interactive web application for sentiment analysis with real-time processing, dynamic visualizations, and ML analytics.",
    tech: ["Python", "Streamlit", "ML"],
    features: [
      "Real-time sentiment analysis engine",
      "Interactive data visualizations",
      "Aspect-based sentiment classification",
      "Dynamic charts and analytics",
    ],
    icon: BarChart2,
    color: "bg-green-500",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
          Proyek Unggulan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <SpotlightCard className="h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${project.color} text-white shadow-lg`}
                    >
                      <project.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="p-2 text-gray-400 group-hover:text-white transition-colors bg-white/5 rounded-lg group-hover:bg-white/10">
                    <ExternalLink size={20} />
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-900/40 rounded-md border border-purple-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-2">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <CheckCircle
                        size={16}
                        className="text-green-500 mt-0.5 shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

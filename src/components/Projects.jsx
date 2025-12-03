import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import {
  Building2,
  Hospital,
  PlayCircle,
  BarChart2,
  ExternalLink,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  X,
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

// Sample certificates - user will replace with their actual certificates
const certificates = [
  { id: 1, file: "/certificates/cert1.jpg", type: "image" },
  { id: 2, file: "/certificates/cert2.pdf", type: "pdf" },
  { id: 3, file: "/certificates/cert3.jpg", type: "image" },
  { id: 4, file: "/certificates/cert4.pdf", type: "pdf" },
  { id: 5, file: "/certificates/cert5.jpg", type: "image" },
  { id: 6, file: "/certificates/cert6.jpg", type: "image" },
];

const ITEMS_PER_PAGE = 4;

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCertificates = certificates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
          Portfolio
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
            <button
              onClick={() => handleTabChange("projects")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-purple-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Proyek Unggulan
            </button>
            <button
              onClick={() => handleTabChange("certificates")}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeTab === "certificates"
                  ? "bg-purple-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sertifikat
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "projects" ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {paginatedCertificates.map((cert) => (
                  <SpotlightCard
                    key={cert.id}
                    className="group cursor-pointer overflow-hidden"
                  >
                    <div className="aspect-[3/4] relative bg-gray-900 rounded-lg overflow-hidden">
                      {cert.type === "image" ? (
                        <img
                          src={cert.file}
                          alt={`Certificate ${cert.id}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23374151' width='200' height='200'/%3E%3Ctext fill='%239CA3AF' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                          <FileText
                            size={48}
                            className="text-purple-400 mb-2"
                          />
                          <span className="text-sm text-gray-400">
                            PDF Certificate
                          </span>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => openModal(cert)}
                          className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
                        >
                          Lihat Detail
                        </button>
                      </div>
                    </div>

                    {/* Type indicator */}
                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md flex items-center gap-1">
                      {cert.type === "image" ? (
                        <ImageIcon size={14} className="text-blue-400" />
                      ) : (
                        <FileText size={14} className="text-red-400" />
                      )}
                      <span className="text-xs text-white uppercase">
                        {cert.type}
                      </span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-medium transition-all ${
                            currentPage === page
                              ? "bg-purple-500 text-white"
                              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>

              {/* Certificate content */}
              <div className="w-full h-full flex items-center justify-center p-8">
                {selectedCert.type === "image" ? (
                  <img
                    src={selectedCert.file}
                    alt="Certificate"
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                ) : (
                  <div className="w-full h-[80vh] flex flex-col items-center justify-center gap-4">
                    <FileText size={64} className="text-purple-400" />
                    <p className="text-white text-lg">PDF Certificate</p>
                    <iframe
                      src={selectedCert.file}
                      className="w-full h-full rounded-lg border border-white/10"
                      title="Certificate PDF"
                    />
                    <a
                      href={selectedCert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
                    >
                      Buka di Tab Baru
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

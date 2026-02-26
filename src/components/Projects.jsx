import React, { useState, useEffect } from "react";
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
  Github,
  ArrowUpRight,
  File,
  Download,
  Eye,
  Award,
} from "lucide-react";

// Dynamically scan project images (supports jpg, jpeg, png, gif, webp, svg, bmp)
const projectImageFiles = import.meta.glob(
  "/public/project/*.{jpg,jpeg,png,gif,webp,svg,bmp}",
  { eager: true, query: "?url", import: "default" },
);

// Resolve image by slug: matches any file starting with the slug in /public/project/
const resolveProjectImage = (slug) => {
  if (!slug) return null;
  const match = Object.entries(projectImageFiles).find(([path]) => {
    const filename = path.split("/").pop().split(".")[0].toLowerCase();
    return filename === slug.toLowerCase();
  });
  return match ? match[1] : null;
};

const projects = [
  // PT ISS on sampoerna web monitoring and maintenance system
  {
    title: "PT ISS Web Monitoring & Maintenance",
    subtitle: "Internal Vendor Management System",
    description:
      "Comprehensive web monitoring and maintenance system for internal vendor management, ensuring seamless operations and real-time insights.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Real-time monitoring dashboard",
      "Automated maintenance scheduling",
      "Vendor performance analytics",
      "Dynamic reporting tools",
    ],
    icon: Building2,
    color: "from-red-500 to-orange-500",
    imageSlug: "fmsiss",
    link: "https://fms-iss.my.id/",
  },
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
    color: "from-red-500 to-orange-500",
    imageSlug: "recruitment",
    link: "https://seleksi-ki.sumenepkab.go.id/",
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
    color: "from-purple-500 to-violet-500",
    imageSlug: "medical-record",
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
    color: "from-blue-500 to-cyan-500",
    imageSlug: "animefly",
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
    color: "from-emerald-500 to-teal-500",
    imageSlug: "sentiment-analysis",
    link: "#",
  },
];

// Helper to detect file type from extension
const getFileType = (filename) => {
  const ext = filename.split(".").pop().toLowerCase();
  if (["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(ext))
    return "image";
  if (ext === "pdf") return "pdf";
  if (["doc", "docx"].includes(ext)) return "doc";
  return "unknown";
};

const getFileIcon = (type) => {
  switch (type) {
    case "image":
      return ImageIcon;
    case "pdf":
      return FileText;
    case "doc":
      return File;
    default:
      return FileText;
  }
};

const getFileColor = (type) => {
  switch (type) {
    case "image":
      return "text-blue-400";
    case "pdf":
      return "text-red-400";
    case "doc":
      return "text-indigo-400";
    default:
      return "text-gray-400";
  }
};

const ITEMS_PER_PAGE = 4;
const GITHUB_URL = "https://github.com/danibahri";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Dynamically scan /certificates folder
  useEffect(() => {
    const loadCertificates = async () => {
      try {
        // Use Vite's import.meta.glob to dynamically load certificates
        const imageFiles = import.meta.glob(
          "/public/certificates/*.{jpg,jpeg,png,gif,webp,svg,bmp}",
          { eager: true, query: "?url", import: "default" },
        );
        const pdfFiles = import.meta.glob("/public/certificates/*.pdf", {
          eager: true,
          query: "?url",
          import: "default",
        });
        const docFiles = import.meta.glob("/public/certificates/*.{doc,docx}", {
          eager: true,
          query: "?url",
          import: "default",
        });

        const allFiles = { ...imageFiles, ...pdfFiles, ...docFiles };

        const certs = Object.entries(allFiles).map(([path, url], index) => {
          const filename = path.split("/").pop();
          const type = getFileType(filename);
          return {
            id: index + 1,
            file: url,
            filename,
            type,
            name: filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          };
        });

        setCertificates(certs);
      } catch (error) {
        console.error("Error loading certificates:", error);
        // Fallback: try common file names
        const fallbackCerts = [];
        const extensions = ["jpg", "jpeg", "png", "pdf", "doc", "docx"];
        for (let i = 1; i <= 20; i++) {
          for (const ext of extensions) {
            const file = `/certificates/cert${i}.${ext}`;
            try {
              const response = await fetch(file, { method: "HEAD" });
              if (response.ok) {
                fallbackCerts.push({
                  id: fallbackCerts.length + 1,
                  file,
                  filename: `cert${i}.${ext}`,
                  type: getFileType(`cert${i}.${ext}`),
                  name: `Certificate ${i}`,
                });
              }
            } catch {
              // Skip unavailable files
            }
          }
        }
        setCertificates(fallbackCerts);
      }
    };

    loadCertificates();
  }, []);

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCertificates = certificates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Portfolio <span className="text-gradient-purple">Showcase</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex glass rounded-2xl p-1.5 gap-1">
            {[
              { key: "projects", label: "Proyek Unggulan" },
              { key: "certificates", label: "Sertifikat" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`relative px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeTab === tab.key
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="projects-tab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
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
            >
              {/* Only show first 4 projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.slice(0, 4).map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <SpotlightCard className="h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_rgba(168,85,247,0.1)] !p-0 !py-0">
                      {/* Image Preview */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-900 to-gray-950">
                        <img
                          src={resolveProjectImage(project.imageSlug)}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.querySelector(
                              ".img-fallback",
                            ).style.display = "flex";
                          }}
                        />
                        {/* Fallback when no image */}
                        <div className="img-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950">
                          <div
                            className={`p-6 rounded-3xl bg-gradient-to-br ${project.color} opacity-20`}
                          >
                            <project.icon size={48} className="text-white" />
                          </div>
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {/* Icon badge */}
                        <div
                          className={`absolute top-3 left-3 p-2 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}
                        >
                          <project.icon size={16} />
                        </div>
                        {/* External link */}
                        <div className="absolute top-3 right-3 p-2 text-white/60 group-hover:text-white transition-all bg-black/30 backdrop-blur-sm rounded-xl group-hover:bg-black/50 group-hover:rotate-12 duration-300">
                          <ExternalLink size={14} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Header */}
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-gradient-purple transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-mono font-medium text-purple-300 bg-purple-500/10 rounded-lg border border-purple-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="mt-auto space-y-2">
                          {project.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-gray-400"
                            >
                              <CheckCircle
                                size={14}
                                className="text-emerald-500 mt-0.5 shrink-0"
                              />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.a>
                ))}
              </div>

              {/* View More on GitHub */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center mt-12"
              >
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
                >
                  <Github
                    size={22}
                    className="text-white group-hover:rotate-12 transition-transform duration-300"
                  />
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">
                      Lihat Semua Proyek
                    </p>
                    <p className="text-gray-500 text-xs">
                      Explore more on GitHub →
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-2"
                  />
                </a>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {certificates.length === 0 ? (
                <div className="text-center py-20">
                  <Award size={64} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-500 text-lg">
                    Belum ada sertifikat yang ditemukan.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Tambahkan file ke folder{" "}
                    <code className="text-purple-400">
                      public/certificates/
                    </code>
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {paginatedCertificates.map((cert, idx) => {
                      const FileIcon = getFileIcon(cert.type);
                      const iconColor = getFileColor(cert.type);
                      return (
                        <motion.div
                          key={cert.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <SpotlightCard className="group cursor-pointer overflow-hidden !p-0">
                            <div className="aspect-[3/4] relative bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                              {cert.type === "image" ? (
                                <img
                                  src={cert.file}
                                  alt={cert.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  loading="lazy"
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.nextSibling.style.display = "flex";
                                  }}
                                />
                              ) : null}

                              {/* Fallback / Non-image display */}
                              {cert.type !== "image" && (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
                                  <div
                                    className={`p-4 rounded-2xl bg-white/5 ${iconColor}`}
                                  >
                                    <FileIcon size={40} />
                                  </div>
                                  <span className="text-sm text-gray-400 text-center line-clamp-2">
                                    {cert.name}
                                  </span>
                                  <span className="px-3 py-1 text-xs font-mono uppercase bg-white/5 rounded-lg text-gray-500 border border-white/10">
                                    {cert.type.toUpperCase()}
                                  </span>
                                </div>
                              )}

                              {/* Hidden fallback for broken images */}
                              <div className="w-full h-full flex-col items-center justify-center gap-3 p-6 hidden">
                                <div
                                  className={`p-4 rounded-2xl bg-white/5 ${iconColor}`}
                                >
                                  <FileIcon size={40} />
                                </div>
                                <span className="text-sm text-gray-400 text-center">
                                  {cert.name}
                                </span>
                              </div>

                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
                                <div className="flex gap-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openModal(cert);
                                    }}
                                    className="flex items-center gap-1.5 px-4 py-2 bg-purple-500 text-white rounded-xl text-sm font-medium hover:bg-purple-600 transition-colors"
                                  >
                                    <Eye size={14} />
                                    Lihat
                                  </button>
                                  <a
                                    href={cert.file}
                                    download
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
                                  >
                                    <Download size={14} />
                                  </a>
                                </div>
                              </div>

                              {/* Type badge */}
                              <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-1.5 border border-white/10">
                                <FileIcon size={12} className={iconColor} />
                                <span className="text-[10px] text-white uppercase font-mono tracking-wider">
                                  {cert.filename?.split(".").pop()}
                                </span>
                              </div>
                            </div>

                            {/* Card Footer */}
                            <div className="p-4 border-t border-white/5">
                              <p className="text-white text-sm font-medium truncate">
                                {cert.name}
                              </p>
                              <p className="text-gray-500 text-xs mt-0.5">
                                {cert.filename}
                              </p>
                            </div>
                          </SpotlightCard>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-8">
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(1, prev - 1))
                        }
                        disabled={currentPage === 1}
                        className="p-2.5 rounded-xl glass text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <div className="flex items-center gap-1.5">
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1,
                        ).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-xl font-medium text-sm transition-all ${
                              currentPage === page
                                ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                                : "glass text-gray-400 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(totalPages, prev + 1),
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="p-2.5 rounded-xl glass text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-gray-950 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = getFileIcon(selectedCert.type);
                    return (
                      <Icon
                        size={18}
                        className={getFileColor(selectedCert.type)}
                      />
                    );
                  })()}
                  <div>
                    <h3 className="text-white font-medium text-sm">
                      {selectedCert.name}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {selectedCert.filename}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.file}
                    download
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    title="Download"
                  >
                    <Download size={18} />
                  </a>
                  <a
                    href={selectedCert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    title="Open in new tab"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div
                className="w-full overflow-auto"
                style={{ maxHeight: "calc(90vh - 60px)" }}
              >
                {selectedCert.type === "image" ? (
                  <div className="flex items-center justify-center p-6 min-h-[400px]">
                    <img
                      src={selectedCert.file}
                      alt={selectedCert.name}
                      className="max-w-full max-h-[75vh] object-contain rounded-xl"
                    />
                  </div>
                ) : selectedCert.type === "pdf" ? (
                  <div className="w-full h-[80vh]">
                    <iframe
                      src={selectedCert.file}
                      className="w-full h-full"
                      title={selectedCert.name}
                    />
                  </div>
                ) : selectedCert.type === "doc" ? (
                  <div className="flex flex-col items-center justify-center gap-6 p-12 min-h-[400px]">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                      <File size={64} className="text-indigo-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white text-xl font-semibold mb-2">
                        {selectedCert.name}
                      </h4>
                      <p className="text-gray-400 mb-6">
                        Dokumen Word tidak bisa ditampilkan langsung di browser.
                      </p>
                      <div className="flex gap-3 justify-center">
                        <a
                          href={selectedCert.file}
                          download
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all"
                        >
                          <Download size={18} />
                          Download File
                        </a>
                        <a
                          href={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(window.location.origin + selectedCert.file)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 glass text-white rounded-2xl font-medium hover:bg-white/10 transition-all"
                        >
                          <ExternalLink size={18} />
                          View Online
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4 p-12 min-h-[400px]">
                    <FileText size={64} className="text-gray-500" />
                    <p className="text-gray-400">
                      Format file tidak didukung untuk preview
                    </p>
                    <a
                      href={selectedCert.file}
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-2xl font-medium"
                    >
                      <Download size={18} />
                      Download
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

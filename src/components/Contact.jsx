import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-8 md:p-12 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Hubungi Saya
          </h2>
          <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
            Punya proyek menarik atau sekadar ingin menyapa? Jangan ragu untuk
            menghubungi saya! Saya selalu terbuka untuk diskusi dan kolaborasi
            baru.
          </p>

          <div className="flex justify-center gap-6 md:gap-8 mb-12">
            {[
              {
                icon: <Github size={24} />,
                href: "https://github.com/danibahri",
                label: "GitHub",
                color: "hover:bg-gray-800",
              },
              {
                icon: <Linkedin size={24} />,
                href: "https://www.linkedin.com/in/ahmad-ramadani-bahri-44468a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                label: "LinkedIn",
                color: "hover:bg-blue-700",
              },
              {
                icon: <Mail size={24} />,
                href: "mailto:danibahri45@gmail.com",
                label: "Email",
                color: "hover:bg-red-600",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${item.color}`}
              >
                <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <footer className="pt-8 border-t border-white/5 text-gray-500 text-sm">
            © {new Date().getFullYear()} Ahmad Ramadani Bahri. Built with React
            & Tailwind.
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Heart,
  Send,
} from "lucide-react";
import { SplitText, FadeUp } from "./TextReveal";
import MagneticEffect from "./MagneticEffect";

const Contact = () => {
  const socials = [
    {
      icon: Github,
      href: "https://github.com/danibahri",
      label: "GitHub",
      username: "@danibahri",
      color: "group-hover:bg-gray-800 group-hover:border-gray-700",
      iconColor: "group-hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ahmad-ramadani-bahri-44468a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      username: "Ahmad Ramadani Bahri",
      color: "group-hover:bg-blue-600/20 group-hover:border-blue-500/30",
      iconColor: "group-hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:danibahri45@gmail.com",
      label: "Email",
      username: "danibahri45@gmail.com",
      color: "group-hover:bg-red-600/20 group-hover:border-red-500/30",
      iconColor: "group-hover:text-red-400",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Main Card */}
        <FadeUp className="glass rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          {/* Header */}
          <FadeUp delay={0.1}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              Get in Touch
            </span>
          </FadeUp>

          <SplitText
            className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight font-display"
            delay={0.15}
            duration={0.03}
            as="h2"
          >
            Let's Connect
          </SplitText>

          <FadeUp delay={0.3}>
            <p className="text-gray-400 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
              Punya proyek menarik atau sekadar ingin menyapa? Jangan ragu untuk
              menghubungi saya! Saya selalu terbuka untuk diskusi dan
              kolaborasi.
            </p>
          </FadeUp>

          {/* Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {socials.map((item, index) => (
              <FadeUp key={index} delay={0.3 + index * 0.1}>
                <MagneticEffect strength={0.15}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 hover:-translate-y-1 block ${item.color}`}
                  >
                    <div className={`mb-3 transition-colors ${item.iconColor}`}>
                      <item.icon
                        size={28}
                        className="text-gray-400 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1 font-display">
                      {item.label}
                    </h3>
                    <p className="text-gray-500 text-xs truncate">
                      {item.username}
                    </p>
                    <ArrowUpRight
                      size={16}
                      className="absolute top-4 right-4 text-gray-600 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </MagneticEffect>
              </FadeUp>
            ))}
          </div>

          {/* Quick Email CTA */}
          <FadeUp delay={0.6}>
            <MagneticEffect strength={0.2} className="inline-block">
              <a
                href="mailto:danibahri45@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold font-display hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <Send
                  size={18}
                  className="group-hover:rotate-12 transition-transform"
                />
                Kirim Pesan
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </MagneticEffect>
          </FadeUp>

          {/* Footer */}
          <FadeUp delay={0.7}>
            <footer className="mt-16 pt-8 border-t border-white/5 text-gray-600 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>
                &copy; {new Date().getFullYear()} Ahmad Ramadani Bahri.
              </span>
              <span className="flex items-center gap-1">
                Built with{" "}
                <Heart size={12} className="text-red-500 fill-red-500" /> using
                React & Tailwind.
              </span>
            </footer>
          </FadeUp>
        </FadeUp>
      </div>
    </section>
  );
};

export default Contact;

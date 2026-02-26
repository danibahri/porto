import React from "react";
import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import Lanyard from "./Lanyard";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <AuroraBackground className="min-h-screen">
      <section
        id="home"
        className="flex flex-col items-center justify-center relative pt-20 mt-10 w-full overflow-hidden"
      >
        <div className="text-center z-10 px-4 flex flex-col items-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg mb-4 tracking-[0.3em] uppercase font-light"
          >
            Ahmad Ramadani Bahri
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-[0.9] glow-text"
          >
            <span className="text-gradient-purple">Web Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-lg mx-auto text-lg mb-10 leading-relaxed"
          >
            Crafting digital experiences that blend creativity with clean code.
            Turning ideas into elegant, performant web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 bg-white text-black rounded-2xl font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles size={16} />
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Lanyard as Profile Photo */}
          <div className="relative w-full h-[500px] md:h-[800px] flex justify-center items-start -mt-20 max-w-[100vw]">
            <Lanyard />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;

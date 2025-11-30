import React from "react";
import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import Lanyard from "./Lanyard";

const Hero = () => {
  return (
    <AuroraBackground className="min-h-screen">
      <section
        id="home"
        className="flex flex-col items-center justify-center relative pt-20 w-full"
      >
        <div className="text-center z-10 px-4 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-4 tracking-widest uppercase"
          >
            Ahmad Ramadani Bahri
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
          >
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Digital Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-lg mx-auto text-lg mb-10"
          >
            I craft interactive and immersive web applications that leave a
            lasting impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Lanyard as Profile Photo */}
          <div className="relative w-full h-[800px] flex justify-center items-start -mt-20">
            <Lanyard />
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;

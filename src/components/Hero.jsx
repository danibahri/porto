import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AuroraBackground from "./AuroraBackground";
import Lanyard from "./Lanyard";
import { ArrowDown, Sparkles } from "lucide-react";
import { SplitText, WordReveal } from "./TextReveal";
import MagneticEffect from "./MagneticEffect";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <AuroraBackground className="min-h-screen">
      <section
        id="home"
        className="flex flex-col items-center justify-center relative pt-20 mt-10 w-full overflow-hidden"
      >
        <motion.div
          className="text-center z-10 px-4 flex flex-col items-center"
          style={{ y: parallaxY, opacity: parallaxOpacity }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.8 }}
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

          {/* Name with letter-spacing animation */}
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="text-gray-400 text-base md:text-lg mb-4 uppercase font-light font-display"
          >
            Ahmad Ramadani Bahri
          </motion.h2>

          {/* Main Heading with Split Text */}
          <div className="mb-6">
            <SplitText
              className="text-5xl md:text-8xl lg:text-9xl font-black text-gradient-purple tracking-tighter leading-[0.9] glow-text font-display"
              delay={0.5}
              duration={0.04}
              yOffset={60}
              as="h1"
            >
              Web Developer
            </SplitText>
          </div>

          {/* Tagline with word reveal */}
          <WordReveal
            className="text-gray-400 max-w-lg mx-auto text-lg mb-10 leading-relaxed"
            delay={0.9}
            as="p"
          >
            Crafting digital experiences that blend creativity with clean code.
            Turning ideas into elegant, performant web applications.
          </WordReveal>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex gap-4 justify-center mb-12"
          >
            <MagneticEffect strength={0.2}>
              <a
                href="#projects"
                className="group relative px-8 py-3.5 bg-white text-black rounded-2xl font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-2 font-display"
              >
                <Sparkles size={16} />
                View Work
              </a>
            </MagneticEffect>
            <MagneticEffect strength={0.2}>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-display"
              >
                Contact Me
              </a>
            </MagneticEffect>
          </motion.div>

          {/* Lanyard as Profile Photo */}
          <motion.div
            className="relative w-full h-[500px] md:h-[800px] flex justify-center items-start -mt-20 max-w-[100vw]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          >
            <Lanyard />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-xs tracking-widest uppercase font-display">
                Scroll
              </span>
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;

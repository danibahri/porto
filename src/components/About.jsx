import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg leading-relaxed space-y-6"
        >
          <p>
            I'm a passionate developer with a keen eye for design and motion. I
            believe that the web should be more than just static pages; it
            should be an experience.
          </p>
          <p>
            With expertise in React, Tailwind CSS, and modern animation
            libraries, I bring ideas to life with fluid interactions and
            performant code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

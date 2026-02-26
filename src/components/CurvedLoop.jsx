import React from "react";
import { motion } from "framer-motion";

const CurvedLoop = () => {
  return (
    <div className="w-full overflow-hidden py-8 relative max-w-[100vw]">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark z-10 pointer-events-none" />
      <div className="relative w-full h-[80px] md:h-[120px] flex items-center">
        <motion.div
          className="absolute whitespace-nowrap text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter"
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          <span className="text-gradient-purple opacity-20">
            OPEN TO WORK ✦ CREATIVE DEVELOPER ✦ FRONTEND ✦ BACKEND ✦ FULLSTACK ✦
            OPEN TO WORK ✦ CREATIVE DEVELOPER ✦ FRONTEND ✦ BACKEND ✦ FULLSTACK ✦
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default CurvedLoop;

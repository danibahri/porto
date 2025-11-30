import React from "react";
import { motion } from "framer-motion";

const CurvedLoop = () => {
  return (
    <div className="w-full overflow-hidden py-10 bg-black">
      <div className="relative w-full h-[150px] flex items-center">
        <motion.div
          className="absolute whitespace-nowrap text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          OPEN TO WORK • CREATIVE DEVELOPER • OPEN TO WORK • CREATIVE DEVELOPER
          • OPEN TO WORK • CREATIVE DEVELOPER •
        </motion.div>

        {/* Duplicate for seamless loop */}
        <motion.div
          className="absolute whitespace-nowrap text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"
          style={{ left: "1000px" }} // Approximate offset, better to use % or measure
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          OPEN TO WORK • CREATIVE DEVELOPER • OPEN TO WORK • CREATIVE DEVELOPER
          • OPEN TO WORK • CREATIVE DEVELOPER •
        </motion.div>
      </div>
    </div>
  );
};

export default CurvedLoop;

"use client";

import { motion } from "motion/react";
import { RECOGNITION_WALL_ITEMS } from "./constants";

export function RecognitionWall() {
  return (
    <div className="w-full overflow-hidden bg-[#0D1B2A] py-6 relative z-10 my-20 flex group">
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0D1B2A] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0D1B2A] to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-12 items-center group-hover:[animation-play-state:paused]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Double the array for seamless loop */}
        {[...RECOGNITION_WALL_ITEMS, ...RECOGNITION_WALL_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-white font-medium text-base md:text-lg tracking-wide">{item}</span>
            <span className="w-2 h-2 rounded-full bg-[#E31E24]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

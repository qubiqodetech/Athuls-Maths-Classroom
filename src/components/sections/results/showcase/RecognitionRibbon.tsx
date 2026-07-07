"use client";

import { motion } from "motion/react";
import { ribbonItems } from "./data";
import { Star } from "lucide-react";

export function RecognitionRibbon() {
  // Duplicate items to create a seamless loop
  const marqueeItems = [...ribbonItems, ...ribbonItems, ...ribbonItems];

  return (
    <div className="relative w-full bg-[#0D1B2A] py-4 md:py-5 overflow-hidden flex whitespace-nowrap border-y border-[#1F2937]">
      <motion.div
        className="flex items-center gap-8 md:gap-12 hover:[animation-play-state:paused]"
        animate={{
          x: [0, -1035], // Approximate width of one set of items, adjust if needed
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-12">
            <span className="text-sm md:text-base font-medium text-white/90 tracking-wide uppercase font-display">
              {item}
            </span>
            <Star className="w-4 h-4 text-[#E31E24] fill-[#E31E24]" />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#0D1B2A] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#0D1B2A] to-transparent pointer-events-none" />
    </div>
  );
}

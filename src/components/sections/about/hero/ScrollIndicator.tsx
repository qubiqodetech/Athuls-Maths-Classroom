"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
      onClick={scrollToNext}
    >
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#0D1B2A] transition-colors">
        Discover Our Story
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-8 h-12 rounded-full border border-gray-200 flex items-start justify-center p-1 group-hover:border-[#E31E24] transition-colors bg-white/50 backdrop-blur-sm"
      >
        <div className="w-1.5 h-3 rounded-full bg-gray-300 group-hover:bg-[#E31E24] transition-colors" />
      </motion.div>
    </motion.div>
  );
}

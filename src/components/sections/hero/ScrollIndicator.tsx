"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hidden lg:flex"
    >
      <span className="text-xs uppercase tracking-widest font-medium">Scroll to Explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
}

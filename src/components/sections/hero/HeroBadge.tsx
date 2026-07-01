"use client";

import { motion } from "motion/react";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-[#E31E24]/20 shadow-[0_4px_20px_-10px_rgba(227,30,36,0.2)] hover:shadow-[0_4px_20px_-10px_rgba(227,30,36,0.4)] transition-shadow cursor-default mb-8"
    >
      <span className="text-lg">✨</span>
      <span className="text-sm font-semibold text-[#0D1B2A] tracking-wide">
        Admissions Open 2026
      </span>
    </motion.div>
  );
}

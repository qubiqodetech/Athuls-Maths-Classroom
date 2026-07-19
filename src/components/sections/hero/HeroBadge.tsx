"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-1 pr-4 py-1 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer mb-8 group"
    >
      <div className="px-3 py-1 rounded-full bg-[#E31E24] text-white text-[10px] sm:text-xs font-bold tracking-wide uppercase">
        New
      </div>
      <span className="text-xs sm:text-sm font-medium text-[#0D1B2A] tracking-tight">
        Admissions Open 2026
      </span>
      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0D1B2A] transition-colors" />
    </motion.div>
  );
}

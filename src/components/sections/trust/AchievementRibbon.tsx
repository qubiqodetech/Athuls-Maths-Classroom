"use client";

import { motion } from "motion/react";

export function AchievementRibbon() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-30">
      {/* Abstract geometric background elements instead of a literal ribbon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl mix-blend-multiply"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0D1B2A]/5 rounded-full blur-3xl mix-blend-multiply"
      />
      
      {/* Subtle lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="trust-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#trust-grid)" />
      </svg>
    </div>
  );
}

"use client";

import { motion } from "motion/react";

export function CommitmentBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-4 mb-32"
    >
      <div className="relative bg-[#0D1B2A] rounded-[3rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-[#0D1B2A]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-80" />
        
        {/* Abstract subtle line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
            Our Promise
          </span>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Every Student Matters.
          </h3>
          
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Our commitment is to ensure that every learner receives the attention, encouragement, and guidance needed to achieve their best.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

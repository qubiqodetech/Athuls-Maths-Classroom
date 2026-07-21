"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function SuccessPromiseBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-gradient-to-r from-[#1F2937] to-[#0D1B2A] rounded-[2rem] p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24]/10 blur-3xl rounded-full" />
      
      <div className="relative z-10 flex items-center gap-6">
        <div className="hidden md:flex w-16 h-16 rounded-full bg-white/5 border border-white/10 items-center justify-center shrink-0">
          <Sparkles className="w-8 h-8 text-[#E31E24]" />
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            We're Ready When You Are.
          </h3>
          <p className="text-white/70 text-lg">
            Let's build your confidence in their studies together.
          </p>
        </div>
      </div>
      
      <div className="relative z-10 w-full md:w-auto">
        <div className="inline-flex h-14 items-center justify-center rounded-full bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 whitespace-nowrap">
          Admissions Open For 2024-25
        </div>
      </div>
    </motion.div>
  );
}

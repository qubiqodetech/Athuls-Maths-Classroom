"use client";

import { motion } from "motion/react";
import { FOUNDER_QUOTE } from "./constants";

export function FounderQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative my-10 pl-8 border-l-4 border-[#E31E24]"
    >
      <div className="absolute -top-6 -left-3 text-6xl text-gray-200 font-serif opacity-50 select-none">
        "
      </div>
      <p className="text-xl md:text-2xl text-[#0D1B2A] font-medium italic leading-relaxed relative z-10">
        {FOUNDER_QUOTE}
      </p>
    </motion.div>
  );
}

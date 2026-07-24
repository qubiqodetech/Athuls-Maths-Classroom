"use client";

import { motion } from "motion/react";
import { FOUNDER_QUOTE } from "./constants";
import { Quote } from "lucide-react";

export function FounderQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative my-8 py-6 pl-8 border-l-2 border-white/10"
    >
      <div className="absolute top-0 -left-4 w-8 h-8 rounded-full bg-[#050816] flex items-center justify-center border border-white/10">
        <Quote className="w-3.5 h-3.5 text-[#E31E24] fill-[#E31E24]" />
      </div>
      <p className="text-xl md:text-2xl text-gray-200 font-medium italic leading-relaxed relative z-10">
        "{FOUNDER_QUOTE}"
      </p>
    </motion.div>
  );
}

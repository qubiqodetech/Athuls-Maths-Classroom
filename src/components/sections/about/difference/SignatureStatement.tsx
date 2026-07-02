"use client";

import { motion } from "motion/react";
import { SIGNATURE_STATEMENT } from "./constants";

export function SignatureStatement() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative max-w-4xl mx-auto px-6 py-20 text-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] text-gray-50 font-serif leading-none select-none -z-10">
        &ldquo;
      </div>
      
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D1B2A] leading-relaxed md:leading-relaxed mb-8 font-serif italic relative z-10 whitespace-pre-line">
        "{SIGNATURE_STATEMENT}"
      </h3>
      
      <div className="flex justify-center">
        <div className="w-16 h-1 bg-gray-200 rounded-full" />
      </div>
    </motion.div>
  );
}

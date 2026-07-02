"use client";

import { motion } from "motion/react";
import { BRAND_MANIFESTO } from "./constants";

export function BrandManifesto() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-gray-50/50 -z-10 rounded-[3rem]" />
      
      <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0D1B2A] leading-tight md:leading-tight mb-12 font-serif italic max-w-4xl mx-auto">
        "{BRAND_MANIFESTO}"
      </h3>
      
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-px bg-gray-300" />
        <span className="text-gray-500 font-bold tracking-widest uppercase text-sm">
          Athul's Maths Classroom
        </span>
        <div className="w-16 h-px bg-gray-300" />
      </div>
    </motion.div>
  );
}

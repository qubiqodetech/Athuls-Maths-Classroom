"use client";

import { motion } from "motion/react";
import { FACULTY_QUOTE } from "./constants";

export function FacultyQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center max-w-4xl mx-auto relative px-4 my-24"
    >
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-blue-50 font-serif opacity-50 select-none">
        "
      </div>
      <h3 className="text-xl md:text-3xl lg:text-4xl text-[#0D1B2A] font-medium italic leading-relaxed relative z-10">
        {FACULTY_QUOTE}
      </h3>
    </motion.div>
  );
}

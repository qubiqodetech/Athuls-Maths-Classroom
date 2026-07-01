"use client";

import { motion } from "motion/react";
import { QUOTE_TEXT } from "./constants";

export function QuoteBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center max-w-4xl mx-auto relative px-4"
    >
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-gray-100 font-serif opacity-50 select-none">
        "
      </div>
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#0D1B2A] font-medium italic leading-relaxed relative z-10">
        {QUOTE_TEXT}
      </h3>
    </motion.div>
  );
}

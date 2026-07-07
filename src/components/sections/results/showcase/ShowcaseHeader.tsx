"use client";

import { motion } from "motion/react";

export function ShowcaseHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center mb-20"
    >
      <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4">
        Results
      </span>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D1B2A] leading-[1.1]">
        Celebrating
        <br />
        Academic Excellence.
      </h2>
    </motion.div>
  );
}

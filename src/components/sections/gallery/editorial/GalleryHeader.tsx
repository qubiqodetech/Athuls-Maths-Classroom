"use client";

import { motion } from "motion/react";

export function GalleryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-16"
    >
      <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4 block">
        Our Moments
      </span>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0D1B2A]">
        Moments That
        <br />
        Define Our Journey.
      </h2>
    </motion.div>
  );
}

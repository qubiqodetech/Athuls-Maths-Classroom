"use client";

import { motion } from "motion/react";

export function TrustHeading() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-[#0D1B2A] text-xs font-bold tracking-widest uppercase mb-6 border border-gray-200">
          WHY STUDENTS & PARENTS TRUST AMC
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-[#0D1B2A] leading-tight tracking-tight mb-6"
      >
        Trusted by Students. <br className="hidden sm:block" />
        <span className="text-gray-400">Preferred by Parents.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-lg text-gray-600 leading-relaxed"
      >
        Every achievement reflects our commitment to helping students build confidence,
        strengthen concepts, and achieve academic success.
      </motion.p>
    </div>
  );
}

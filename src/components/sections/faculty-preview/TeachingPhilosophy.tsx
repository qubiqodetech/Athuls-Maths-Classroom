"use client";

import { motion } from "motion/react";

export function TeachingPhilosophy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto mb-12 text-center"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">
        More Than Teaching Mathematics.
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        Our educators focus on helping students understand concepts, think critically, and approach mathematics with confidence rather than fear.
      </p>
    </motion.div>
  );
}

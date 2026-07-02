"use client";

import { motion } from "motion/react";

export function SectionHeading() {
  return (
    <div className="max-w-3xl mx-auto text-center px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#E31E24] text-xs font-bold tracking-widest uppercase border border-red-100">
          OUR PURPOSE
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight tracking-tight mb-8"
      >
        More Than Teaching Mathematics. <br className="hidden md:block" />
        Building <span className="text-[#E31E24]">Confident Learners</span> <br className="hidden md:block" />
        For Life.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-lg text-gray-600 leading-relaxed max-w-[700px] mx-auto"
      >
        Every lesson we teach is guided by a purpose greater than examinations. We believe education should build confidence, curiosity, discipline, and lifelong problem-solving skills.
      </motion.p>
    </div>
  );
}

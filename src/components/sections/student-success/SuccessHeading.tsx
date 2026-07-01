"use client";

import { motion } from "motion/react";

export function SuccessHeading() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#E31E24] text-xs font-bold tracking-widest uppercase mb-6 border border-red-100">
          STUDENT SUCCESS
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-[#0D1B2A] leading-tight tracking-tight mb-6"
      >
        Every Achievement <br className="hidden sm:block" />
        <span className="text-gray-400">Has a Story.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-lg text-gray-600 leading-relaxed max-w-[700px] mx-auto"
      >
        Every result represents dedication, consistent guidance, and a student's determination to succeed. We're proud to celebrate every milestone achieved at Athul's Maths Classroom.
      </motion.p>
    </div>
  );
}

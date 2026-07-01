"use client";

import { motion } from "motion/react";

export function FooterSignature() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="bg-[#09121D] py-4 text-center border-t border-[#09121D]"
    >
      <span className="text-gray-600/50 text-[10px] font-bold uppercase tracking-[0.2em] select-none">
        Empowering Students Through Better Mathematics Education.
      </span>
    </motion.div>
  );
}

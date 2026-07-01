"use client";

import { motion } from "motion/react";

export function DecorativeDivider() {
  return (
    <div className="flex justify-center items-center py-20">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-2 h-2 rounded-full bg-[#E31E24]/20 mx-4"
      >
        <div className="w-1 h-1 rounded-full bg-[#E31E24] m-[2px]" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      />
    </div>
  );
}

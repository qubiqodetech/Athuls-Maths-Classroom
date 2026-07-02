"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function SectionDivider() {
  return (
    <div className="flex justify-center items-center py-24">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-32 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
        className="mx-6 text-gray-300"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-32 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
      />
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { TRUST_CHIPS } from "./constants";

export function AboutTrustChips() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="flex flex-wrap items-center gap-2 mb-8"
    >
      {TRUST_CHIPS.map((chip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-full text-xs font-semibold text-gray-600 shadow-sm"
        >
          <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center shrink-0">
            <Check className="w-2.5 h-2.5 text-green-600" strokeWidth={3} />
          </div>
          {chip}
        </motion.div>
      ))}
    </motion.div>
  );
}

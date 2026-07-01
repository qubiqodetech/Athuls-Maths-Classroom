"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { TRUST_CHIPS } from "./constants";

export function TrustChips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-16 relative z-10">
      {TRUST_CHIPS.map((chip, index) => (
        <motion.div
          key={chip.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md transition-all"
        >
          <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
          </div>
          <span className="text-sm font-semibold text-gray-700">{chip.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

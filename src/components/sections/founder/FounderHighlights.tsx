"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { FOUNDER_HIGHLIGHTS } from "./constants";

export function FounderHighlights() {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-8 mb-12">
      {FOUNDER_HIGHLIGHTS.map((highlight, index) => (
        <motion.div
          key={highlight.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 hover:border-gray-200 hover:bg-gray-100 transition-colors cursor-default"
        >
          <Check className="w-3.5 h-3.5 text-[#E31E24]" strokeWidth={2.5} />
          <span className="text-sm font-medium text-gray-700">{highlight.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

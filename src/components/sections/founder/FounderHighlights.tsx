"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { FOUNDER_HIGHLIGHTS } from "./constants";

export function FounderHighlights() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      {FOUNDER_HIGHLIGHTS.map((highlight, index) => (
        <motion.div
          key={highlight.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          className="flex items-center gap-2.5 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all cursor-default"
        >
          <div className="w-5 h-5 rounded-full bg-[#E31E24]/10 flex items-center justify-center">
            <Check className="w-3 h-3 text-[#E31E24]" strokeWidth={3} />
          </div>
          <span className="text-sm font-medium text-gray-300">{highlight.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

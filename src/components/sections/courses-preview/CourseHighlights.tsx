"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { HIGHLIGHT_CHIPS } from "./constants";

export function CourseHighlights() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-24 relative z-10 max-w-5xl mx-auto px-4">
      {HIGHLIGHT_CHIPS.map((chip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm hover:border-gray-300 hover:shadow-md transition-all cursor-default group"
        >
          <div className="w-5 h-5 rounded-full bg-[#E31E24]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E31E24]/20 transition-colors">
            <Check className="w-3 h-3 text-[#E31E24]" strokeWidth={3} />
          </div>
          <span className="text-sm font-semibold text-gray-700">{chip}</span>
        </motion.div>
      ))}
    </div>
  );
}

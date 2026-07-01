"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { FACULTY_HIGHLIGHTS } from "./constants";

export function FacultyHighlights() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-24 relative z-10 max-w-5xl mx-auto px-4">
      {FACULTY_HIGHLIGHTS.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm hover:border-gray-200 hover:bg-gray-50 transition-colors cursor-default"
        >
          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-blue-600" strokeWidth={2.5} />
          </div>
          <span className="text-sm font-semibold text-gray-700">{highlight}</span>
        </motion.div>
      ))}
    </div>
  );
}

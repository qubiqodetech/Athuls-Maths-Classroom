"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { LEARNING_PRINCIPLES } from "./constants";

export function LearningPrinciples() {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-16 pb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {LEARNING_PRINCIPLES.map((principle, index) => (
          <motion.div
            key={principle.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:border-red-200 hover:shadow-md transition-all duration-300 group"
          >
            <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-gray-700 tracking-wide">
              {principle.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

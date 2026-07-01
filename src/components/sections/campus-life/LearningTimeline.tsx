"use client";

import { motion } from "motion/react";
import { LEARNING_TIMELINE } from "./constants";

export function LearningTimeline() {
  return (
    <div className="mb-24 relative max-w-5xl mx-auto hidden md:block">
      <div className="absolute top-8 left-12 right-12 h-[2px] bg-gray-100 -z-10" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-blue-100 via-blue-400 to-[#E31E24] origin-left -z-10"
      />
      
      <div className="flex justify-between items-start">
        {LEARNING_TIMELINE.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center group w-32"
            >
              <div className="w-16 h-16 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center mb-4 group-hover:border-blue-400 group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-300 relative">
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors relative z-10" />
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0D1B2A] transition-colors text-center">
                {step.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

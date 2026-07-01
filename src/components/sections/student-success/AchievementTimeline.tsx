"use client";

import { motion } from "motion/react";
import { TIMELINE_STEPS } from "./constants";

export function AchievementTimeline() {
  return (
    <div className="mt-32 mb-24 relative max-w-5xl mx-auto hidden md:block">
      <div className="absolute top-6 left-12 right-12 h-[2px] bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 -z-10" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-6 left-12 right-12 h-[2px] bg-gradient-to-r from-[#E31E24]/20 via-[#E31E24] to-[#E31E24]/20 origin-left -z-10"
      />
      
      <div className="flex justify-between items-start">
        {TIMELINE_STEPS.map((step, index) => {
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
              <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-100 flex items-center justify-center mb-4 group-hover:border-[#E31E24] group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#E31E24] transition-colors" />
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

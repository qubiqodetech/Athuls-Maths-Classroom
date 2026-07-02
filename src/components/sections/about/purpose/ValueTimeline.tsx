"use client";

import { motion } from "motion/react";
import { TIMELINE_STEPS } from "./constants";
import { ArrowRight } from "lucide-react";

export function ValueTimeline() {
  return (
    <div className="max-w-4xl mx-auto mt-24 mb-12 hidden md:block">
      <div className="flex items-center justify-between relative">
        {/* Animated Background Line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-100 -z-10" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-red-200 via-[#E31E24] to-red-200 origin-left -z-10"
        />

        {TIMELINE_STEPS.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white border-2 border-gray-100 rounded-full px-6 py-3 font-bold text-gray-700 tracking-wide shadow-sm"
            >
              {step.label}
            </motion.div>
            
            {index < TIMELINE_STEPS.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.15 }}
                className="text-[#E31E24]"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

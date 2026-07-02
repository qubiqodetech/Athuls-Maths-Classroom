"use client";

import { motion } from "motion/react";
import { CheckCircle2, MinusCircle } from "lucide-react";
import { TRADITIONAL_LEARNING, AMC_EXPERIENCE } from "./constants";

export function ComparisonPanel() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-32">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Traditional Learning Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-500 mb-8 text-center">
            Traditional Learning
          </h3>
          
          <ul className="space-y-6">
            {TRADITIONAL_LEARNING.map((point) => (
              <li key={point.id} className="flex items-start gap-4">
                <MinusCircle className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-lg">{point.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* The AMC Experience Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-red-100 shadow-2xl shadow-red-900/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent -z-10" />
          
          <h3 className="text-2xl font-bold text-[#0D1B2A] mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-gray-200 hidden sm:block" />
            The AMC Experience
            <span className="w-12 h-px bg-gray-200 hidden sm:block" />
          </h3>
          
          <ul className="space-y-6">
            {AMC_EXPERIENCE.map((point) => (
              <li key={point.id} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#E31E24] shrink-0 mt-0.5 drop-shadow-sm" />
                <span className="text-[#0D1B2A] font-semibold text-lg">{point.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

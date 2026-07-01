"use client";

import { motion } from "motion/react";
import { JourneyStepType } from "./types";

interface JourneyStepProps {
  step: JourneyStepType;
  index: number;
}

export function JourneyStep({ step, index }: JourneyStepProps) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center text-center lg:w-48 group"
    >
      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#E31E24]/30 group-hover:shadow-md transition-all duration-300">
        <Icon className="w-8 h-8 text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors" />
      </div>
      
      <div className="hidden lg:block absolute top-8 -right-24 w-48 h-[2px] bg-gradient-to-r from-gray-200 to-transparent -z-10 group-last:hidden" />
      <div className="hidden lg:block absolute top-8 -right-24 w-48 h-[2px] bg-[#E31E24] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out -z-10 group-last:hidden" />
      
      <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors">
        {index + 1}. {step.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed max-w-[280px] lg:max-w-none">
        {step.description}
      </p>
    </motion.div>
  );
}

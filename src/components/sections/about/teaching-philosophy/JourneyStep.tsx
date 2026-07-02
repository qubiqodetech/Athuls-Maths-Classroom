"use client";

import { motion } from "motion/react";
import { LearningStageType } from "./types";

interface JourneyStepProps {
  stage: LearningStageType;
  index: number;
  total: number;
}

export function JourneyStep({ stage, index, total }: JourneyStepProps) {
  const Icon = stage.icon;
  const isLast = index === total - 1;

  return (
    <div className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-0 group flex-1">
      {/* Connector Line (Mobile) */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-gray-200 to-transparent md:hidden" />
      )}

      {/* Number Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="hidden md:flex absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 tracking-widest uppercase"
      >
        Stage 0{index + 1}
      </motion.div>

      {/* Icon Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#E31E24] group-hover:shadow-md transition-all duration-300 relative z-10 md:mb-6"
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-[#E31E24] transition-colors" />
        
        {/* Mobile Stage Number Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0D1B2A] text-white rounded-full text-[10px] font-bold flex items-center justify-center md:hidden border-2 border-white">
          {index + 1}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        className="pb-10 md:pb-0 md:text-center mt-2 md:mt-0 flex-1"
      >
        <h4 className="text-xl font-bold text-[#0D1B2A] mb-2">{stage.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] md:mx-auto">
          {stage.description}
        </p>
      </motion.div>
    </div>
  );
}

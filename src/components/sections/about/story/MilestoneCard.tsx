"use client";

import { motion } from "motion/react";
import { MilestoneType } from "./types";

interface MilestoneCardProps {
  milestone: MilestoneType;
  index: number;
}

export function MilestoneCard({ milestone, index }: MilestoneCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0D1B2A]/5 transition-all duration-300 group text-center flex flex-col items-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-[#E31E24] mb-4 tracking-tight group-hover:scale-110 transition-transform duration-300">
        {milestone.value}
      </div>
      <h4 className="text-lg font-bold text-[#0D1B2A] mb-2 uppercase tracking-wide">
        {milestone.title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed">
        {milestone.description}
      </p>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import { RecognitionItem } from "./types";

interface RecognitionCardProps {
  item: RecognitionItem;
  index: number;
}

export function RecognitionCard({ item, index }: RecognitionCardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#E31E24]/30 shadow-sm hover:shadow-xl hover:shadow-[#E31E24]/5 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm">
          <Icon className="w-7 h-7 text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors duration-300">
          {item.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

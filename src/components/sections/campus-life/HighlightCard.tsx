"use client";

import { motion } from "motion/react";
import { HighlightCardType } from "./types";

interface HighlightCardProps {
  card: HighlightCardType;
  index: number;
}

export function HighlightCard({ card, index }: HighlightCardProps) {
  const Icon = card.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col items-start"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E31E24] transition-all duration-300">
        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
      </div>
      
      <h4 className="text-xl font-bold text-[#0D1B2A] mb-3">
        {card.title}
      </h4>
      
      <p className="text-gray-600 leading-relaxed text-sm">
        {card.description}
      </p>
    </motion.div>
  );
}

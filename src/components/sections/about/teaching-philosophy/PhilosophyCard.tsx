"use client";

import { motion } from "motion/react";
import { PhilosophyCardType } from "./types";

interface PhilosophyCardProps {
  card: PhilosophyCardType;
  index: number;
}

export function PhilosophyCard({ card, index }: PhilosophyCardProps) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0D1B2A]/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-300 border border-gray-100 group-hover:border-red-100">
        <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#E31E24] transition-colors" />
      </div>
      
      <h4 className="text-lg font-bold text-[#0D1B2A] mb-3">
        {card.title}
      </h4>
      
      <p className="text-gray-500 leading-relaxed text-sm">
        {card.description}
      </p>
    </motion.div>
  );
}

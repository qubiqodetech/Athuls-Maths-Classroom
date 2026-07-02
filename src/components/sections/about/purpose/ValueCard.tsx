"use client";

import { motion } from "motion/react";
import { ValueType } from "./types";

interface ValueCardProps {
  value: ValueType;
  index: number;
}

export function ValueCard({ value, index }: ValueCardProps) {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 -z-10" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-white group-hover:border-red-100 group-hover:shadow-sm transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#E31E24] transition-colors" />
      </div>
      
      <h4 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors">
        {value.title}
      </h4>
      
      <p className="text-gray-500 leading-relaxed text-sm">
        {value.description}
      </p>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import { FeatureType } from "./types";

interface FeatureCardProps {
  feature: FeatureType;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-red-50 group-hover:border-red-100 transition-all duration-300">
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#E31E24] transition-colors" />
      </div>
      
      <h4 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors">
        {feature.title}
      </h4>
      
      <p className="text-gray-500 leading-relaxed text-sm">
        {feature.description}
      </p>
    </motion.div>
  );
}

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
      className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#E31E24]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 group-hover:bg-[#E31E24]/5 duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] text-white flex items-center justify-center mb-6 shadow-md group-hover:bg-[#E31E24] transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

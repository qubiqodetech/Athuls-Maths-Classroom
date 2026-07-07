"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Award } from "lucide-react";

interface ResultProps {
  id: string;
  name: string;
  class: string;
  year: string;
  result: string;
  achievement: string;
  image: string;
}

interface ResultCardProps {
  result: ResultProps;
  index: number;
}

export function ResultCard({ result, index }: ResultCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] hover:shadow-2xl hover:shadow-[#0D1B2A]/5 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F8FAFC]">
        <Image
          src={result.image}
          alt={result.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm transform translate-y-0 opacity-100">
          <Award className="w-3.5 h-3.5 text-[#E31E24]" />
          <span className="text-xs font-bold text-[#0D1B2A] tracking-wide">
            {result.result}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[#E31E24] font-semibold text-sm mb-1">
            {result.achievement}
          </span>
          <h4 className="font-display text-2xl font-bold text-white mb-2">
            {result.name}
          </h4>
          <div className="flex items-center gap-3 text-white/80 text-sm font-medium">
            <span>{result.class}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>{result.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

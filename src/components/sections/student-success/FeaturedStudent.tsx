"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FEATURED_STUDENT } from "./constants";
import { Award } from "lucide-react";

export function FeaturedStudent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto mb-20 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 items-center relative z-10">
        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-inner">
          <Image
            src={FEATURED_STUDENT.image}
            alt={FEATURED_STUDENT.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold tracking-wider uppercase mb-6 w-fit border border-yellow-200">
            <Award className="w-3.5 h-3.5" />
            Spotlight Achievement
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-2">
            {FEATURED_STUDENT.name}
          </h3>
          
          <div className="text-gray-500 mb-6 font-medium">
            {FEATURED_STUDENT.class} • {FEATURED_STUDENT.year}
          </div>
          
          <div className="text-4xl lg:text-5xl font-bold text-[#E31E24] tracking-tight mb-4">
            {FEATURED_STUDENT.achievement}
          </div>
          
          <div className="text-xl text-[#0D1B2A] font-semibold mb-6">
            {FEATURED_STUDENT.highlight}
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg">
            "{FEATURED_STUDENT.story}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

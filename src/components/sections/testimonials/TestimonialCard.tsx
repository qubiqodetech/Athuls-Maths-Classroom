"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { TestimonialType } from "./types";

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0D1B2A]/5 hover:-translate-y-1 hover:border-gray-200 transition-all duration-500 group flex flex-col h-full relative"
    >
      <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#E31E24]/10 transition-colors duration-500">
        <Quote className="w-12 h-12" fill="currentColor" />
      </div>
      
      <div className="flex items-center gap-1 mb-6 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
        ))}
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-8 flex-1 relative z-10">
        "{testimonial.review}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto relative z-10 border-t border-gray-50 pt-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div className="font-bold text-[#0D1B2A] text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs font-medium text-gray-500">
            {testimonial.role} • {testimonial.course}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { FEATURED_TESTIMONIAL } from "./constants";

export function FeaturedTestimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto mb-16 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="grid md:grid-cols-[40%_60%] gap-8 lg:gap-12 p-8 lg:p-12 items-center relative z-10">
        <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-inner">
          <Image
            src={FEATURED_TESTIMONIAL.image}
            alt={FEATURED_TESTIMONIAL.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
            <Quote className="w-5 h-5 text-[#E31E24]" fill="currentColor" />
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1 mb-6">
            {[...Array(FEATURED_TESTIMONIAL.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
            ))}
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-[#0D1B2A] mb-6 leading-snug">
            "{FEATURED_TESTIMONIAL.highlight}"
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {FEATURED_TESTIMONIAL.review}
          </p>
          
          <div className="flex items-center justify-between border-t border-gray-100 pt-6">
            <div>
              <div className="font-bold text-[#0D1B2A] text-lg">
                {FEATURED_TESTIMONIAL.name}
              </div>
              <div className="text-gray-500 font-medium">
                {FEATURED_TESTIMONIAL.role} • {FEATURED_TESTIMONIAL.course}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

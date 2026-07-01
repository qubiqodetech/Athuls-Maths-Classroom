"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VIDEO_TESTIMONIAL } from "./constants";

export function VideoTestimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto mb-20 group cursor-pointer"
    >
      <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
        <Image
          src={VIDEO_TESTIMONIAL.thumbnail}
          alt={`Video testimonial by ${VIDEO_TESTIMONIAL.studentName}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <Play className="w-6 h-6 text-[#0D1B2A] ml-1 group-hover:text-[#E31E24] transition-colors" fill="currentColor" />
            </div>
          </motion.div>
        </div>
        
        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex items-end justify-between">
          <div>
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-white/20">
              Student Story
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {VIDEO_TESTIMONIAL.studentName}
            </h3>
            <p className="text-gray-200 font-medium">
              {VIDEO_TESTIMONIAL.course}
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-white font-medium bg-[#0D1B2A]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <Play className="w-4 h-4" />
            Watch Story ({VIDEO_TESTIMONIAL.duration})
          </div>
        </div>
      </div>
    </motion.div>
  );
}

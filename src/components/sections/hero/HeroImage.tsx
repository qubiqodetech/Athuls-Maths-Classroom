"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FloatingCards } from "./FloatingCards";

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white rounded-[3rem] transform rotate-3 scale-105 border border-gray-100 shadow-sm" />
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-50 to-white rounded-[3rem] transform -rotate-2 scale-105 border border-gray-100 shadow-sm" />
      
      {/* Main Image Container */}
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border-[6px] border-white z-10 bg-gray-100">
        <Image
          src="https://picsum.photos/seed/amc-classroom/1200/1600"
          alt="Students learning mathematics in a modern classroom"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 to-transparent" />
      </div>

      <FloatingCards />
    </motion.div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FloatingCards } from "./FloatingCards";

export function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] flex items-center justify-center perspective-1000"
    >
      <motion.div 
        style={{ y, scale }}
        className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-[4px] border-white/60 bg-gray-100 z-10"
      >
        <Image
          src="https://picsum.photos/seed/amc-classroom-wide/1600/900"
          alt="Students learning mathematics in a modern classroom"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-[#0D1B2A]/10 to-transparent" />
      </motion.div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] bg-[#E31E24]/10 rounded-[3rem] blur-[80px] -z-10" />

      {/* Floating Cards */}
      <div className="hidden md:block">
        <FloatingCards />
      </div>
    </motion.div>
  );
}

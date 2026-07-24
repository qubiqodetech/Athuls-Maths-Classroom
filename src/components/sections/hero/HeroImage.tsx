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

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1100px] mx-auto mt-16 lg:mt-24 perspective-1000"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[90%] bg-[#E31E24]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <motion.div 
        style={{ y, scale }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] p-2.5 sm:p-4 bg-white/40 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/60"
      >
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-100 shadow-2xl ring-1 ring-black/5">
          <Image
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
            alt="Students learning mathematics in a modern classroom"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-[#0D1B2A]/10 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E31E24]/20 via-transparent to-transparent opacity-50 mix-blend-overlay" />
        </div>
      </motion.div>
      
      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCards />
      </div>
    </div>
  );
}

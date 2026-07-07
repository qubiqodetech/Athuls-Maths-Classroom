"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FloatingCards } from "./FloatingCards";

export function HeroVisual() {
  return (
    <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full lg:w-[90%] h-full rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        <Image
          src="https://picsum.photos/seed/galleryhero/1200/1600"
          alt="Students learning at Athul's Maths Classroom"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/10 mix-blend-overlay" />
        
        {/* Gradient for text readability if floating cards overlap */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-transparent opacity-60" />
      </motion.div>

      <FloatingCards />
    </div>
  );
}

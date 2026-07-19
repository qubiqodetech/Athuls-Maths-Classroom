"use client";

import { motion } from "motion/react";
import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroTrustIndicators } from "./HeroTrustIndicators";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full z-20 relative">
      <HeroBadge />
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-[40px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-[#0D1B2A] mb-6"
      >
        Building <span className="text-[#E31E24] inline-block">Strong Foundations</span> <br className="hidden md:block" />
        in Mathematics
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
      >
        Helping students build confidence, strengthen concepts, and achieve
        academic excellence through expert guidance.
      </motion.p>

      <HeroButtons />
      <HeroTrustIndicators />
    </div>
  );
}

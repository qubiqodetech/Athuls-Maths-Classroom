"use client";

import { motion } from "motion/react";
import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { HeroStats } from "./HeroStats";
import { HeroTrustIndicators } from "./HeroTrustIndicators";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center h-full max-w-2xl lg:pr-12 pt-20 lg:pt-0">
      <HeroBadge />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="text-5xl lg:text-7xl font-bold tracking-tight text-[#0D1B2A] leading-[1.1] mb-8"
      >
        Building <br />
        <span className="text-[#E31E24]">Strong Foundations</span> <br />
        in Mathematics.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-[650px]"
      >
        Helping students build confidence, strengthen concepts, and achieve
        academic excellence through expert guidance and personalized learning.
      </motion.p>

      <HeroButtons />
      <HeroTrustIndicators />
      <HeroStats />
    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TrustHeading } from "./TrustHeading";
import { StatsGrid } from "./StatsGrid";
import { RecognitionGrid } from "./RecognitionGrid";
import { TrustChips } from "./TrustChips";
import { AchievementRibbon } from "./AchievementRibbon";

export function TrustSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 bg-white overflow-hidden border-b border-gray-100">
      <AchievementRibbon />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <motion.div style={{ y: y1 }}>
          <TrustHeading />
        </motion.div>
        
        <motion.div style={{ y: y2 }}>
          <RecognitionGrid />
          <TrustChips />
        </motion.div>
      </div>
    </section>
  );
}

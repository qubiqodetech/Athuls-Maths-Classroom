"use client";

import { motion } from "motion/react";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { ScrollIndicator } from "./ScrollIndicator";

export function ResultsHero() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0D1B2A]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#E31E24]/5 via-transparent to-transparent" />
        
        {/* Abstract Geometric Shapes */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] right-[10%] w-[40rem] h-[40rem] border border-[#0D1B2A]/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[10%] -left-[10%] w-[50rem] h-[50rem] border border-[#E31E24]/5 rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1280px] px-4 md:px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

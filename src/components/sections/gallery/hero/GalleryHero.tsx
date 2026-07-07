"use client";

import { motion } from "motion/react";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { ScrollIndicator } from "./ScrollIndicator";

export function GalleryHero() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0D1B2A]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#E31E24]/5 via-transparent to-transparent" />
        
        {/* Minimal geometric accents */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 border-[0.5px] border-[#0D1B2A]/10 rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-96 h-96 border-[0.5px] border-[#E31E24]/10 rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1320px] px-4 md:px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

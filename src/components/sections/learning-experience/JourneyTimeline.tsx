"use client";

import { motion } from "motion/react";
import { JOURNEY_STEPS } from "./constants";
import { JourneyStep } from "./JourneyStep";

export function JourneyTimeline() {
  return (
    <div className="relative mb-32 max-w-6xl mx-auto">
      {/* Mobile vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-100 lg:hidden" />
      
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-4 relative">
        {/* Desktop line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-8 left-12 right-12 h-[2px] bg-gradient-to-r from-[#E31E24]/20 via-[#E31E24]/50 to-[#E31E24]/20 hidden lg:block origin-left z-0"
        />
        
        {JOURNEY_STEPS.map((step, index) => (
          <JourneyStep key={step.id} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}

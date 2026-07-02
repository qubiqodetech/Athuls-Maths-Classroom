"use client";

import { motion } from "motion/react";
import { LEARNING_STAGES } from "./constants";
import { JourneyStep } from "./JourneyStep";

export function LearningJourney() {
  return (
    <div className="mb-24 relative max-w-6xl mx-auto px-4 mt-20 md:mt-32">
      {/* Desktop Connector Line */}
      <div className="hidden md:block absolute top-[2rem] left-[10%] right-[10%] h-px bg-gray-100 -z-10" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden md:block absolute top-[2rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-gray-100 via-red-200 to-[#E31E24] origin-left -z-10"
      />

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative pt-4">
        {LEARNING_STAGES.map((stage, index) => (
          <JourneyStep 
            key={stage.id} 
            stage={stage} 
            index={index} 
            total={LEARNING_STAGES.length} 
          />
        ))}
      </div>
    </div>
  );
}

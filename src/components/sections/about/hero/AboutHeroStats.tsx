"use client";

import { motion } from "motion/react";
import { FLOATING_CARDS } from "./constants";

export function AboutHeroStats() {
  return (
    <>
      {FLOATING_CARDS.map((stat, index) => {
        let positionClasses = "";
        
        switch (stat.position) {
          case "top":
            positionClasses = "top-10 -left-12 md:-left-16";
            break;
          case "middle":
            positionClasses = "bottom-32 -right-8 md:-right-12";
            break;
          case "bottom":
            positionClasses = "-bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-10 md:-left-10";
            break;
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1 + index * 0.2, 
              ease: "easeOut"
            }}
            className={`absolute ${positionClasses} bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-xl border border-white/40 z-20 flex flex-col items-center md:items-start`}
          >
            <div className="text-xl md:text-2xl font-bold text-[#E31E24] tracking-tight mb-1">
              {stat.value}
            </div>
            <div className="text-[10px] md:text-xs font-semibold text-[#0D1B2A] uppercase tracking-wider whitespace-pre-line text-center md:text-left leading-tight">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

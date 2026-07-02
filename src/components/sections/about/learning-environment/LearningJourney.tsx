"use client";

import { motion } from "motion/react";
import { LEARNING_JOURNEY } from "./constants";

export function LearningJourney() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-32 py-16 bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent opacity-80 pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">The Learning Flow</h3>
      </div>

      <div className="relative z-10">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -translate-y-1/2">
          <motion.div 
            className="h-full bg-[#E31E24]"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative px-8">
          {LEARNING_JOURNEY.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center relative group"
              >
                {/* Connecting Line (Mobile) */}
                {index !== LEARNING_JOURNEY.length - 1 && (
                  <div className="md:hidden absolute top-16 bottom-[-2rem] left-1/2 w-0.5 bg-gray-200 -translate-x-1/2 -z-10" />
                )}
                
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border-2 border-gray-100 shadow-sm mb-4 relative z-10 group-hover:border-[#E31E24] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors" />
                </div>
                
                <span className="text-sm font-bold text-gray-600 text-center uppercase tracking-wide group-hover:text-[#0D1B2A] transition-colors">
                  {step.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

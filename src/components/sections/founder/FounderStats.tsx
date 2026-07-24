"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FOUNDER_STATS } from "./constants";

export function FounderStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className="grid grid-cols-2 gap-6 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#E31E24]/5 to-transparent pointer-events-none" />
      
      {FOUNDER_STATS.map((stat, index) => {
        const numericMatch = stat.value.match(/(\d+)/);
        const number = numericMatch ? parseInt(numericMatch[0], 10) : 0;
        const suffix = stat.value.split(/\d+/)[1] || "";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col relative z-10"
          >
            <div className="text-4xl font-bold text-white tracking-tight mb-2">
              {inView ? (
                <CountUp end={number} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              <span className="text-[#E31E24]">{suffix}</span>
            </div>
            <div className="text-sm font-semibold tracking-wide uppercase text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

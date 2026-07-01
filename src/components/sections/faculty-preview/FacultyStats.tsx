"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FACULTY_STATS } from "./constants";

export function FacultyStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto mb-24 relative z-10"
    >
      {FACULTY_STATS.map((stat, index) => {
        const numericMatch = stat.value.match(/(\d+)/);
        const number = numericMatch ? parseInt(numericMatch[0], 10) : 0;
        const prefix = stat.value.split(/\d+/)[0] || "";
        const suffix = stat.value.split(/\d+/)[1] || "";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl md:text-5xl font-bold text-[#0D1B2A] tracking-tight mb-2 flex items-center justify-center">
              {prefix}
              {inView ? (
                <CountUp end={number} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              <span className="text-[#E31E24]">{suffix}</span>
            </div>
            <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

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
      className="grid grid-cols-2 gap-6 mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
    >
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
            className="flex flex-col"
          >
            <div className="text-3xl font-bold text-[#0D1B2A] tracking-tight mb-1">
              {inView ? (
                <CountUp end={number} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              <span className="text-[#E31E24]">{suffix}</span>
            </div>
            <div className="text-sm font-medium text-gray-500">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

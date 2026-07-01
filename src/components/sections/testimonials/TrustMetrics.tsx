"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TRUST_METRICS } from "./constants";

export function TrustMetrics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto mb-20 relative z-10"
    >
      {TRUST_METRICS.map((metric, index) => {
        const numericMatch = metric.value.match(/(\d+)/);
        const number = numericMatch ? parseInt(numericMatch[0], 10) : 0;
        const prefix = metric.value.split(/\d+/)[0] || "";
        const suffix = metric.value.split(/\d+/)[1] || "";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center text-center p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm"
          >
            <div className="text-3xl md:text-5xl font-bold text-[#E31E24] tracking-tight mb-2 flex items-center justify-center">
              {prefix}
              {inView ? (
                <CountUp end={number} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              {suffix}
            </div>
            <div className="text-xs md:text-sm font-semibold text-[#0D1B2A] uppercase tracking-wide">
              {metric.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { HERO_STATS } from "./constants";

export function HeroStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-gray-100/60"
    >
      {HERO_STATS.map((stat, index) => {
        // Extract number and suffix/prefix if needed, for simplicity we just animate if it's a number,
        // but since values have "+", "%", let's handle it manually or let CountUp handle basic numbers.
        // Actually, CountUp handles simple strings if we extract correctly, or we can just render the value directly
        // and let motion reveal it.
        const numericMatch = stat.value.match(/(\d+)/);
        const number = numericMatch ? parseInt(numericMatch[0], 10) : 0;
        const prefix = stat.value.split(/\d+/)[0] || "";
        const suffix = stat.value.split(/\d+/)[1] || "";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            className="flex flex-col gap-1"
          >
            <div className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] tracking-tight">
              {prefix}
              {inView ? (
                <CountUp end={number} duration={2.5} separator="," />
              ) : (
                "0"
              )}
              {suffix}
            </div>
            <div className="text-sm font-medium text-gray-500">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

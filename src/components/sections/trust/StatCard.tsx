"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TrustStat } from "./types";

interface StatCardProps {
  stat: TrustStat;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const numericMatch = stat.value.match(/(\d+)/);
  const number = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = stat.value.split(/\d+/)[0] || "";
  const suffix = stat.value.split(/\d+/)[1] || "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#E31E24] tracking-tight mb-2 flex items-center justify-center">
        {prefix}
        {inView ? (
          <CountUp end={number} duration={2.5} separator="," />
        ) : (
          "0"
        )}
        {suffix}
      </div>
      <div className="text-sm md:text-base font-semibold text-[#0D1B2A] uppercase tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  );
}

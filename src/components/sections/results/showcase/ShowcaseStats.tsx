"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { stats } from "./data";

export function ShowcaseStats() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB]/50"
        >
          <span className="text-4xl md:text-5xl font-bold font-display text-[#0D1B2A] mb-2">
            {isMounted ? (
              <CountUp start={0} end={stat.value} duration={2.5} separator="," />
            ) : (
              "0"
            )}
            <span className="text-[#E31E24]">{stat.suffix}</span>
          </span>
          <span className="text-sm md:text-base font-medium text-muted-foreground">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

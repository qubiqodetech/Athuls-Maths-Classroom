"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Students" },
  { value: 1500, suffix: "+", label: "A+ Results" },
  { value: 10, suffix: "+", label: "Years" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export function CTAStats() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col hover:bg-white/10 transition-colors"
        >
          <span className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">
            {isMounted ? (
              <CountUp start={0} end={stat.value} duration={2.5} separator="," />
            ) : (
              stat.value
            )}
            <span className="text-[#E31E24]">{stat.suffix}</span>
          </span>
          <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

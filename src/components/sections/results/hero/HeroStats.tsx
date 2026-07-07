"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Students Mentored" },
  { value: 100, suffix: "+", label: "Outstanding Results" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
];

export function HeroStats() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:bg-white/60 transition-colors duration-300"
        >
          <div className="flex flex-col">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight text-[#0D1B2A] mb-1 font-display">
              {isMounted ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  delay={0.5}
                />
              ) : (
                "0"
              )}
              <span className="text-[#E31E24]">{stat.suffix}</span>
            </span>
            <span className="text-sm font-medium text-muted-foreground leading-snug">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ACHIEVEMENTS } from "./constants";

export function AchievementStrip() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4 mb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center group hover:border-red-100 transition-colors"
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-2 font-serif group-hover:text-[#E31E24] transition-colors">
              {inView && achievement.value.includes("+") ? (
                <>
                  <CountUp 
                    end={parseInt(achievement.value.replace("+", ""), 10)} 
                    duration={2.5} 
                    separator=","
                  />
                  +
                </>
              ) : (
                achievement.value
              )}
            </div>
            <div className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-wide">
              {achievement.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

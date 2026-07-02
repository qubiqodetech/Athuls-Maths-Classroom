"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CONFIDENCE_METRICS } from "./constants";

export function ConfidenceMetrics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4 mb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {CONFIDENCE_METRICS.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="text-4xl lg:text-5xl font-bold text-[#E31E24] mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">
              {inView ? (
                <>
                  <CountUp 
                    end={parseInt(metric.value.replace(/[^0-9]/g, ""), 10)} 
                    duration={2.5} 
                    separator=","
                  />
                  {metric.value.replace(/[0-9]/g, "")}
                </>
              ) : (
                metric.value
              )}
            </div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

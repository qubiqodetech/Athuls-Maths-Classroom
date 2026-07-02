"use client";

import { motion } from "motion/react";
import { MILESTONES } from "./constants";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 mb-32">
      {/* Central Line (Desktop) */}
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2 origin-top -z-10"
      />

      <div className="relative py-12">
        {MILESTONES.map((milestone, index) => (
          <TimelineItem 
            key={milestone.id} 
            milestone={milestone} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { TIMELINE_ITEMS } from "./constants";
import { TimelineItem } from "./TimelineItem";

export function StoryTimeline() {
  return (
    <div className="relative lg:pl-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 block">
          Timeline
        </span>
        <h3 className="text-2xl font-bold text-[#0D1B2A]">
          Milestones of Growth
        </h3>
      </motion.div>

      <div className="relative">
        {TIMELINE_ITEMS.map((item, index) => (
          <TimelineItem 
            key={item.id} 
            item={item} 
            index={index} 
            isLast={index === TIMELINE_ITEMS.length - 1} 
          />
        ))}
      </div>
    </div>
  );
}

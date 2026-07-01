"use client";

import { motion } from "motion/react";
import { TimelineItemType } from "./types";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const Icon = item.icon;

  return (
    <div className="relative flex gap-6 pb-12 last:pb-0 group">
      {/* Connecting Line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-gray-200 to-transparent origin-top -z-10"
        />
      )}

      {/* Icon Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#E31E24] group-hover:shadow-md transition-all duration-300 relative z-10"
      >
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#E31E24] transition-colors" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
        className="pt-2"
      >
        {item.year && (
          <span className="inline-block px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-bold tracking-wider rounded-md mb-2 border border-gray-100">
            {item.year}
          </span>
        )}
        <h4 className="text-lg font-bold text-[#0D1B2A] mb-2">{item.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

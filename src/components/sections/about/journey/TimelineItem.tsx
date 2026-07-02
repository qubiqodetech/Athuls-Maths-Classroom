"use client";

import { motion } from "motion/react";
import { MilestoneType } from "./types";
import { MilestoneCard } from "./MilestoneCard";

interface TimelineItemProps {
  milestone: MilestoneType;
  index: number;
}

export function TimelineItem({ milestone, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-24 group">
      {/* Connector Line to Next Item (Mobile) */}
      <div className="absolute left-6 top-16 bottom-[-4rem] w-px bg-gray-200 md:hidden" />

      {/* Timeline Node (Center on Desktop, Left on Mobile) */}
      <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-200 rounded-full z-10 group-hover:border-[#E31E24] group-hover:scale-150 transition-all duration-300 shadow-sm" />

      {/* Content Container (Alternating on Desktop) */}
      <div className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MilestoneCard milestone={milestone} />
        </motion.div>
      </div>
      
      {/* Connector Line (Desktop) */}
      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-px bg-gray-200 -z-10 ${isEven ? "right-[calc(50%-3rem)]" : "left-[calc(50%-3rem)]"}`} />
    </div>
  );
}

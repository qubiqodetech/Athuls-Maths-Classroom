"use client";

import { motion } from "motion/react";
import { REVIEW_FILTERS } from "./constants";

interface ReviewFiltersProps {
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

export function ReviewFilters({ activeFilter, onFilterChange }: ReviewFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12 relative z-10 max-w-4xl mx-auto px-4">
      {REVIEW_FILTERS.map((filter, index) => {
        const isActive = activeFilter === filter.id;
        
        return (
          <motion.button
            key={filter.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            onClick={() => onFilterChange(filter.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              isActive 
                ? "bg-[#0D1B2A] text-white shadow-md border border-[#0D1B2A]" 
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            {filter.label}
          </motion.button>
        );
      })}
    </div>
  );
}

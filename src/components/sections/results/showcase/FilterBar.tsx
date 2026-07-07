"use client";

import { motion } from "motion/react";
import { filters } from "./data";
import { cn } from "@/src/lib/utils";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center gap-2 p-1.5 bg-[#F8FAFC] rounded-full overflow-x-auto max-w-full scrollbar-hide border border-[#E5E7EB]">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={cn(
              "relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
              activeFilter === filter
                ? "text-white"
                : "text-muted-foreground hover:text-[#0D1B2A]"
            )}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="active-filter-bg"
                className="absolute inset-0 bg-[#0D1B2A] rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

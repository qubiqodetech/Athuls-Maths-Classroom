"use client";

import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center gap-2 p-1.5 bg-white rounded-full overflow-x-auto max-w-full scrollbar-hide border border-[#E5E7EB]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "relative px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
              activeCategory === category
                ? "text-white"
                : "text-muted-foreground hover:text-[#0D1B2A]"
            )}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="gallery-active-filter"
                className="absolute inset-0 bg-[#0D1B2A] rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

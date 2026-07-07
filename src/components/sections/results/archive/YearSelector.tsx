"use client";

import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface YearSelectorProps {
  years: { id: string; year: string }[];
  activeYear: string;
  onSelectYear: (id: string) => void;
}

export function YearSelector({ years, activeYear, onSelectYear }: YearSelectorProps) {
  return (
    <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide border-b lg:border-b-0 lg:border-l border-[#E5E7EB]">
      {years.map((year, index) => {
        const isActive = activeYear === year.id;
        return (
          <button
            key={year.id}
            onClick={() => onSelectYear(year.id)}
            className={cn(
              "relative px-6 lg:px-8 py-3 text-left transition-colors whitespace-nowrap lg:whitespace-normal group flex items-center gap-4",
              isActive ? "text-[#0D1B2A]" : "text-muted-foreground hover:text-[#0D1B2A]"
            )}
          >
            {/* Desktop Indicator line */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 -ml-[1px]">
              {isActive && (
                <motion.div
                  layoutId="active-year-indicator-desktop"
                  className="absolute inset-y-0 left-0 w-full bg-[#E31E24]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>

            {/* Mobile Indicator line */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 h-0.5 -mb-[1px]">
              {isActive && (
                <motion.div
                  layoutId="active-year-indicator-mobile"
                  className="absolute inset-x-0 bottom-0 h-full bg-[#E31E24]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
            
            <span className={cn(
              "font-display text-xl sm:text-2xl font-bold transition-all duration-300",
              isActive ? "scale-105" : ""
            )}>
              {year.year}
            </span>
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "motion/react";
import { resultsData } from "./data";
import { ResultCard } from "./ResultCard";

interface AchievementGridProps {
  activeFilter: string;
}

export function AchievementGrid({ activeFilter }: AchievementGridProps) {
  const filteredResults = resultsData.filter((result) => 
    activeFilter === "All" ? true : result.class === activeFilter
  );

  return (
    <motion.div 
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {filteredResults.map((result, index) => (
          <ResultCard key={result.id} result={result} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

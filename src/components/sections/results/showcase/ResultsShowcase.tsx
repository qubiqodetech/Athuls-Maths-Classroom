"use client";

import { motion } from "motion/react";
import { ShowcaseHeader } from "./ShowcaseHeader";
import { ShowcaseStats } from "./ShowcaseStats";
import { FeaturedStudent } from "./FeaturedStudent";
import { FilterBar } from "./FilterBar";
import { AchievementGrid } from "./AchievementGrid";
import { RecognitionRibbon } from "./RecognitionRibbon";
import { useState } from "react";

export function ResultsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section id="explore" className="relative bg-white pt-24 pb-32 overflow-hidden">
      <RecognitionRibbon />
      
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 pt-24">
        <ShowcaseHeader />
        <ShowcaseStats />
        <FeaturedStudent />
        
        <div className="mt-32">
          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <AchievementGrid activeFilter={activeFilter} />
        </div>
      </div>
    </section>
  );
}

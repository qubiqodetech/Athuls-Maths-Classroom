"use client";

import { TRUST_STATS } from "./constants";
import { StatCard } from "./StatCard";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative z-10 max-w-5xl mx-auto">
      {TRUST_STATS.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
}

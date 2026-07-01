"use client";

import { FEATURES } from "./constants";
import { FeatureCard } from "./FeatureCard";

export function FeatureGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
      {FEATURES.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
}

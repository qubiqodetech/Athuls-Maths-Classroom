import { FEATURE_HIGHLIGHTS } from "./constants";
import { FeatureCard } from "./FeatureCard";

export function FeatureHighlights() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-32">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {FEATURE_HIGHLIGHTS.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}

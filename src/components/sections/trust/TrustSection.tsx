import { TrustHeading } from "./TrustHeading";
import { StatsGrid } from "./StatsGrid";
import { RecognitionGrid } from "./RecognitionGrid";
import { TrustChips } from "./TrustChips";
import { AchievementRibbon } from "./AchievementRibbon";

export function TrustSection() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 bg-white overflow-hidden border-b border-gray-100">
      <AchievementRibbon />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <TrustHeading />
        <RecognitionGrid />
        <TrustChips />
      </div>
    </section>
  );
}

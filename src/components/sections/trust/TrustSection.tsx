import { TrustHeading } from "./TrustHeading";
import { StatsGrid } from "./StatsGrid";
import { RecognitionGrid } from "./RecognitionGrid";
import { TrustChips } from "./TrustChips";
import { AchievementRibbon } from "./AchievementRibbon";

export function TrustSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      <AchievementRibbon />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <TrustHeading />
        <StatsGrid />
        <RecognitionGrid />
        <TrustChips />
      </div>
    </section>
  );
}

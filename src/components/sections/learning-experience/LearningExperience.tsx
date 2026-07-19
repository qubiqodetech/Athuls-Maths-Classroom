import { LearningHeading } from "./LearningHeading";
import { JourneyTimeline } from "./JourneyTimeline";
import { FeatureGrid } from "./FeatureGrid";

export function LearningExperience() {
  return (
    <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 bg-gray-50/50 overflow-hidden border-b border-gray-100">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/5 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0D1B2A 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <LearningHeading />
        <JourneyTimeline />
        <FeatureGrid />
      </div>
    </section>
  );
}

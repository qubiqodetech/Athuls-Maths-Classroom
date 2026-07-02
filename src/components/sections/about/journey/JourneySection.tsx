"use client";

import { SectionHeading } from "./SectionHeading";
import { Timeline } from "./Timeline";
import { AchievementStrip } from "./AchievementStrip";
import { GrowthIllustration } from "./GrowthIllustration";
import { FutureVisionCard } from "./FutureVisionCard";

export function JourneySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50/50 via-transparent to-transparent opacity-80 pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <SectionHeading />
        <Timeline />
        <AchievementStrip />
        <GrowthIllustration />
        <FutureVisionCard />
      </div>
    </section>
  );
}

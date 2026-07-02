"use client";

import { SectionHeading } from "./SectionHeading";
import { MissionBlock } from "./MissionBlock";
import { VisionBlock } from "./VisionBlock";
import { ValuesGrid } from "./ValuesGrid";
import { BrandManifesto } from "./BrandManifesto";
import { ValueTimeline } from "./ValueTimeline";

export function PurposeSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <SectionHeading />
        <MissionBlock />
        <VisionBlock />
        <ValuesGrid />
        <BrandManifesto />
        <ValueTimeline />
      </div>
    </section>
  );
}

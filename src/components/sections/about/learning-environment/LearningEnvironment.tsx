"use client";

import { SectionHeading } from "./SectionHeading";
import { EditorialGallery } from "./EditorialGallery";
import { FeatureGrid } from "./FeatureGrid";
import { ClassroomExperience } from "./ClassroomExperience";
import { LearningJourney } from "./LearningJourney";
import { ComfortBanner } from "./ComfortBanner";
import { FacilitiesGrid } from "./FacilitiesGrid";

export function LearningEnvironment() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50/80 via-transparent to-transparent opacity-80 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <SectionHeading />
        
        <div id="gallery-section">
          <EditorialGallery />
        </div>
        
        <FeatureGrid />
        <ClassroomExperience />
        <LearningJourney />
        <ComfortBanner />
        <FacilitiesGrid />
      </div>
    </section>
  );
}

"use client"

import { SectionHeader } from "./SectionHeader"
import { QualificationDashboard } from "./QualificationDashboard"
import { ExpertiseChips } from "./ExpertiseChips"
import { ExperienceTimeline } from "./ExperienceTimeline"
import { Certifications } from "./Certifications"
import { ExcellenceStats } from "./ExcellenceStats"
import { PhilosophyQuote } from "./PhilosophyQuote"

export function ExcellenceSection() {
  return (
    <>
      <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="excellence">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start mb-24">
            <div className="sticky top-24">
              <SectionHeader />
            </div>
            <div>
              <QualificationDashboard />
            </div>
          </div>

          <ExpertiseChips />
          
          <div className="mt-12">
            <ExperienceTimeline />
          </div>

          <div className="mt-12">
            <Certifications />
          </div>
        </div>
      </section>

      <ExcellenceStats />
      <PhilosophyQuote />
    </>
  )
}

"use client"

import { AdmissionCTA } from "@/src/components/courses"
import { CoursesHero } from "@/src/components/sections/courses/hero"
import { ProgramExplorer } from "@/src/components/sections/courses/program-explorer"
import { LearningJourneySection } from "@/src/components/sections/courses/learning-journey"
import { CompareSection } from "@/src/components/sections/courses/compare"
import { AdmissionsSection } from "@/src/components/sections/courses/admissions"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CoursesHero />
      <ProgramExplorer />
      <CompareSection />
      <LearningJourneySection />
      <AdmissionsSection />
      <AdmissionCTA />
    </main>
  )
}

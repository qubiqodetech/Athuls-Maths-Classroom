"use client"

import { CoursesHero } from "@/src/components/sections/courses/hero"
import { ProgramExplorer } from "@/src/components/sections/courses/program-explorer"
import { LearningJourneySection } from "@/src/components/sections/courses/learning-journey"
import { CompareSection } from "@/src/components/sections/courses/compare"
import { AdmissionsSection } from "@/src/components/sections/courses/admissions"
import { FAQSection } from "@/src/components/sections/courses/faq"
import { EnrollmentSection } from "@/src/components/sections/courses/enrollment"
import { BreadcrumbSchema } from "@/src/components/seo/BreadcrumbSchema"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://athulsmathsclassroom.com" },
          { name: "Courses", item: "https://athulsmathsclassroom.com/courses" }
        ]} 
      />
      <CoursesHero />
      <ProgramExplorer />
      <CompareSection />
      <LearningJourneySection />
      <AdmissionsSection />
      <FAQSection />
      <EnrollmentSection />
    </main>
  )
}

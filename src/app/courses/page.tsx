"use client"

import { CoursesHero } from "@/src/components/sections/courses/hero"
import { CourseOverviewGrid } from "@/src/components/sections/courses/CourseOverviewGrid"
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
      <CourseOverviewGrid />
      <EnrollmentSection />
    </main>
  )
}

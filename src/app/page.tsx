import { BookOpen, Users, Target, Lightbulb, TrendingUp, Award } from "lucide-react"
import { Hero } from "@/src/components/sections/hero"
import { TrustSection } from "@/src/components/sections/trust"
import { LearningExperience } from "@/src/components/sections/learning-experience"
import { CoursesPreview } from "@/src/components/sections/courses-preview"
import { FounderSection } from "@/src/components/sections/founder"
import { FacultyPreview } from "@/src/components/sections/faculty-preview"
import { TestimonialsSection } from "@/src/components/sections/testimonials"
import { CampusLife } from "@/src/components/sections/campus-life"
import { LazyWrapper } from "@/src/components/performance/LazyWrapper"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <LearningExperience />
      <CoursesPreview />
      <FounderSection />
      <LazyWrapper>
        <FacultyPreview />
      </LazyWrapper>
      <LazyWrapper>
        <TestimonialsSection />
      </LazyWrapper>
      <LazyWrapper>
        <CampusLife />
      </LazyWrapper>
    </main>
  )
}

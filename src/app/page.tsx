import { BookOpen, Users, Target, Lightbulb, TrendingUp, Award } from "lucide-react"
import { Hero } from "@/src/components/sections/hero"
import { TrustSection } from "@/src/components/sections/trust"
import { LearningExperience } from "@/src/components/sections/learning-experience"

import { CoursesPreview } from "@/src/components/sections/courses-preview"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <LearningExperience />
      <CoursesPreview />

      {/* CTA Section */}
      <section className="py-24 bg-[#E31E24] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin Your Learning Journey Today.</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join hundreds of students who trust Athul's Maths Classroom to achieve academic success.
          </p>
          <button className="px-8 py-4 bg-white text-[#E31E24] rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Apply for Admission
          </button>
        </div>
      </section>
    </main>
  )
}

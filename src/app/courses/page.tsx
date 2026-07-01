"use client"

import { useState } from "react"
import { CourseCategory, getAllCourses } from "@/src/data/courses"
import { 
  CourseHero, 
  CategoryFilter, 
  CourseGrid, 
  LearningJourney, 
  AdmissionCTA 
} from "@/src/components/courses"

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | "all">("all")
  const allCourses = getAllCourses()
  
  const filteredCourses = activeCategory === "all" 
    ? allCourses 
    : allCourses.filter(course => course.category === activeCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      <CourseHero />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Browse Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a category to filter courses based on your academic level.
            </p>
          </div>
          
          <CategoryFilter 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
          
          {filteredCourses.length > 0 ? (
            <CourseGrid courses={filteredCourses} />
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-xl text-gray-500 font-medium mb-2">No courses found</p>
              <p className="text-gray-400">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      <LearningJourney />
      <AdmissionCTA />
    </main>
  )
}

"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { COURSE_CARDS } from "./constants"
import { CourseCard } from "./CourseCard"

export function CourseNavigator() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative background element */}
      <div className="absolute -inset-4 bg-gradient-to-br from-gray-50 to-white/50 rounded-[2.5rem] border border-white shadow-xl opacity-50 pointer-events-none" />
      
      <motion.div 
        className="relative z-10 flex flex-col gap-3 md:gap-4"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {COURSE_CARDS.map((course, index) => (
          <div 
            key={course.id}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <CourseCard 
              course={course} 
              index={index} 
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

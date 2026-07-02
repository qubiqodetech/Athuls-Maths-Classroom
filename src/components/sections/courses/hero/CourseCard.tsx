"use client"

import { motion } from "motion/react"
import { CourseCardType } from "./types"
import { ArrowRight } from "lucide-react"

interface CourseCardProps {
  course: CourseCardType
  index: number
  isActive?: boolean
}

export function CourseCard({ course, index, isActive = false }: CourseCardProps) {
  const Icon = course.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
      className={`
        group relative flex items-center p-4 md:p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
        ${isActive 
          ? 'bg-white border-primary-red/20 shadow-lg shadow-primary-red/5 scale-[1.02] z-10' 
          : 'bg-white/70 backdrop-blur-sm border-gray-100 shadow-sm hover:bg-white hover:border-gray-200 hover:shadow-md hover:scale-[1.01] z-0'
        }
      `}
    >
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-red/5 to-transparent opacity-100" />
      )}
      
      <div className={`
        flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 md:mr-6 transition-colors duration-300
        ${isActive ? 'bg-primary-red/10 text-primary-red' : 'bg-gray-50 text-navy-900 group-hover:bg-gray-100'}
      `}>
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      
      <div className="flex-1 relative z-10">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-primary-red uppercase tracking-wider">
            {course.subtitle}
          </span>
          <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-primary-red translate-x-1' : 'text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1'}`} />
        </div>
        <h3 className="text-lg font-bold text-navy-900 mb-1">{course.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{course.description}</p>
      </div>
    </motion.div>
  )
}

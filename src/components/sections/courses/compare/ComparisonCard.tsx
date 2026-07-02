"use client"

import { ComparisonProgram } from "./types"
import { DifficultyIndicator } from "./DifficultyIndicator"
import { motion } from "motion/react"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Text } from "@/src/components/typography/text"

interface ComparisonCardProps {
  program: ComparisonProgram
  index: number
}

export function ComparisonCard({ program, index }: ComparisonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/60 backdrop-blur-md rounded-3xl border border-gray-100 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full"
    >
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-primary-red/10 transition-colors duration-300 pointer-events-none" />
      
      {/* Header */}
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-red-50 text-primary-red text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          {program.targetClass}
        </span>
        <h3 className="text-2xl font-bold text-navy-900 mb-2">{program.name}</h3>
        <Text className="text-gray-500 text-sm">Ideal for: {program.idealFor}</Text>
      </div>

      <div className="mb-6">
        <DifficultyIndicator level={program.difficultyLevel} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-3">
          <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Duration</span>
          <span className="text-sm font-semibold text-navy-900">{program.duration}</span>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Mode</span>
          <span className="text-sm font-semibold text-navy-900">{program.learningMode}</span>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 space-y-6">
        <div>
          <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Topics</span>
          <div className="flex flex-wrap gap-2">
            {program.keyTopics.map((topic, i) => (
              <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                {topic}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Learning Focus</span>
          <div className="flex flex-wrap gap-2">
            {program.learningFocus.map((focus, i) => (
              <span key={i} className="text-[10px] font-bold text-primary-red bg-red-50/50 border border-red-100 px-2 py-1 rounded-full uppercase tracking-wide">
                {focus}
              </span>
            ))}
          </div>
        </div>

        <ul className="space-y-3 pt-4 border-t border-gray-100">
          <li className="flex items-start text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" />
            <span>Assessment: <strong className="text-navy-900 font-medium">{program.assessmentFrequency}</strong></span>
          </li>
          <li className="flex items-start text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" />
            <span>Revision Support Included</span>
          </li>
          <li className="flex items-start text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" />
            <span>Personal Mentoring Included</span>
          </li>
        </ul>

        <div className="pt-4 mt-auto">
          <p className="text-sm italic text-gray-500 text-center mb-6">
            "{program.bestFor}"
          </p>
          <Link 
            href={`/courses/${program.id}`}
            className="flex items-center justify-center w-full h-12 rounded-xl bg-navy-900 text-white font-medium hover:bg-primary-red transition-colors duration-300 group/btn"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

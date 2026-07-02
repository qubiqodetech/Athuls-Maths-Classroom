"use client"

import { ProgramType } from "./types"
import { motion, AnimatePresence } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { LearningObjectives } from "./LearningObjectives"
import { TopicsGrid } from "./TopicsGrid"
import { BenefitsGrid } from "./BenefitsGrid"
import { TeachingMethod } from "./TeachingMethod"
import { StudentOutcomes } from "./StudentOutcomes"
import { RecommendationCard } from "./RecommendationCard"

interface ProgramContentProps {
  program: ProgramType
}

export function ProgramContent({ program }: ProgramContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={program.id}
        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
        transition={{ duration: 0.4 }}
        className="space-y-16"
      >
        {/* Hero Section */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <program.icon className="w-4 h-4" />
              <span>{program.targetClass}</span>
            </div>
            <Heading as="h2" size="xl" className="text-navy-900 mb-4">
              {program.name}
            </Heading>
            <Text variant="large" className="text-gray-600 max-w-2xl leading-relaxed">
              {program.shortDescription}
            </Text>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {program.audience.map((audienceType, idx) => (
              <span 
                key={idx}
                className="bg-red-50 text-primary-red px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
              >
                {audienceType}
              </span>
            ))}
          </div>
        </div>

        <LearningObjectives objectives={program.objectives} />
        
        <TopicsGrid topics={program.topics} />
        
        <BenefitsGrid benefits={program.benefits} />
        
        <TeachingMethod method={program.teachingMethod} />
        
        <StudentOutcomes outcomes={program.outcomes} />
        
        <RecommendationCard />
      </motion.div>
    </AnimatePresence>
  )
}

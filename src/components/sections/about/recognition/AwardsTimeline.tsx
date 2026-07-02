"use client"

import { motion } from "motion/react"
import { AWARDS_TIMELINE } from "./constants"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"

export function AwardsTimeline() {
  return (
    <div className="mb-32 relative">
      <div className="text-center mb-16">
        <Heading as="h3" size="m" className="text-navy-900 mb-4">
          Our Journey of Excellence
        </Heading>
        <Text className="text-gray-600 max-w-2xl mx-auto">
          A timeline of our commitment to transforming educational experiences.
        </Text>
      </div>

      {/* Timeline container - Horizontal on desktop, vertical on mobile */}
      <div className="relative max-w-6xl mx-auto">
        {/* Continuous horizontal connecting line (Desktop) */}
        <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-0.5 bg-gray-100 z-0" />
        
        {/* Continuous vertical connecting line (Mobile) */}
        <div className="lg:hidden absolute top-0 bottom-0 left-[39px] w-0.5 bg-gray-100 z-0" />

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6">
          {AWARDS_TIMELINE.map((milestone, index) => {
            const Icon = milestone.icon
            
            return (
              <motion.div 
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-row lg:flex-col items-start lg:items-center flex-1 group"
              >
                {/* Year Badge */}
                <div className="hidden lg:flex mb-6 h-8 px-4 rounded-full bg-gray-50 items-center justify-center border border-gray-200 text-sm font-medium text-gray-700 shadow-sm group-hover:border-primary-red/30 transition-colors">
                  {milestone.year}
                </div>

                {/* Mobile Year Badge (Left column) */}
                <div className="lg:hidden flex-shrink-0 w-20 flex flex-col items-center mr-4 pt-2">
                  <div className="text-sm font-semibold text-gray-900">{milestone.year}</div>
                </div>

                {/* Icon Node */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-navy-900 lg:mb-6 shadow-sm z-10 group-hover:border-primary-red group-hover:text-primary-red transition-all duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 ml-6 lg:ml-0 lg:text-center pt-1 lg:pt-0">
                  <Heading as="h4" size="xs" className="text-navy-900 mb-2 font-semibold">
                    {milestone.title}
                  </Heading>
                  <Text variant="small" className="text-gray-500 max-w-[200px] lg:mx-auto">
                    {milestone.description}
                  </Text>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

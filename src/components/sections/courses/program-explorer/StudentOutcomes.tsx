"use client"

import { OutcomeType } from "./types"
import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"

interface StudentOutcomesProps {
  outcomes: OutcomeType[]
}

export function StudentOutcomes({ outcomes }: StudentOutcomesProps) {
  return (
    <div className="space-y-6">
      <Heading as="h3" size="l" className="text-navy-900">
        Student Outcomes
      </Heading>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon
          return (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-navy-900 text-white p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 shadow-lg shadow-navy-900/10 group overflow-hidden relative"
            >
              {/* Glow effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Icon className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium text-sm text-gray-100">
                {outcome.title}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

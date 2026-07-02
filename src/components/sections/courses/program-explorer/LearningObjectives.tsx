"use client"

import { ObjectiveType } from "./types"
import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"

interface LearningObjectivesProps {
  objectives: ObjectiveType[]
}

export function LearningObjectives({ objectives }: LearningObjectivesProps) {
  return (
    <div className="space-y-6">
      <Heading as="h3" size="l" className="text-navy-900">
        Learning Objectives
      </Heading>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {objectives.map((obj, index) => {
          const Icon = obj.icon
          return (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 bg-red-50 text-primary-red rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-navy-900 mb-2">{obj.title}</h4>
              <Text className="text-gray-600 text-sm leading-relaxed">
                {obj.description}
              </Text>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

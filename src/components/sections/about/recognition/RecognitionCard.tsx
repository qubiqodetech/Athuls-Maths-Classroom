"use client"

import { motion } from "motion/react"
import { RecognitionItem } from "./types"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"

interface RecognitionCardProps {
  item: RecognitionItem
  index: number
}

export function RecognitionCard({ item, index }: RecognitionCardProps) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-white border border-gray-100 overflow-hidden hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Soft border glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-navy-900 group-hover:text-primary-red transition-colors duration-300 border border-gray-100">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        
        <Heading as="h3" size="s" className="text-navy-900 mb-3">
          {item.title}
        </Heading>
        
        <Text className="text-gray-600">
          {item.description}
        </Text>
      </div>
    </motion.div>
  )
}

"use client"

import { BenefitType } from "./types"
import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"

interface BenefitsGridProps {
  benefits: BenefitType[]
}

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <div className="space-y-6">
      <Heading as="h3" size="l" className="text-navy-900">
        Program Benefits
      </Heading>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/50 backdrop-blur-sm border border-gray-100 p-4 rounded-xl flex flex-col items-center text-center hover:bg-white hover:shadow-sm hover:border-gray-200 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-red-50 group-hover:text-primary-red text-gray-400 transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-navy-900">
                {benefit.title}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

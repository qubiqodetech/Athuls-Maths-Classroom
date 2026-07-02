"use client"

import { TeachingStepType } from "./types"
import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { ChevronRight } from "lucide-react"
import { Fragment } from "react"

interface TeachingMethodProps {
  method: TeachingStepType[]
}

export function TeachingMethod({ method }: TeachingMethodProps) {
  return (
    <div className="space-y-6">
      <Heading as="h3" size="l" className="text-navy-900">
        Our Teaching Process
      </Heading>

      <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 overflow-x-auto custom-scrollbar">
        <div className="flex items-center min-w-max space-x-2 py-2">
          {method.map((step, index) => {
            const Icon = step.icon
            const isLast = index === method.length - 1

            return (
              <Fragment key={step.id}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 shadow-sm group-hover:border-primary-red/30 group-hover:text-primary-red transition-all duration-300">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {step.title}
                  </span>
                </motion.div>
                
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                    className="flex-1 w-12 flex items-center justify-center text-gray-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

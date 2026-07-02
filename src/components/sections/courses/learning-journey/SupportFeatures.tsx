"use client"

import { SUPPORT_FEATURES } from "./constants"
import { motion } from "motion/react"

export function SupportFeatures() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {SUPPORT_FEATURES.map((feature, index) => {
        const Icon = feature.icon
        return (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-red-50 text-primary-red flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-navy-900 text-sm">
              {feature.title}
            </h4>
          </motion.div>
        )
      })}
    </div>
  )
}

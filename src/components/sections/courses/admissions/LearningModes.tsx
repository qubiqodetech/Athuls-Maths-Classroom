"use client"

import { LEARNING_MODES } from "./constants"
import { motion } from "motion/react"
import { Check } from "lucide-react"

export function LearningModes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {LEARNING_MODES.map((mode, index) => {
        const Icon = mode.icon
        return (
          <motion.div
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-primary-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">{mode.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{mode.description}</p>
            <ul className="space-y-3">
              {mode.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 mr-3 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        )
      })}
    </div>
  )
}

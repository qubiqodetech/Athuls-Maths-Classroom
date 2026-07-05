"use client"

import { motion } from "motion/react"
import { EXPERTISE_AREAS } from "./constants"

export function ExpertiseChips() {
  return (
    <div className="py-20 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-[#0D1B2A] tracking-tight mb-4">Core Areas of Expertise</h3>
        <p className="text-gray-500">Mastery across the complete high school mathematics spectrum.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {EXPERTISE_AREAS.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:border-[#E31E24] hover:text-[#E31E24] hover:shadow-md transition-all duration-300 cursor-default"
          >
            {area}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

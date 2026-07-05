"use client"

import { motion } from "motion/react"

export function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-gray-100 text-gray-600 text-sm font-bold tracking-wider uppercase mb-6">
          INSIDE THE CLASSROOM
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0D1B2A] tracking-tight mb-8">
          Experience<br />
          <span className="text-[#E31E24]">Learning</span><br />
          In Action.
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Step into our classrooms and see how we transform mathematical concepts into engaging, interactive learning experiences.
        </p>
      </motion.div>
    </div>
  )
}

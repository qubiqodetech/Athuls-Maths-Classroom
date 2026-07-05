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
          REAL EXPERIENCES
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0D1B2A] tracking-tight mb-8">
          What Students<br />
          And Parents<br />
          Say About <span className="text-[#E31E24]">Our Teachers.</span>
        </h2>
      </motion.div>
    </div>
  )
}

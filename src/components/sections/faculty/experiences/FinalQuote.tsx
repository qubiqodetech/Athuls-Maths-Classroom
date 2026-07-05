"use client"

import { motion } from "motion/react"

export function FinalQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#0D1B2A] leading-tight tracking-tight mb-8">
        "The greatest compliment a teacher receives is a student's <span className="text-[#E31E24] italic">confidence.</span>"
      </h4>
      <div className="w-12 h-1 bg-[#E31E24] mx-auto rounded-full" />
    </motion.div>
  )
}

"use client"

import { motion } from "motion/react"
import { Quote } from "lucide-react"

export function StudentQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center mt-20 md:mt-32 relative"
    >
      <Quote className="w-20 h-20 text-gray-100 mx-auto mb-8 rotate-180" />
      <h4 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-[#0D1B2A] leading-relaxed tracking-tight mb-8">
        "The best teachers don't simply answer questions.
        <br />
        <span className="text-[#E31E24]">They help students discover the confidence to solve them independently.</span>"
      </h4>
      <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full" />
    </motion.div>
  )
}

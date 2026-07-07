"use client"

import { motion } from "motion/react"
import { Quote } from "lucide-react"

export function CtaQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center pb-16 relative"
    >
      <Quote className="w-12 h-12 text-[#E31E24]/20 mx-auto mb-6 rotate-180" />
      <h4 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white leading-relaxed tracking-tight mb-8">
        "The right teacher can change the way a student sees mathematics <span className="text-[#E31E24] italic">forever.</span>"
      </h4>
      <div className="w-12 h-1 bg-[#E31E24] mx-auto rounded-full" />
    </motion.div>
  )
}

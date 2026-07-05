"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import { MENTOR_HIGHLIGHTS } from "./constants"

export function MentorHighlights() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap gap-3 mt-8"
    >
      {MENTOR_HIGHLIGHTS.map((highlight, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-md"
        >
          <Check className="w-4 h-4 text-[#E31E24]" />
          {highlight}
        </span>
      ))}
    </motion.div>
  )
}

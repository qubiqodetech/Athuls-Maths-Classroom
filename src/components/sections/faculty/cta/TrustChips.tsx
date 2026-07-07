"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import { TRUST_CHIPS } from "./constants"

export function TrustChips() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl mx-auto"
    >
      {TRUST_CHIPS.map((chip, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/90 backdrop-blur-md"
        >
          <Check className="w-4 h-4 text-[#E31E24]" />
          {chip}
        </span>
      ))}
    </motion.div>
  )
}

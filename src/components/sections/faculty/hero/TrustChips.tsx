"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import { TRUST_CHIPS } from "./constants"

export function TrustChips() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-wrap gap-2 pt-8"
    >
      {TRUST_CHIPS.map((chip, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600"
        >
          <Check className="w-4 h-4 text-[#E31E24]" />
          {chip}
        </span>
      ))}
    </motion.div>
  )
}

"use client"

import { motion } from "motion/react"
import { TRUST_CHIPS } from "./constants"
import { CheckCircle2 } from "lucide-react"

export function TrustChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {TRUST_CHIPS.map((chip, index) => (
        <motion.div
          key={chip.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
          className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-full px-4 py-2 shadow-sm hover:shadow hover:bg-white transition-all duration-300"
        >
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-gray-700">{chip.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

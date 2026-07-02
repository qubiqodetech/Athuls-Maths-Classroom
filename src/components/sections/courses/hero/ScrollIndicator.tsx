"use client"

import { motion } from "motion/react"
import { ArrowDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
        Explore Our Programs
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100"
      >
        <ArrowDown className="w-4 h-4 text-gray-400" />
      </motion.div>
    </motion.div>
  )
}

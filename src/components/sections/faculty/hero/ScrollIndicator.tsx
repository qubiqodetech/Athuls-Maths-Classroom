"use client"

import { motion } from "motion/react"

export function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
        Meet The Team
      </span>
      <div className="w-[1px] h-12 bg-gray-200 relative overflow-hidden">
        <motion.div 
          animate={{ y: [0, 48] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-full h-1/2 bg-[#E31E24]"
        />
      </div>
    </motion.div>
  )
}

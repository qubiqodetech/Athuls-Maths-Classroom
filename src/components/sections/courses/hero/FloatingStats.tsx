"use client"

import { motion } from "motion/react"
import { FLOATING_STATS } from "./constants"

export function FloatingStats() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      {FLOATING_STATS.map((stat, index) => {
        // Distribute items around the right side
        const positions = [
          { top: "10%", right: "-10%", y: [0, -15, 0] },
          { bottom: "20%", right: "110%", y: [0, 10, 0] },
          { top: "60%", right: "-15%", y: [0, -10, 0] },
          { bottom: "10%", right: "80%", y: [0, 15, 0] }
        ]
        
        const pos = positions[index % positions.length]
        
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
            style={{ position: "absolute", top: pos.top, bottom: pos.bottom, right: pos.right }}
            className="z-20"
          >
            <motion.div
              animate={{ y: pos.y }}
              transition={{ 
                repeat: Infinity, 
                duration: 4 + index, 
                ease: "easeInOut" 
              }}
              className="bg-white/80 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-4 flex flex-col min-w-[140px]"
            >
              <span className="text-2xl font-bold text-navy-900">{stat.value}</span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

"use client"

import { motion } from "motion/react"
import { FLOATING_STATS } from "./constants"

export function FloatingStats() {
  return (
    <>
      {FLOATING_STATS.map((stat, index) => {
        // Different positions and animations for each stat card
        const positions = [
          { top: "10%", left: "-10%", delay: 0.8 },
          { top: "45%", right: "-5%", delay: 1.0 },
          { bottom: "15%", left: "5%", delay: 1.2 },
        ]

        const pos = positions[index]

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: pos.delay, type: "spring" }}
            style={{ 
              position: 'absolute',
              ...(pos.top && { top: pos.top }),
              ...(pos.bottom && { bottom: pos.bottom }),
              ...(pos.left && { left: pos.left }),
              ...(pos.right && { right: pos.right }),
            }}
            className="hidden lg:flex z-30"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.5
              }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 flex flex-col items-center justify-center min-w-[140px]"
            >
              <span className="text-2xl font-bold text-[#0D1B2A]">{stat.value}</span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-1 text-center">{stat.label}</span>
            </motion.div>
          </motion.div>
        )
      })}
    </>
  )
}

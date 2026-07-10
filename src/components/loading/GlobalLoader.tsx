"use client"

import { motion } from "motion/react"
import { BookOpen } from "lucide-react"

export function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Soft radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Animated logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#0D1B2A] text-white flex items-center justify-center shadow-lg mx-auto">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="absolute -inset-4 rounded-full bg-[#0D1B2A]/5 blur-xl -z-10 animate-pulse" />
        </motion.div>

        {/* Loading Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#1F2937] font-medium text-lg mb-6 text-center"
        >
          Preparing your learning experience...
        </motion.p>

        {/* Thin animated progress line */}
        <motion.div 
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full h-[2px] bg-gray-100 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-[#E31E24]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

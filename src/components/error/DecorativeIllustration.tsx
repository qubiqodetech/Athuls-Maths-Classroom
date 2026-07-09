"use client"

import { motion } from "motion/react"

export function DecorativeIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* Soft radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0D1B2A]/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E31E24]/[0.03] rounded-full blur-[100px]" />

      {/* Abstract pathway - Minimal geometric lines */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 opacity-[0.03] max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
      >
        <motion.path
          d="M-100 400 C 300 400, 400 200, 720 200 C 1040 200, 1140 600, 1540 600"
          stroke="#0D1B2A"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100 420 C 300 420, 420 220, 720 220 C 1020 220, 1120 580, 1540 580"
          stroke="#0D1B2A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
        />
        
        {/* Floating abstract elements */}
        <motion.circle
          cx="300"
          cy="300"
          r="4"
          fill="#E31E24"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="1000"
          cy="500"
          r="6"
          fill="#0D1B2A"
          animate={{
            y: [15, -15, 15],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="700"
          y="150"
          width="8"
          height="8"
          fill="#0D1B2A"
          transform="rotate(45 700 150)"
          animate={{
            y: [-20, 20, -20],
            rotate: [45, 90, 45],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  )
}

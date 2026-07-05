"use client"

import { motion } from "motion/react"

export function DecorativeIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 flex items-center justify-center opacity-30 md:opacity-50">
      <svg 
        width="800" 
        height="800" 
        viewBox="0 0 800 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-none text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.path
          d="M 100,400 Q 250,200 400,400 T 700,400"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 150,500 Q 350,600 500,400 T 750,300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.circle
          cx="400"
          cy="400"
          r="250"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 10"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="400"
          cy="400"
          r="150"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
        
        {/* Animated dot along the path */}
        <motion.circle
          cx="0"
          cy="0"
          r="4"
          fill="#E31E24"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <animateMotion
            path="M 100,400 Q 250,200 400,400 T 700,400"
            dur="6s"
            repeatCount="indefinite"
          />
        </motion.circle>
      </svg>
    </div>
  )
}

"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let currentProgress = 0
    const interval = setInterval(() => {
      // Easing function for progress counter
      const increment = Math.max(1, (100 - currentProgress) * 0.12)
      currentProgress += increment
      
      if (currentProgress >= 99.9) {
        currentProgress = 100
        setProgress(100)
        clearInterval(interval)
        
        // Wait a bit before completing so the 100% lingers beautifully
        setTimeout(() => {
          onComplete()
        }, 900)
      } else {
        setProgress(Math.floor(currentProgress))
      }
    }, 40)

    return () => clearInterval(interval)
  }, [onComplete])
  
  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050816]"
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{ 
        clipPath: "inset(0% 0% 100% 0%)",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Ambient Premium Glows */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40 mix-blend-screen">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#E31E24]/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4"
        />
      </div>

      {/* Cinematic Background Numbers */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
      >
         <motion.span 
           className="text-[40vw] font-display font-bold text-white/5 tracking-tighter mix-blend-overlay"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2, ease: "easeOut" }}
         >
           {progress}
         </motion.span>
      </motion.div>
      
      <motion.div 
        className="relative z-10 flex flex-col items-center w-full max-w-md px-8"
        exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
      >
        <motion.div 
          initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 relative flex flex-col items-center"
        >
          {/* AMC Horizontal Logo */}
          <div className="w-[280px] h-[60px] md:w-[320px] md:h-[70px] flex items-center justify-center relative mx-auto overflow-hidden mb-6">
            <Image
              src="/assets/logos/amc-logo/AMC - Primary Horizontal Logo (Dark Background).png"
              alt="AMC Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Premium Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <span className="block text-[10px] md:text-xs text-white/50 font-mono tracking-[0.4em] uppercase text-center">
              Premium Learning Experience
            </span>
          </motion.div>
        </motion.div>
        
        {/* Minimalist Progress Line */}
        <div className="w-full flex flex-col items-center mt-12">
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 bg-white origin-left"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
            {/* Leading glow dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-white blur-[2px]"
              initial={{ left: "0%" }}
              animate={{ left: `calc(${progress}% - 24px)` }}
              transition={{ duration: 0.1, ease: "linear" }}
              style={{ opacity: progress > 2 ? 1 : 0 }}
            />
          </div>
          
          <div className="flex justify-between items-center w-full mt-4 px-1">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-2"
            >
              <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
                System / Ready
              </span>
            </motion.div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[10px] font-mono tracking-widest text-white"
            >
              {progress.toString().padStart(3, '0')}%
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

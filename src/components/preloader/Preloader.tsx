"use client"

import { motion } from "motion/react"
import { preloaderVariants } from "@/src/animations/preloader"
import { useEffect } from "react"
import Image from "next/image"

export function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Total duration is roughly 2.8 seconds before triggering complete
    const timer = setTimeout(() => {
      onComplete()
    }, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])
  
  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
      variants={preloaderVariants.container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          variants={preloaderVariants.glow}
          className="absolute w-[600px] h-[600px] bg-[#0D1B2A]/5 rounded-full blur-3xl"
        />
        <motion.div 
          variants={preloaderVariants.glow}
          className="absolute w-[400px] h-[400px] bg-[#E31E24]/5 rounded-full blur-3xl translate-y-12"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div variants={preloaderVariants.logo} className="mb-8 relative">
          {/* AMC Logo SVG */}
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center relative mx-auto overflow-hidden">
            <Image
              src="/assets/logos/amc-logo/AMC - Icon  Monogram Only.png"
              alt="AMC Logo"
              width={80}
              height={80}
              className="object-contain drop-shadow-sm z-10"
              priority
            />
            <motion.div 
              variants={preloaderVariants.glow}
              className="absolute inset-0 bg-white/10 blur-md z-0"
            />
          </div>
        </motion.div>
        
        <motion.h1 
          variants={preloaderVariants.text}
          className="text-2xl md:text-3xl font-sora font-bold text-[#0D1B2A] mb-3 tracking-tight text-center px-4"
        >
          Athul's Maths Classroom
        </motion.h1>
        
        <motion.p 
          variants={preloaderVariants.tagline}
          className="text-sm md:text-base text-gray-500 font-inter mb-10 text-center px-4"
        >
          Building Confidence Through Mathematics
        </motion.p>
        
        <div className="w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden mb-6">
          <motion.div 
            variants={preloaderVariants.line}
            className="h-full bg-[#E31E24] origin-left"
          />
        </div>
        
        <motion.p 
          variants={preloaderVariants.status}
          className="text-[10px] md:text-xs text-gray-400 font-inter uppercase tracking-[0.2em]"
        >
          Preparing your learning experience...
        </motion.p>
      </div>
    </motion.div>
  )
}

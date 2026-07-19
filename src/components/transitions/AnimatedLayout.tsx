"use client"

import { motion } from "motion/react"
import { ReactNode, useEffect } from "react"

interface AnimatedLayoutProps {
  children: ReactNode;
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  useEffect(() => {
    // Basic scroll restoration for new pages
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
      animate={{ 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.5,
          delay: 0.1,
          ease: "easeOut"
        }
      }}
      exit={{ 
        opacity: 0, 
        filter: "blur(8px)", 
        scale: 0.99, 
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      className="flex-1 flex flex-col w-full"
    >
      {children}
    </motion.div>
  )
}

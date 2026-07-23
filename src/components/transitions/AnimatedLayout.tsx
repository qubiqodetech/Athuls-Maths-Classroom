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
      initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.97 }}
      animate={{ 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.3, // wait for overlay to cover/uncover
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      exit={{ 
        opacity: 0, 
        filter: "blur(12px)", 
        scale: 0.97,
        y: -40,
        transition: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1]
        }
      }}
      className="flex-1 flex flex-col w-full origin-top"
    >
      {children}
    </motion.div>
  )
}

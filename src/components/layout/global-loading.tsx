"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"

export function GlobalLoading() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // In a real app, this would be tied to next/router events or initial hydration
    // For now, we simulate a fast loading state just to show the UI pattern
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Minimal geometric logo animation */}
            <motion.div 
              className="relative w-16 h-16 flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/20"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent border-r-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="w-6 h-6 bg-secondary rounded-full" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display font-bold text-xl tracking-tight text-primary"
            >
              {siteConfig.name}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm text-muted-foreground mt-2 uppercase tracking-widest"
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

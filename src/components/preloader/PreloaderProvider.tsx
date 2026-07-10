"use client"

import { useState, useEffect, ReactNode } from "react"
import { AnimatePresence, useReducedMotion } from "motion/react"
import { Preloader } from "./Preloader"

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const shouldReduceMotion = useReducedMotion()
  
  useEffect(() => {
    // Only run on client
    const hasLoaded = sessionStorage.getItem("amc-preloader-shown")
    if (hasLoaded || shouldReduceMotion) {
      setIsLoading(false)
    }
  }, [shouldReduceMotion])
  
  const handleComplete = () => {
    sessionStorage.setItem("amc-preloader-shown", "true")
    setIsLoading(false)
  }
  
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={handleComplete} />}
      </AnimatePresence>
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  )
}

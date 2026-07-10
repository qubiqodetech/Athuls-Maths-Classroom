"use client"

import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function TransitionOverlay() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timeout = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {/* 
        This is an optional overlay that can be used to add a color sweep 
        or other full-page effects during a transition. Currently kept minimal 
        as per the "refinement rather than spectacle" philosophy.
      */}
    </AnimatePresence>
  )
}

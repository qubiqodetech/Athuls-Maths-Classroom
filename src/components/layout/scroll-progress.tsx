"use client"

import { motion, useScroll, useSpring } from "motion/react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Only show on specific pages
    const showOnPages = ['/about', '/courses', '/faculty', '/resources', '/announcements']
    const shouldShow = showOnPages.some(page => pathname.startsWith(page))
    setIsVisible(shouldShow)
  }, [pathname])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-red origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}

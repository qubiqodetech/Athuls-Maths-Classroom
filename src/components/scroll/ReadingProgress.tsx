"use client"

import { motion, useScroll, useSpring } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  
  const { scrollYProgress } = useScroll()
  
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const showOnPages = ['/about', '/courses', '/faculty', '/privacy-policy', '/terms-and-conditions', '/news', '/announcements']
    const shouldShow = showOnPages.some(page => pathname.startsWith(page))
    setIsVisible(shouldShow)
  }, [pathname])

  if (!isVisible) return null

  return (
    <>
      {/* Vertical Indicator (Desktop) */}
      <div className="hidden lg:block fixed right-0 top-1/4 bottom-1/4 w-[3px] bg-gray-100 z-50 rounded-l-full overflow-hidden">
        <motion.div
          className="w-full bg-[#0D1B2A] origin-top h-full"
          style={{ scaleY: scale }}
        />
      </div>

      {/* Horizontal Indicator (Mobile) - Positioned slightly below global scroll progress to avoid overlap if needed, or maybe at the bottom? The requirements say: Horizontal indicator (mobile) */}
      {/* We already have global scroll progress at the top. Let's put this one at the bottom for mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[3px] bg-gray-100 z-50 rounded-t-full overflow-hidden">
        <motion.div
          className="h-full bg-[#0D1B2A] origin-left w-full"
          style={{ scaleX: scale }}
        />
      </div>
    </>
  )
}

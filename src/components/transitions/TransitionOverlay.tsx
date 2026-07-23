"use client"

import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

export function TransitionOverlay() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFirstMount, setIsFirstMount] = useState(true)

  useEffect(() => {
    if (isFirstMount) {
      setIsFirstMount(false)
      return
    }

    setIsTransitioning(true)
    const timeout = setTimeout(() => setIsTransitioning(false), 900)
    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="overlay"
          initial={{ top: "100%" }}
          animate={{ top: "0%" }}
          exit={{ top: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9998] bg-[#050816] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Accent lines at the edges of the wipe */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="w-[220px] h-[50px] relative"
          >
             <Image
                src="/assets/logos/amc-logo/AMC - Primary Horizontal Logo (Dark Background).png"
                alt="AMC Logo"
                fill
                className="object-contain"
                priority
              />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

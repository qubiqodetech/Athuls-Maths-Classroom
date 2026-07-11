"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUp, MessageCircle, Search } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"
import { openSearch } from "@/src/components/layout/global-search"

export function FloatingActions() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [scrollProgress, setScrollProgress] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const innerHeight = window.innerHeight
      const offsetHeight = document.body.offsetHeight
      
      setIsVisible(scrollY > 500)
      
      const progress = scrollY / (offsetHeight - innerHeight)
      setScrollProgress(Math.min(progress, 1) * 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Format phone number for WhatsApp URL
  const waNumber = siteConfig.contact.phone.replace(/\D/g, "")

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none">
      
      {/* Mobile Search Button */}
      <button 
        onClick={openSearch}
        className="pointer-events-auto md:hidden relative w-12 h-12 bg-white text-gray-800 border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Open Search"
      >
        <Search size={24} />
      </button>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${waNumber}`} 
        target="_blank" 
        rel="noreferrer"
        className="pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        >
          <MessageCircle size={28} />
          {/* Ping animation */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20" />
        </motion.div>
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto relative"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-md shadow-lg border-border hover:bg-accent"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </Button>
            {/* Scroll Progress Ring */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none text-primary" 
              viewBox="0 0 100 100"
            >
              <circle
                className="text-primary/10 stroke-current"
                strokeWidth="4"
                cx="50"
                cy="50"
                r="48"
                fill="transparent"
              />
              <circle
                className="stroke-current transition-all duration-150 ease-out"
                strokeWidth="4"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="48"
                fill="transparent"
                strokeDasharray={`${scrollProgress * 3.01} 301`}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

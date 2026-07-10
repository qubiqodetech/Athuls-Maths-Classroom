"use client"

import { ReactNode, useEffect, useState } from "react"
import { cn } from "@/src/lib/utils"

interface StickyContainerProps {
  children: ReactNode;
  className?: string;
  topOffset?: number;
}

export function StickyContainer({ children, className, topOffset = 100 }: StickyContainerProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Just a small helper to add a class if we hit a certain scroll threshold,
      // though typically CSS `position: sticky` handles this natively without JS.
      // Keeping this as a wrapper for native sticky positioning but with extra control if needed.
      if (window.scrollY > topOffset) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [topOffset])

  return (
    <div 
      className={cn(
        "sticky self-start z-30 transition-all duration-300", 
        className
      )}
      style={{ top: topOffset }}
    >
      {children}
    </div>
  )
}

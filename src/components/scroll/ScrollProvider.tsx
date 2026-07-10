"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { usePathname } from "next/navigation"

interface ScrollContextType {
  activeSection: string | null;
  scrollTo: (id: string) => void;
  registerSection: (id: string) => void;
  unregisterSection: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [sections, setSections] = useState<string[]>([])
  const pathname = usePathname()

  const registerSection = (id: string) => {
    setSections((prev) => [...prev, id])
  }

  const unregisterSection = (id: string) => {
    setSections((prev) => prev.filter((s) => s !== id))
  }

  useEffect(() => {
    const handleScroll = () => {
      // Find the current active section
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
      
      let currentActive: string | null = null
      
      for (const el of sectionElements) {
        const rect = el.getBoundingClientRect()
        // If the top of the element is near the top of the viewport
        // or the bottom of the element is below the middle of the viewport
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentActive = el.id
          break
        }
      }
      
      if (currentActive !== activeSection) {
        setActiveSection(currentActive)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initial check
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections, activeSection])

  // Reset active section on pathname change
  useEffect(() => {
    setActiveSection(null)
  }, [pathname])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const topOffset = 100 // adjust based on navbar height
      const y = el.getBoundingClientRect().top + window.scrollY - topOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <ScrollContext.Provider value={{ activeSection, scrollTo, registerSection, unregisterSection }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScrollSpy() {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error("useScrollSpy must be used within a ScrollProvider")
  }
  return context
}

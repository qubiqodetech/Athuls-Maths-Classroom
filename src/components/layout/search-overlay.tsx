"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Search, X } from "lucide-react"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ""
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-sm flex flex-col"
        >
          <div className="container mx-auto px-4 pt-8 pb-4 flex justify-end">
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close search">
              <X size={24} />
            </Button>
          </div>
          
          <div className="container mx-auto px-4 flex-1 flex flex-col max-w-3xl mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-6 h-6" />
              <Input
                ref={inputRef}
                type="search"
                placeholder="Search courses, faculty, results..."
                className="w-full h-16 pl-14 pr-4 text-xl md:text-2xl rounded-2xl border-2 border-primary/10 focus-visible:ring-primary focus-visible:border-primary shadow-lg bg-background"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Quick Links</h3>
              <div className="flex flex-wrap gap-2">
                {["Class 10 Revision", "JEE Coaching", "Meet the Founder", "Admissions 2026"].map((term) => (
                  <button 
                    key={term}
                    className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:bg-accent hover:border-primary/20 transition-colors"
                    onClick={onClose}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

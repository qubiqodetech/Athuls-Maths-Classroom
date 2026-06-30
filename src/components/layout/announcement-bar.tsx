"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"

interface AnnouncementBarProps {
  message: string
  href?: string
  ctaText?: string
  onDismiss?: () => void
}

export function AnnouncementBar({ message, href, ctaText, onDismiss }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = React.useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    if (onDismiss) onDismiss()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden bg-primary text-primary-foreground"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-center relative text-sm font-medium">
            <div className="flex items-center gap-2 text-center">
              <span>{message}</span>
              {href && ctaText && (
                <a
                  href={href}
                  className="underline underline-offset-4 hover:text-primary-foreground/80 transition-colors"
                >
                  {ctaText}
                </a>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              onClick={handleDismiss}
              aria-label="Dismiss announcement"
            >
              <X size={14} />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/src/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const hasConsented = localStorage.getItem("cookie-consent")
    if (!hasConsented) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-card text-card-foreground border border-border shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
              <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-lg">We value your privacy</h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Button variant="outline" onClick={handleDecline} className="w-full sm:w-auto">
                  Decline
                </Button>
                <Button onClick={handleAccept} className="w-full sm:w-auto">
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

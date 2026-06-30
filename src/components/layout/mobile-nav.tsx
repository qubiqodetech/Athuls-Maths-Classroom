"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { navigationLinks } from "@/src/config/navigation"
import { siteConfig } from "@/src/config/site"
import { Button } from "@/src/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%", opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-background border-l border-border/40 shadow-2xl p-6 pt-24 overflow-y-auto lg:hidden flex flex-col"
          >
            <nav className="flex-1 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navigationLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-display font-semibold tracking-tight text-foreground hover:text-secondary transition-colors block py-2"
                      onClick={onClose}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navigationLinks.length * 0.05 }}
                className="mt-8 pt-8 border-t border-border"
              >
                <div className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Contact Us</p>
                    <p className="text-foreground">{siteConfig.contact.phone}</p>
                    <p className="text-foreground">{siteConfig.contact.email}</p>
                  </div>
                  <Button asChild size="lg" className="w-full rounded-full mt-4" onClick={onClose}>
                    <Link href="/admissions">Admissions</Link>
                  </Button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

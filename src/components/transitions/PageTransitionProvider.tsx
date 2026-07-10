"use client"

import { AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { AnimatedLayout } from "./AnimatedLayout"

interface PageTransitionProviderProps {
  children: ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <AnimatedLayout key={pathname}>
        {children}
      </AnimatedLayout>
    </AnimatePresence>
  )
}

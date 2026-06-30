"use client"

import { motion } from "motion/react"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.4
      }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  )
}

"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"
import { cn } from "@/src/lib/utils"

interface SectionObserverProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function SectionObserver({ children, className, delay = 0, id }: SectionObserverProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  )
}

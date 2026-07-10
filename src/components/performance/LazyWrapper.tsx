"use client"

import { ReactNode, Suspense, useRef } from "react"
import { useInView } from "motion/react"

interface LazyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  triggerOnce?: boolean;
}

export function LazyWrapper({ children, fallback = null, triggerOnce = true }: LazyWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: triggerOnce, margin: "200px" })

  return (
    <div ref={ref} className="w-full">
      {isInView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  )
}

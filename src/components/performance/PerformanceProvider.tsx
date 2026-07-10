"use client"

import { ReactNode } from "react"
import { WebVitalsReporter } from "./WebVitalsReporter"
import { Analytics } from "./Analytics"

export function PerformanceProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <WebVitalsReporter />
      <Analytics />
      {children}
    </>
  )
}

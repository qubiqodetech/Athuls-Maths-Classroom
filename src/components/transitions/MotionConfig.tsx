"use client"

import { MotionConfig as FramerMotionConfig } from "motion/react"
import { ReactNode } from "react"

export function MotionConfig({ children }: { children: ReactNode }) {
  return (
    <FramerMotionConfig>
      {children}
    </FramerMotionConfig>
  )
}

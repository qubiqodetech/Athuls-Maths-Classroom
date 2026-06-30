"use client"

import * as React from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Text } from "@/src/components/typography"
import { cn } from "@/src/lib/utils"

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 2.5,
  className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center justify-center p-6 text-center", className)}
    >
      <div className="text-4xl md:text-5xl font-display font-bold tracking-tight text-primary mb-2 flex items-center">
        {prefix}
        {inView ? (
          <CountUp end={value} duration={duration} separator="," useEasing={true} />
        ) : (
          <span>0</span>
        )}
        {suffix}
      </div>
      <Text className="text-muted-foreground font-medium uppercase tracking-wider text-xs md:text-sm">
        {label}
      </Text>
    </div>
  )
}

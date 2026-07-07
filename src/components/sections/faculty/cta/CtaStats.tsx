"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { CTA_STATS } from "./constants"

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 2, ease: "easeOut" })
    }
  }, [inView, value, motionValue])

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function CtaStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-white/10 mt-16 max-w-5xl mx-auto">
      {CTA_STATS.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

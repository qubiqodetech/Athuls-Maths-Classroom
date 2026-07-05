"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { TRUST_METRICS } from "./constants"

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

export function TrustMetrics() {
  return (
    <div className="py-20 border-t border-gray-100 mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_METRICS.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-display font-bold text-[#0D1B2A] mb-3">
              <Counter value={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react"
import { SUCCESS_METRICS } from "./constants"

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 2.5, ease: "easeOut" })
    }
  }, [inView, value, motionValue])

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function SuccessMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SUCCESS_METRICS.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
              <Counter value={metric.value} suffix={metric.suffix} />
            </h4>
            <p className="text-sm text-gray-400 font-medium leading-tight">{metric.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

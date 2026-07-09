"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface HighlightBoxProps {
  title?: string;
  children: ReactNode;
}

export function HighlightBox({ title, children }: HighlightBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-8 p-6 bg-amber-50/50 border border-amber-100 rounded-2xl"
    >
      {title && (
        <h4 className="font-semibold text-[#0D1B2A] mb-3">{title}</h4>
      )}
      <div className="text-gray-700 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  )
}

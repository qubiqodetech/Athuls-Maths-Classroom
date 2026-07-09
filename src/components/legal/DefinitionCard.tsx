"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface DefinitionCardProps {
  term: string;
  definition: ReactNode;
}

export function DefinitionCard({ term, definition }: DefinitionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <h4 className="font-semibold text-[#0D1B2A] text-lg mb-2">{term}</h4>
      <div className="text-gray-600 leading-relaxed text-sm md:text-base">
        {definition}
      </div>
    </motion.div>
  )
}

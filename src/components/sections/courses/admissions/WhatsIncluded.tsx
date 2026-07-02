"use client"

import { WHATS_INCLUDED } from "./constants"
import { motion } from "motion/react"
import { CheckCircle2 } from "lucide-react"

export function WhatsIncluded() {
  return (
    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-bold text-primary-red uppercase tracking-wider mb-3 block">
          Everything You Need
        </span>
        <h3 className="text-3xl font-bold text-navy-900 mb-6">
          What's Included in the Program?
        </h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          When you join AMC, you get access to a complete ecosystem of learning resources designed to ensure your academic success.
        </p>
        <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-primary-red to-red-200 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {WHATS_INCLUDED.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center space-x-3 group"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-navy-900">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

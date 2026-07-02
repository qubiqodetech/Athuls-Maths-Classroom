"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ComparisonBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-navy-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left shadow-xl"
    >
      <div className="mb-4 sm:mb-0 space-y-1">
        <h3 className="text-xl font-bold text-white">Need Help Choosing?</h3>
        <p className="text-gray-400 text-sm">Compare all programs side-by-side to make an informed decision.</p>
      </div>
      
      <Link 
        href="#compare" // Placeholder for future comparison page
        className="inline-flex h-11 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-medium text-white ring-1 ring-inset ring-white/20 transition-all hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap group"
      >
        Compare Programs
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

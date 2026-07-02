"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ParentBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-red rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
        <div className="max-w-2xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Parents Stay Connected To Every Step.
          </h3>
          <p className="text-gray-300 text-lg">
            Regular feedback and assessments help parents understand their child's academic progress.
          </p>
        </div>
        
        <Link 
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary-red px-8 text-sm font-medium text-white shadow-lg shadow-primary-red/20 transition-all hover:bg-primary-red/90 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap group"
        >
          Contact Our Team
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export function HelpfulMessage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full max-w-2xl mx-auto px-4 pb-12 relative z-10 text-center"
    >
      <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-500 bg-gray-50/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-100">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-gray-400" />
          <span>If you reached this page from a broken link, please let us know so we can fix it.</span>
        </div>
        <Link
          href="/contact?topic=broken-link"
          className="text-[#E31E24] font-medium hover:underline whitespace-nowrap"
        >
          Report Broken Link
        </Link>
      </div>
    </motion.div>
  )
}

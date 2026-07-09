"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Home, Compass, Phone } from "lucide-react"

export function ErrorHero() {
  return (
    <div className="text-center relative z-10 w-full max-w-3xl mx-auto pt-20 pb-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative inline-block mb-6"
      >
        <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-display font-bold leading-none tracking-tighter select-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-50/50 absolute inset-0 -z-10 translate-y-4 blur-[2px]">404</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0D1B2A] to-[#1F2937]">4</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#E31E24] to-red-800">0</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0D1B2A] to-[#1F2937]">4</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-[#0D1B2A] mb-6 tracking-tight">
          Oops! This Page <br className="sm:hidden" />
          <span className="text-[#E31E24]">Couldn't Be Found.</span>
        </h2>
        
        <p className="text-gray-500 text-lg sm:text-xl mb-10 max-w-[600px] mx-auto leading-relaxed">
          The page you're looking for may have been moved, renamed, or no longer exists. Let's help you get back to the right place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-[#0D1B2A] text-white rounded-xl font-medium hover:bg-[#1F2937] transition-all hover:-translate-y-1 shadow-lg shadow-gray-900/10 flex items-center justify-center gap-2 group"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          
          <Link
            href="/courses"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#0D1B2A] border border-gray-200 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-sm flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Courses</span>
          </Link>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-600 rounded-xl font-medium hover:text-[#0D1B2A] hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Contact AMC</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

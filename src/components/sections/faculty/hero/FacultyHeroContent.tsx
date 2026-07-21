"use client"

import { motion } from "motion/react"
import { GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { TrustChips } from "./TrustChips"

export function FacultyHeroContent() {
  return (
    <div className="flex flex-col justify-center max-w-2xl lg:max-w-none pt-24 lg:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 text-[#0D1B2A] text-sm font-semibold tracking-wider uppercase mb-8 shadow-sm w-fit"
      >
        <GraduationCap className="w-4 h-4 text-[#E31E24]" />
        MEET OUR EDUCATORS
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[#0D1B2A] tracking-tight mb-6 leading-[1.1]"
      >
        Meet The Teachers<br />Who Inspire<br />
        <span className="text-[#E31E24]">Confidence</span> in their studies.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-[650px]"
      >
        Behind every achievement is a teacher who believes in patient guidance, conceptual clarity, and helping every student reach their highest potential.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row flex-wrap gap-4"
      >
        <button
          onClick={() => {
            document.getElementById('faculty-grid')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="group inline-flex items-center justify-center gap-2 bg-[#0D1B2A] text-white px-8 py-4 rounded-full font-medium overflow-hidden transition-all hover:bg-[#1a2c42] focus:outline-none focus:ring-2 focus:ring-[#0D1B2A] focus:ring-offset-2"
        >
          <span className="relative z-10 flex items-center gap-2">
            Meet Our Faculty
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <Link
          href="/courses"
          className="inline-flex items-center justify-center bg-white text-[#0D1B2A] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
        >
          Explore Courses
        </Link>
        
        <Link
          href="/admissions"
          className="inline-flex items-center justify-center text-gray-600 px-6 py-4 rounded-full font-medium hover:text-[#0D1B2A] transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
        >
          Admissions
        </Link>
      </motion.div>

      <TrustChips />
    </div>
  )
}

"use client"

import { motion } from "motion/react"
import { MentorHighlights } from "./MentorHighlights"

export function FacultyPromise() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 md:mt-24"
    >
      <div className="bg-[#0D1B2A] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E31E24]/20 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[60px] pointer-events-none translate-y-1/2 -translate-x-1/3" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-8 leading-tight">
            Every Student Deserves<br />
            <span className="text-[#E31E24]">A Mentor Who Believes In Them.</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            Our educators are committed to making mathematics understandable, enjoyable, and confidence-building for every learner.
          </p>
          
          <div className="flex justify-center">
            <MentorHighlights />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

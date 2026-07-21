"use client"

import { motion } from "motion/react"
import { Quote } from "lucide-react"

export function StudentQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-4 relative"
    >
      <div className="absolute top-0 left-0 -mt-4 -ml-4 text-[#E31E24]/20 z-0">
        <Quote className="w-16 h-16 rotate-180" />
      </div>
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative z-10">
        <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed mb-6">
          &quot;My confidence in their studies completely changed after joining AMC.&quot;
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-lg font-bold text-white border border-white/20">
            A
          </div>
          <div>
            <h5 className="font-semibold text-white">Ananya S.</h5>
            <p className="text-sm text-gray-400">Class 12 CBSE Student</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

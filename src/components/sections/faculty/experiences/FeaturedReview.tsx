"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Quote } from "lucide-react"
import { FEATURED_REVIEW } from "./constants"

export function FeaturedReview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 max-w-6xl mx-auto"
    >
      <div className="bg-[#0D1B2A] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E31E24]/20 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-white/10">
          <Image 
            src={FEATURED_REVIEW.imageSrc} 
            alt={FEATURED_REVIEW.author} 
            fill 
            className="object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>

        <div className="relative z-10 flex-1 text-center md:text-left">
          <Quote className="w-12 h-12 text-[#E31E24] mb-6 opacity-50 mx-auto md:mx-0" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-white leading-relaxed tracking-tight mb-8">
            "{FEATURED_REVIEW.quote}"
          </h3>
          
          <div>
            <p className="text-xl font-bold text-white mb-1">{FEATURED_REVIEW.author}</p>
            <p className="text-gray-400 mb-2">{FEATURED_REVIEW.course}</p>
            <span className="inline-block px-3 py-1 bg-[#E31E24]/20 text-[#E31E24] text-sm font-semibold tracking-wider uppercase rounded-full">
              {FEATURED_REVIEW.result}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

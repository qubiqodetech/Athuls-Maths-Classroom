"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"

export function CtaContent() {
  return (
    <div className="text-center max-w-4xl mx-auto pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-8 backdrop-blur-md">
          BEGIN YOUR LEARNING JOURNEY
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight mb-8 leading-tight">
          Learn From<br />
          Teachers<br />
          Who Believe<br />
          In <span className="text-[#E31E24]">Your Potential.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
          Every successful learner begins with a teacher who believes in them. Join Athul's Maths Classroom and experience mathematics through guidance, confidence, and personal mentorship.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/admissions"
            className="w-full sm:w-auto px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
          >
            Apply For Admission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/faculty"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-md flex items-center justify-center"
          >
            Meet Our Faculty
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-xl font-bold text-lg hover:bg-[#25D366]/20 transition-colors backdrop-blur-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat On WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  )
}

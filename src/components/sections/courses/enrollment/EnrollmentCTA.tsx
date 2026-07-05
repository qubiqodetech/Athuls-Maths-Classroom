"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowRight, PhoneCall, MessageCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export function EnrollmentCTA() {
  const [isApplying, setIsApplying] = useState(false)

  const handleApply = () => {
    setIsApplying(true)
    setTimeout(() => {
      setIsApplying(false)
      window.location.href = "/contact"
    }, 800)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col sm:flex-row flex-wrap gap-4"
    >
      <button
        onClick={handleApply}
        disabled={isApplying}
        className="group relative inline-flex items-center justify-center gap-2 bg-[#E31E24] text-white px-8 py-4 rounded-full font-medium overflow-hidden transition-all hover:bg-[#c51a1f] disabled:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
      >
        <span className="relative z-10 flex items-center gap-2">
          {isApplying ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
        {!isApplying && (
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        )}
      </button>

      <Link
        href="tel:+1234567890"
        className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all border border-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
      >
        <PhoneCall className="w-5 h-5" />
        Talk To An Advisor
      </Link>

      <Link
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] px-8 py-4 rounded-full font-medium hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20 hover:border-[#25D366]/30 focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 focus:ring-offset-2 focus:ring-offset-[#0D1B2A]"
      >
        <MessageCircle className="w-5 h-5" />
        Chat On WhatsApp
      </Link>
    </motion.div>
  )
}

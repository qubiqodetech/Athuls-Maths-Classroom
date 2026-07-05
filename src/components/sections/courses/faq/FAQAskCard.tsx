"use client"

import { MessageCircle, PhoneCall, Mail } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

export function FAQAskCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mt-20"
    >
      <div className="bg-[#0D1B2A] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-xl">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#E31E24]/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-md">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-tight">
            Couldn&apos;t find your answer?
          </h3>
          <p className="text-gray-300">
            Our admission counselors are available to help you with any specific queries you might have.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-4">
          <Link 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-medium hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </Link>
          <Link 
            href="tel:+1234567890" 
            className="flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call Us</span>
          </Link>
          <Link 
            href="mailto:admissions@amc.edu" 
            className="flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

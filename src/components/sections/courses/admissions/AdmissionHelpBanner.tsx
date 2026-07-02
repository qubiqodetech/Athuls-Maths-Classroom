"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { PhoneCall, MessageCircle, MapPin } from "lucide-react"

export function AdmissionHelpBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-24 bg-gradient-to-r from-red-50 to-white border border-red-100 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
        <div className="max-w-2xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Need Help With Admissions?
          </h3>
          <p className="text-gray-600 text-lg">
            Our academic team is happy to guide you in choosing the right course and batch.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end gap-4 shrink-0">
          <Link 
            href="tel:+91XXXXXXXXXX" // Placeholder
            className="inline-flex h-12 items-center justify-center rounded-full bg-navy-900 px-6 text-sm font-medium text-white shadow-md transition-all hover:bg-navy-800 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <PhoneCall className="mr-2 w-4 h-4" />
            Call Now
          </Link>
          <Link 
            href="https://wa.me/yourwhatsappnumber" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-navy-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="mr-2 w-4 h-4 text-[#25D366]" />
            WhatsApp
          </Link>
          <Link 
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-navy-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <MapPin className="mr-2 w-4 h-4 text-gray-500" />
            Visit Classroom
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

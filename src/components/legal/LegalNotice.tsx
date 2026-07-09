"use client"

import { motion } from "motion/react"
import { AlertCircle } from "lucide-react"

interface LegalNoticeProps {
  title?: string;
  children: React.ReactNode;
}

export function LegalNotice({ title = "Important Notice", children }: LegalNoticeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#E31E24]" />
      
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-white p-2 rounded-full shadow-sm border border-gray-100 text-[#E31E24] shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-[#0D1B2A] text-lg mb-2">{title}</h4>
          <div className="text-gray-600 leading-relaxed text-sm md:text-base">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

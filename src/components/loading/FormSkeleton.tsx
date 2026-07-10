"use client"

import { motion } from "motion/react"
import { cn } from "@/src/lib/utils"

interface FormSkeletonProps {
  fields?: number;
  className?: string;
}

export function FormSkeleton({ fields = 4, className }: FormSkeletonProps) {
  return (
    <div className={cn("w-full max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden", className)}>
      <motion.div 
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 pointer-events-none"
        animate={{ translateX: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      <div className="space-y-6">
        {/* Form Header */}
        <div className="space-y-2 mb-8 text-center">
          <div className="w-1/2 h-8 bg-gray-200 rounded-lg mx-auto" />
          <div className="w-3/4 h-4 bg-gray-100 rounded mx-auto" />
        </div>

        {/* Form Fields */}
        {Array.from({ length: fields }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="w-24 h-4 bg-gray-200 rounded" />
            <div className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl" />
          </div>
        ))}

        {/* Form Textarea */}
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-200 rounded" />
          <div className="w-full h-32 bg-gray-50 border border-gray-100 rounded-xl" />
        </div>

        {/* Form Submit */}
        <div className="pt-4">
          <div className="w-full h-14 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  )
}

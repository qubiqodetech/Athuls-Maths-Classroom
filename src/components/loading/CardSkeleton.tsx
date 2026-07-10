"use client"

import { motion } from "motion/react"
import { cn } from "@/src/lib/utils"

interface CardSkeletonProps {
  className?: string;
}

export function CardSkeleton({ className }: CardSkeletonProps) {
  return (
    <div className={cn("relative overflow-hidden bg-white border border-gray-100 rounded-2xl p-6 shadow-sm", className)}>
      <motion.div 
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent z-10"
        animate={{ translateX: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
      
      {/* Image/Icon Placeholder */}
      <div className="w-full h-48 bg-gray-100 rounded-xl mb-6" />
      
      {/* Tags/Badges */}
      <div className="flex gap-2 mb-4">
        <div className="w-16 h-6 bg-gray-100 rounded-full" />
        <div className="w-20 h-6 bg-gray-100 rounded-full" />
      </div>

      {/* Title */}
      <div className="space-y-2 mb-4">
        <div className="w-3/4 h-6 bg-gray-200 rounded-md" />
        <div className="w-1/2 h-6 bg-gray-200 rounded-md" />
      </div>

      {/* Description */}
      <div className="space-y-2 mb-6">
        <div className="w-full h-4 bg-gray-100 rounded" />
        <div className="w-full h-4 bg-gray-100 rounded" />
        <div className="w-4/5 h-4 bg-gray-100 rounded" />
      </div>

      {/* Footer/Action */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
        <div className="w-24 h-5 bg-gray-100 rounded" />
        <div className="w-8 h-8 bg-gray-100 rounded-full" />
      </div>
    </div>
  )
}

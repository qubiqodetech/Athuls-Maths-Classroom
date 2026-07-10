"use client"

import { motion } from "motion/react"

export function HeroSkeleton() {
  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Shimmer */}
      <div className="absolute inset-0 bg-gray-50/50" />
      <motion.div 
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ translateX: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge Skeleton */}
          <div className="w-32 h-8 bg-gray-200 rounded-full mx-auto" />
          
          {/* Heading Skeleton */}
          <div className="space-y-4">
            <div className="h-14 md:h-20 bg-gray-200 rounded-xl w-3/4 mx-auto" />
            <div className="h-14 md:h-20 bg-gray-200 rounded-xl w-1/2 mx-auto" />
          </div>

          {/* Paragraph Skeleton */}
          <div className="space-y-3 max-w-2xl mx-auto pt-4">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
            <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <div className="w-full sm:w-40 h-14 bg-gray-200 rounded-full" />
            <div className="w-full sm:w-40 h-14 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

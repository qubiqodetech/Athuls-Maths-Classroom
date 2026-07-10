"use client"

import { motion } from "motion/react"
import { cn } from "@/src/lib/utils"

interface TableSkeletonProps {
  rows?: number;
  className?: string;
}

export function TableSkeleton({ rows = 5, className }: TableSkeletonProps) {
  return (
    <div className={cn("w-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm", className)}>
      <motion.div 
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent z-10 pointer-events-none"
        animate={{ translateX: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
      
      {/* Table Header */}
      <div className="flex items-center px-6 py-4 bg-gray-50 border-b border-gray-100">
        <div className="w-1/4 h-4 bg-gray-200 rounded mr-4" />
        <div className="w-1/4 h-4 bg-gray-200 rounded mr-4" />
        <div className="w-1/4 h-4 bg-gray-200 rounded mr-4" />
        <div className="w-1/4 h-4 bg-gray-200 rounded" />
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-50">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center px-6 py-5">
            <div className="w-1/4 flex items-center gap-3 mr-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full shrink-0" />
              <div className="w-full h-4 bg-gray-100 rounded" />
            </div>
            <div className="w-1/4 h-4 bg-gray-100 rounded mr-4" />
            <div className="w-1/4 h-4 bg-gray-100 rounded mr-4" />
            <div className="w-1/4 h-8 bg-gray-100 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

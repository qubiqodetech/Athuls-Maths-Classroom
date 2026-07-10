"use client"

import { motion } from "motion/react"
import { cn } from "@/src/lib/utils"

interface GallerySkeletonProps {
  items?: number;
  className?: string;
}

export function GallerySkeleton({ items = 6, className }: GallerySkeletonProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "relative overflow-hidden bg-gray-100 rounded-2xl aspect-[4/3]",
            // Make some items span differently for a masonry feel
            i % 4 === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9] lg:aspect-[21/9]" : ""
          )}
        >
          <motion.div 
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"
            animate={{ translateX: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1, ease: "linear" }}
          />
        </div>
      ))}
    </div>
  )
}

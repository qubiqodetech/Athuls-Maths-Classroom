"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/src/lib/utils"

interface ImageLoaderProps extends ImageProps {
  wrapperClassName?: string;
}

export function ImageLoader({ className, wrapperClassName, alt, ...props }: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={cn("relative overflow-hidden bg-gray-100", wrapperClassName)}>
      {/* Skeleton/Shimmer before load */}
      {!isLoaded && (
        <motion.div 
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent z-10"
          animate={{ translateX: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      )}
      
      <Image
        alt={alt}
        className={cn(
          "transition-all duration-700 ease-out",
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-105",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}

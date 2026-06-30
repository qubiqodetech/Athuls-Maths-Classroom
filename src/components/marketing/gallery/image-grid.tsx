import * as React from "react"
import Image from "next/image"
import { FadeIn } from "@/src/components/motion"
import { cn } from "@/src/lib/utils"

interface ImageGridProps {
  images: {
    src: string
    alt: string
    className?: string
  }[]
  className?: string
}

export function ImageGrid({ images, className }: ImageGridProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", className)}>
      {images.map((img, idx) => (
        <FadeIn
          key={idx}
          delay={0.1 * (idx % 4)}
          className={cn(
            "relative overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-border/50 group bg-muted",
            img.className
          )}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </FadeIn>
      ))}
    </div>
  )
}

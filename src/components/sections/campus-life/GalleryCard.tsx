"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { GalleryImageType } from "./types";

interface GalleryCardProps {
  image: GalleryImageType;
  onOpenLightbox: (image: GalleryImageType) => void;
  className?: string;
  sizes?: string;
}

export function GalleryCard({ image, onOpenLightbox, className = "", sizes = "(max-width: 768px) 100vw, 50vw" }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-[2rem] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[#0D1B2A]/10 transition-all duration-500 border border-gray-100 ${className}`}
      onClick={() => onOpenLightbox(image)}
    >
      <div className="absolute inset-0 bg-gray-100">
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={sizes}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Expand Icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        <Maximize2 className="w-4 h-4 text-white" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-white/20">
          {image.category}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {image.title}
        </h3>
        {image.description && (
          <p className="text-gray-200 text-sm md:text-base line-clamp-2">
            {image.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

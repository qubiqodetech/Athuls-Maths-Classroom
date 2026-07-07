"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GalleryItem } from "./data";
import { cn } from "@/src/lib/utils";

interface GalleryImageCardProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
  className?: string;
}

export function GalleryImageCard({ item, index, onClick, className }: GalleryImageCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white cursor-pointer isolate border border-[#E5E7EB]",
        className
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      {/* Animated Border on hover */}
      <div className="absolute inset-0 border-2 border-[#E31E24]/0 group-hover:border-[#E31E24]/50 rounded-3xl transition-colors duration-500 z-20 pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-30 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[#E31E24] font-semibold text-xs uppercase tracking-wider mb-2">
          {item.category}
        </span>
        <h4 className="text-white font-display text-xl md:text-2xl font-bold mb-1">
          {item.title}
        </h4>
        {item.caption && (
          <p className="text-white/80 text-sm line-clamp-2 mt-1 font-light">
            {item.caption}
          </p>
        )}
      </div>
    </motion.div>
  );
}

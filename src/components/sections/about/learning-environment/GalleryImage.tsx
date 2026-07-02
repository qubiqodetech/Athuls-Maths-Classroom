"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GalleryImageType } from "./types";
import { Search } from "lucide-react";

interface GalleryImageProps {
  image: GalleryImageType;
  index: number;
  onClick: (image: GalleryImageType) => void;
}

export function GalleryImage({ image, index, onClick }: GalleryImageProps) {
  const getColSpan = () => {
    switch (image.layout) {
      case "large": return "md:col-span-12";
      case "half": return "md:col-span-6";
      case "wide": return "md:col-span-12";
      case "third": return "md:col-span-4";
      default: return "md:col-span-6";
    }
  };

  const getAspectRatio = () => {
    switch (image.layout) {
      case "large": return "aspect-[16/9] md:aspect-[2/1]";
      case "half": return "aspect-[4/3] md:aspect-[1/1]";
      case "wide": return "aspect-[21/9] md:aspect-[3/1]";
      case "third": return "aspect-[4/3] md:aspect-[4/5]";
      default: return "aspect-video";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative group cursor-pointer overflow-hidden rounded-3xl ${getColSpan()} ${getAspectRatio()}`}
      onClick={() => onClick(image)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
          <Search className="w-5 h-5" />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white font-bold text-lg">{image.alt}</p>
        <p className="text-white/80 text-sm">{image.category}</p>
      </div>
    </motion.div>
  );
}

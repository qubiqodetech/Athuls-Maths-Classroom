"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";
import { GalleryImageType } from "./types";

interface LightboxProps {
  image: GalleryImageType | null;
  onClose: () => void;
}

export function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [image]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D1B2A]/95 p-4 md:p-12"
        onClick={onClose}
      >
        <button 
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          
          <div className="mt-6 text-center text-white max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider uppercase mb-3">
              {image.category}
            </span>
            <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
            {image.description && (
              <p className="text-gray-300">{image.description}</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

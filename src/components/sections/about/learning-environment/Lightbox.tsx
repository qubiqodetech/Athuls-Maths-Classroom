"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImageType } from "./types";

interface LightboxProps {
  images: GalleryImageType[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };

    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, onNavigate, images.length]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0D1B2A]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          aria-label="Close lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 p-4"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-4"
          aria-label="Next image"
        >
          <ChevronRight className="w-10 h-10" />
        </button>

        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl max-h-[85vh] aspect-video flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute bottom-[-3rem] left-0 right-0 text-center">
            <p className="text-white font-medium text-lg">{currentImage.alt}</p>
            <p className="text-white/60 text-sm mt-1">{currentIndex + 1} of {images.length}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

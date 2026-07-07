"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "./data";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, onClose, items, currentIndex, onNavigate }: LightboxProps) {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const handlePrev = () => {
    onNavigate(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/95 backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 lg:left-12 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors backdrop-blur-md border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 lg:right-12 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors backdrop-blur-md border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex flex-col items-center justify-center gap-6"
              >
                <div className="relative w-full h-full max-h-[70vh]">
                  <Image
                    src={currentItem.imageUrl}
                    alt={currentItem.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
                
                <div className="text-center">
                  <span className="text-[#E31E24] text-sm font-semibold uppercase tracking-wider mb-2 block">
                    {currentItem.category}
                  </span>
                  <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">
                    {currentItem.title}
                  </h3>
                  {currentItem.caption && (
                    <p className="text-white/70 font-light max-w-xl mx-auto">
                      {currentItem.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion, AnimatePresence } from "motion/react";
import { GalleryItem } from "./data";
import { GalleryImageCard } from "./GalleryImageCard";

interface MasonryLayoutProps {
  items: GalleryItem[];
  onImageClick: (index: number) => void;
}

export function MasonryLayout({ items, onImageClick }: MasonryLayoutProps) {
  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[250px]">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => {
          let spanClasses = "";
          
          // Map layout types to CSS grid spans
          switch (item.layout) {
            case "hero":
              spanClasses = "lg:col-span-12 row-span-2";
              break;
            case "supporting":
              spanClasses = "lg:col-span-6 row-span-2";
              break;
            case "panorama":
              spanClasses = "lg:col-span-12 row-span-1 md:row-span-2";
              break;
            case "editorial-card":
              spanClasses = "lg:col-span-4 row-span-2";
              break;
            case "highlight":
              spanClasses = "lg:col-span-8 row-span-2";
              break;
            case "mosaic":
              spanClasses = "lg:col-span-4 row-span-1";
              break;
            default:
              spanClasses = "lg:col-span-4 row-span-1";
          }

          return (
            <GalleryImageCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => onImageClick(index)}
              className={spanClasses}
            />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CampusHeading } from "./CampusHeading";
import { EditorialGallery } from "./EditorialGallery";
import { LearningTimeline } from "./LearningTimeline";
import { GalleryCTA } from "./GalleryCTA";

export function CampusLife() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={containerRef} className="relative py-12 lg:py-16 bg-white overflow-hidden border-b border-gray-100">
      {/* Background decorations with parallax */}
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-80 pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-50 via-transparent to-transparent opacity-50 pointer-events-none" 
      />
      
      {/* Minimal decorative shapes */}
      <motion.div 
        style={{ y: contentY }}
        className="absolute top-40 right-10 w-64 h-64 border border-gray-100 rounded-full opacity-50 pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute bottom-40 left-10 w-96 h-96 border border-gray-50 rounded-full opacity-50 pointer-events-none" 
      />

      <div className="container mx-auto relative z-10 w-full max-w-7xl">
        <CampusHeading />
        
        <EditorialGallery />
        
        <div className="px-4">
          <LearningTimeline />
          <GalleryCTA />
        </div>
      </div>
    </section>
  );
}

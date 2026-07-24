"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FacultyHeading } from "./FacultyHeading";
import { FeaturedFaculty } from "./FeaturedFaculty";
import { FacultyGrid } from "./FacultyGrid";
import { TeachingPhilosophy } from "./TeachingPhilosophy";
import { FacultyHighlights } from "./FacultyHighlights";

export function FacultyPreview() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const contentY2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={containerRef} className="relative py-12 lg:py-16 bg-[#F8FAFC] overflow-hidden border-b border-gray-100">
      {/* Background decorations with parallax */}
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-80 pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#E31E24]/5 via-transparent to-transparent opacity-50 pointer-events-none" 
      />
      
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="faculty-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#0D1B2A]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faculty-grid)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <FacultyHeading />
        
        <motion.div style={{ y: contentY1 }}>
          <FeaturedFaculty />
        </motion.div>
        
        <motion.div style={{ y: contentY2 }}>
          <FacultyGrid />
          <TeachingPhilosophy />
          <FacultyHighlights />
        </motion.div>
      </div>
    </section>
  );
}

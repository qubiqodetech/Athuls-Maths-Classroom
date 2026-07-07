"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HeroVisual() {
  const collageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
      <motion.div
        variants={collageVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-[600px] aspect-square"
      >
        {/* Main Center Image - Classroom Moment */}
        <motion.div
          variants={imageVariants}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white"
        >
          <Image
            src="https://picsum.photos/seed/amc-classroom/800/1000"
            alt="Classroom learning moment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/10 mix-blend-overlay" />
        </motion.div>

        {/* Top Right - Student Portrait */}
        <motion.div
          variants={imageVariants}
          className="absolute top-[10%] right-[5%] w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-white rotate-6"
        >
          <Image
            src="https://picsum.photos/seed/amc-student1/600/600"
            alt="Student portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Bottom Left - Certificate / Celebration */}
        <motion.div
          variants={imageVariants}
          className="absolute bottom-[10%] left-[5%] w-[45%] h-[35%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white -rotate-3"
        >
          <Image
            src="https://picsum.photos/seed/amc-cert/800/600"
            alt="Student achievement celebration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Top Left - Small Highlight */}
        <motion.div
          variants={imageVariants}
          className="absolute top-[15%] left-[10%] w-[30%] h-[30%] rounded-2xl overflow-hidden shadow-lg z-10 border-4 border-white -rotate-6"
        >
          <Image
            src="https://picsum.photos/seed/amc-study/400/400"
            alt="Focused learning"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 25vw"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Decorative Badge Overlay */}
        <motion.div
          variants={imageVariants}
          className="absolute bottom-[35%] right-[10%] z-40 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 rotate-3"
        >
          <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0">
            <span className="text-[#E31E24] font-bold text-xl">A+</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0D1B2A]">Top Performers</p>
            <p className="text-xs text-muted-foreground">Consistently</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

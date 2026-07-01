"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ABOUT_HERO_IMAGE } from "./constants";
import { AboutHeroStats } from "./AboutHeroStats";

export function AboutHeroImage() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none mt-12 lg:mt-0 flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="relative aspect-[4/5] w-full max-w-[480px] rounded-[2.5rem] md:rounded-[3rem] overflow-visible"
      >
        {/* Main Image Container */}
        <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 bg-gray-100">
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="Athul's Maths Classroom Educator"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 to-transparent" />
        </div>
        
        {/* Decorative elements behind image */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#E31E24]/10 to-transparent rounded-[3rem] md:rounded-[3.5rem] -z-10 blur-xl opacity-70" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-16 h-full border border-gray-200 rounded-r-[3rem] -z-10" />
        <div className="absolute -bottom-8 left-12 w-full h-16 border border-gray-200 rounded-b-[3rem] -z-10" />

        <AboutHeroStats />
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { ABOUT_HERO_BADGE, ABOUT_HERO_HEADING, ABOUT_HERO_TEXT } from "./constants";
import { AboutHeroButtons } from "./AboutHeroButtons";
import { AboutTrustChips } from "./AboutTrustChips";

export function AboutHeroContent() {
  const Icon = ABOUT_HERO_BADGE.icon;

  return (
    <div className="flex flex-col justify-center max-w-2xl z-10 pt-12 lg:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-full w-fit mb-8 shadow-sm"
      >
        <Icon className="w-4 h-4 text-[#E31E24]" />
        <span className="text-xs font-bold text-[#0D1B2A] tracking-widest uppercase">
          {ABOUT_HERO_BADGE.text}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] leading-[1.15] tracking-tight mb-6"
      >
        {ABOUT_HERO_HEADING.line1} <br />
        <span className="text-gray-400">{ABOUT_HERO_HEADING.line2}</span> <br />
        {ABOUT_HERO_HEADING.line3}
        <span className="text-[#E31E24]">{ABOUT_HERO_HEADING.highlight}</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mb-8"
      >
        {ABOUT_HERO_TEXT.map((paragraph, index) => (
          <p 
            key={index} 
            className={`text-gray-600 text-lg leading-relaxed max-w-[650px] ${index > 0 ? "mt-4" : ""}`}
          >
            {paragraph}
          </p>
        ))}
      </motion.div>

      <AboutTrustChips />
      <AboutHeroButtons />
    </div>
  );
}

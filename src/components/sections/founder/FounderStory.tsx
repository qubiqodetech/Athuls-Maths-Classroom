"use client";

import { motion } from "motion/react";
import { FOUNDER_STORY, FOUNDER_NAME, FOUNDER_ROLE, FOUNDER_INSTITUTION } from "./constants";
import { FounderQuote } from "./FounderQuote";

export function FounderStory() {
  return (
    <div className="flex flex-col h-full justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm shadow-sm">
          MEET THE FOUNDER
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
          One Teacher. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Thousands of Learning Journeys.</span>
        </h2>
      </motion.div>

      <div className="space-y-5 mb-8">
        {FOUNDER_STORY.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
            className="text-gray-400 leading-relaxed text-[15px] sm:text-base font-medium max-w-2xl"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <FounderQuote />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-6 mb-8 flex items-center gap-4"
      >
        <div className="w-12 h-[2px] bg-[#E31E24]" />
        <div>
          <div className="font-bold text-lg text-white tracking-wide">{FOUNDER_NAME}</div>
          <div className="text-sm text-gray-400">{FOUNDER_ROLE} <span className="text-gray-600 mx-1">•</span> <span className="font-semibold text-[#E31E24]">{FOUNDER_INSTITUTION}</span></div>
        </div>
      </motion.div>
    </div>
  );
}

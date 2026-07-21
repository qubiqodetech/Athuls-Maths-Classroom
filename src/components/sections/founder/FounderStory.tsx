"use client";

import { motion } from "motion/react";
import { FOUNDER_STORY, FOUNDER_NAME, FOUNDER_ROLE, FOUNDER_INSTITUTION } from "./constants";
import { FounderQuote } from "./FounderQuote";
import { FounderHighlights } from "./FounderHighlights";

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
        <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#E31E24] text-xs font-bold tracking-widest uppercase mb-4 border border-red-100">
          MEET THE FOUNDER
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A] leading-tight tracking-tight">
          One Teacher. <br className="hidden sm:block" />
          <span className="text-gray-400">Thousands of Learning Journeys.</span>
        </h2>
      </motion.div>

      <div className="space-y-4 mb-6">
        {FOUNDER_STORY.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
            className="text-gray-600 leading-relaxed"
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
        className="mt-4 mb-8"
      >
        <div className="font-medium text-lg text-[#0D1B2A]">{FOUNDER_NAME}</div>
        <div className="text-sm text-gray-500">{FOUNDER_ROLE}</div>
        <div className="text-sm font-semibold text-[#E31E24]">{FOUNDER_INSTITUTION}</div>
      </motion.div>

      <FounderHighlights />

    </div>
  );
}

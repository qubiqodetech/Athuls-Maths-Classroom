"use client";

import { motion } from "motion/react";
import { STORY_QUOTE } from "./constants";

export function StoryQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative my-24 max-w-4xl mx-auto px-6 py-16 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-[3rem] -z-10" />
      <div className="absolute top-8 left-8 text-8xl text-blue-100/50 font-serif leading-none select-none -z-10">
        &ldquo;
      </div>
      <div className="absolute bottom-4 right-8 text-8xl text-blue-100/50 font-serif leading-none select-none -z-10">
        &rdquo;
      </div>

      <h3 className="text-2xl md:text-4xl font-bold text-[#0D1B2A] leading-relaxed md:leading-relaxed mb-8 whitespace-pre-line font-serif italic">
        "{STORY_QUOTE.text}"
      </h3>
      
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-px bg-gray-300" />
        <span className="text-gray-500 font-medium tracking-widest uppercase text-sm">
          {STORY_QUOTE.author}
        </span>
        <div className="w-12 h-px bg-gray-300" />
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import { StoryChapterType } from "./types";

interface StoryChapterProps {
  chapter: StoryChapterType;
  index: number;
}

export function StoryChapter({ chapter, index }: StoryChapterProps) {
  return (
    <div className="mb-16 last:mb-0 relative group">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-start gap-6"
      >
        {/* Chapter Number */}
        <div className="hidden sm:flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors font-serif leading-none mt-1">
            {chapter.number}
          </span>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="sm:hidden text-2xl font-bold text-gray-200 font-serif leading-none">
              {chapter.number}
            </span>
            <h3 className="text-2xl font-bold text-[#0D1B2A]">
              {chapter.title}
            </h3>
          </div>
          
          <div className="space-y-4">
            {chapter.content.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 + pIndex * 0.1 }}
                className="text-lg text-gray-600 leading-relaxed max-w-[700px]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

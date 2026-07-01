"use client";

import { motion } from "motion/react";
import { STORY_CHAPTERS } from "./constants";
import { StoryChapter } from "./StoryChapter";

export function StoryContent() {
  return (
    <div className="lg:pr-12 xl:pr-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-[#E31E24] text-xs font-bold tracking-widest uppercase border border-red-100">
          OUR STORY
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight tracking-tight mb-12"
      >
        Every Great Journey <br className="hidden sm:block" />
        Begins With <br className="hidden sm:block" />
        <span className="text-[#E31E24]">A Simple Belief.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mb-16 pb-16 border-b border-gray-100 relative"
      >
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-6">
          Every student has the ability to succeed in mathematics.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          The challenge is not mathematics itself—it is finding the right guidance, encouragement, and learning environment.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          That belief became the foundation of Athul's Maths Classroom.
        </p>
        
        {/* Abstract accent */}
        <div className="absolute -left-4 top-0 bottom-16 w-1 bg-gradient-to-b from-[#E31E24] to-transparent rounded-full opacity-20" />
      </motion.div>

      <div className="relative">
        {/* Subtle timeline track for chapters */}
        <div className="absolute left-6 top-10 bottom-10 w-px bg-gray-100 hidden sm:block -z-10" />
        
        {STORY_CHAPTERS.map((chapter, index) => (
          <StoryChapter key={chapter.id} chapter={chapter} index={index} />
        ))}
      </div>
    </div>
  );
}

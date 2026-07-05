"use client"

import { motion } from "motion/react"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoStoryPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24 max-w-5xl mx-auto"
    >
      <div className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl bg-[#0D1B2A] border border-gray-100">
        <Image
          src="https://picsum.photos/seed/amc-story-thumb/1920/1080"
          alt="Student Success Story"
          fill
          className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
            <Play className="w-8 h-8 text-white group-hover:text-[#E31E24] transition-colors ml-1" />
          </div>
        </div>
        
        {/* Bottom Metadata */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-center pointer-events-none">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-2">My Journey with AMC</h3>
          <p className="text-white/80 text-lg">A student's story of overcoming math anxiety</p>
        </div>
      </div>
    </motion.div>
  )
}

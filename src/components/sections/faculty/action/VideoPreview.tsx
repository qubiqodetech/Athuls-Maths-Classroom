"use client"

import { motion } from "motion/react"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-24 max-w-5xl mx-auto"
    >
      <div className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl bg-[#0D1B2A] border border-gray-100">
        <Image
          src="https://picsum.photos/seed/amc-video-thumb/1920/1080"
          alt="Classroom Video Thumbnail"
          fill
          className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:scale-110 transition-all duration-300 shadow-xl">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        
        {/* Bottom Metadata */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pointer-events-none">
          <div>
            <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
              Featured Video
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">A Day at AMC</h3>
          </div>
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-medium border border-white/10 shrink-0">
            03:45
          </div>
        </div>
      </div>
    </motion.div>
  )
}

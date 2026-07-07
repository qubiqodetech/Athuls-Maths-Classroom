"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Play } from "lucide-react";
import { videoGrid } from "./data";

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {videoGrid.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative cursor-pointer"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0D1B2A] border border-white/10 mb-4">
            <Image
              src={video.image}
              alt={video.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-white">
              {video.duration}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
              <Play className="w-5 h-5 ml-1 fill-white" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1 px-1">
            <span className="text-[#E31E24] text-xs font-semibold uppercase tracking-wider">
              {video.category}
            </span>
            <h4 className="font-bold text-white/90 group-hover:text-white transition-colors line-clamp-2 leading-tight">
              {video.title}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

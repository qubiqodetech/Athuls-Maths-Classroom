"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Play } from "lucide-react";
import { featuredVideo } from "./data";

export function FeaturedVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl overflow-hidden bg-[#0D1B2A] border border-white/10 cursor-pointer"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={featuredVideo.image}
          alt={featuredVideo.title}
          fill
          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
        
        {/* Play Button Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#E31E24]/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl shadow-[#E31E24]/20 group-hover:scale-110 transition-transform duration-500">
          <Play className="w-8 h-8 ml-1 fill-white" />
        </div>
        
        {/* Play Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full scale-[1.2] group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider text-white">
              {featuredVideo.category}
            </span>
            <span className="text-white/70 text-sm font-medium bg-[#050816]/50 px-2 py-1 rounded">
              {featuredVideo.duration}
            </span>
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-white group-hover:text-white/90 transition-colors">
            {featuredVideo.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

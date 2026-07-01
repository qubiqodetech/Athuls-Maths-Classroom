"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { FEATURED_EVENT } from "./constants";

export function FeaturedEvent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto mb-24 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden relative group"
    >
      <div className="grid md:grid-cols-2 gap-0 items-center">
        <div className="relative aspect-square md:aspect-[4/3] h-full w-full">
          <Image
            src={FEATURED_EVENT.image}
            alt={FEATURED_EVENT.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 md:bg-gradient-to-r md:from-transparent md:to-[#0D1B2A]/10 to-transparent" />
        </div>
        
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-white relative z-10 md:-ml-6 md:rounded-l-[2.5rem] h-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#E31E24] rounded-full text-xs font-bold tracking-wider uppercase mb-6 w-fit border border-red-100">
            Featured Event
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-[#0D1B2A] mb-4">
            {FEATURED_EVENT.title}
          </h3>
          
          <div className="flex items-center gap-2 text-gray-500 font-medium mb-6">
            <Calendar className="w-4 h-4" />
            {FEATURED_EVENT.date}
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {FEATURED_EVENT.description}
          </p>
          
          <Link href="/gallery" className="mt-auto">
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[#E31E24] font-bold text-sm group/btn"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

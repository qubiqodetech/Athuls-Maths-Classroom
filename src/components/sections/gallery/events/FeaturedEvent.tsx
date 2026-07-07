"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { featuredEvent } from "./data";

export function FeaturedEvent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[2.5rem] overflow-hidden bg-[#0D1B2A] text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={featuredEvent.image}
          alt={featuredEvent.title}
          fill
          className="object-cover opacity-60 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent lg:w-2/3" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 lg:p-20">
        <div className="flex flex-col items-start justify-end h-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
              {featuredEvent.category}
            </span>
          </div>
          
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {featuredEvent.title}
          </h3>
          
          <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 text-[#E31E24]" />
            <span>{featuredEvent.date}</span>
          </div>
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-10 max-w-xl">
            {featuredEvent.description}
          </p>
          
          <Button
            size="lg"
            className="bg-white text-[#0D1B2A] hover:bg-white/90 rounded-full px-8 h-12 md:h-14 text-base group/btn"
          >
            View Album
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

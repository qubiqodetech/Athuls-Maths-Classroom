"use client";

import { motion } from "motion/react";
import { featuredStudent } from "./data";
import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function FeaturedStudent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[2.5rem] overflow-hidden bg-[#050816] text-white isolate"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={featuredStudent.image}
          alt={featuredStudent.name}
          fill
          className="object-cover opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/80 to-transparent lg:w-2/3" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 lg:p-20">
        <div className="flex flex-col items-start justify-end h-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <Trophy className="w-4 h-4 text-[#E31E24]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
              Featured Success Story
            </span>
          </div>
          
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {featuredStudent.name}
          </h3>
          
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-white/70 font-medium mb-8">
            <span className="px-3 py-1 rounded-full bg-white/10">{featuredStudent.class}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
            <span>{featuredStudent.year}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
            <span className="text-white">{featuredStudent.achievement}</span>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10 max-w-xl">
            "{featuredStudent.story}"
          </p>
          
          <Button
            size="lg"
            className="bg-white text-[#0D1B2A] hover:bg-white/90 rounded-full px-8 h-12 md:h-14 text-base group/btn"
          >
            Read Story
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

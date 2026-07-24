"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function FounderImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none lg:ml-0 perspective-1000"
    >
      {/* Decorative backdrop elements */}
      <div className="absolute inset-0 bg-[#0D1B2A] rounded-[2.5rem] -rotate-3 scale-[1.02] origin-bottom-left transition-transform duration-700 hover:rotate-0 border border-white/5" />
      <div className="absolute inset-0 bg-[#E31E24]/20 rounded-[2.5rem] rotate-3 scale-[1.02] origin-bottom-right transition-transform duration-700 hover:rotate-0 blur-sm" />
      
      <motion.div 
        style={{ y, scale }}
        className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 bg-[#050816] z-10 p-2"
      >
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-900">
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            alt="Athul - Lead Mathematics Educator"
            fill
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
            referrerPolicy="no-referrer"
          />
          
          {/* Gradients */}
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#050816]/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent" />
        </div>
      </motion.div>

      {/* Floating abstract decorative element */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0D1B2A] rounded-2xl shadow-2xl border border-white/10 z-20 flex items-center justify-center -rotate-6 hidden md:flex backdrop-blur-xl"
      >
        <Sparkles className="w-8 h-8 text-[#E31E24]" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-12 -right-6 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 z-20 hidden md:block"
      >
        <div className="text-white text-xs font-bold uppercase tracking-widest text-center">
          Since <br/><span className="text-xl text-[#E31E24]">2010</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

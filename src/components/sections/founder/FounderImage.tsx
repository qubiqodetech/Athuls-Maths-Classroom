"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function FounderImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[750px] rounded-[2.5rem] overflow-hidden"
    >
      {/* Decorative background elements behind image container */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B2A]/5 to-transparent rounded-[2.5rem] transform -rotate-2 scale-105" />
      
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/60 border-8 border-white bg-gray-100 z-10">
        <Image
          src="https://picsum.photos/seed/athul-founder/1000/1400"
          alt="Athul - Founder & Mathematics Educator"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        
        {/* Soft overlay gradient at bottom for premium feel */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent mix-blend-multiply" />
      </div>

      {/* Floating abstract decorative element */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 z-20 flex items-center justify-center -rotate-6 hidden md:flex"
      >
        <div className="text-4xl">🎓</div>
      </motion.div>
    </motion.div>
  );
}

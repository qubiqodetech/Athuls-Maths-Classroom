"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

export function ClassroomPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl overflow-hidden aspect-[4/3] w-full bg-[#0D1B2A] border-[8px] border-white shadow-2xl cursor-pointer"
    >
      <Image
        src="https://picsum.photos/seed/amc-classroom/1200/900"
        alt="Athul's Maths Classroom Environment"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1280px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-[#0D1B2A]/10 group-hover:bg-[#0D1B2A]/0 transition-colors duration-500" />
      
      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Maximize2 className="w-5 h-5" />
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 inline-block shadow-lg">
          <p className="text-sm font-bold text-[#0D1B2A] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            Main Campus
          </p>
        </div>
      </div>
    </motion.div>
  );
}

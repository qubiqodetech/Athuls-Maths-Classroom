"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { StudentType } from "./types";

interface StudentCardProps {
  student: StudentType;
  index: number;
}

export function StudentCard({ student, index }: StudentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#E31E24]/5 hover:-translate-y-1 hover:border-[#E31E24]/20 transition-all duration-500 group flex flex-col h-full"
    >
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 shadow-sm bg-gray-100">
        <Image
          src={student.image}
          alt={student.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="inline-block px-3 py-1 bg-gray-50 text-[#0D1B2A] rounded-full text-xs font-semibold mb-4 w-fit border border-gray-100 group-hover:bg-[#E31E24]/5 group-hover:text-[#E31E24] group-hover:border-[#E31E24]/20 transition-colors">
          {student.class} • {student.year}
        </div>
        
        <h4 className="text-xl font-bold text-[#0D1B2A] mb-2">{student.name}</h4>
        
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-2xl font-bold text-[#E31E24]">{student.achievement}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="text-sm font-medium text-gray-500">{student.highlight}</span>
        </div>
      </div>
    </motion.div>
  );
}

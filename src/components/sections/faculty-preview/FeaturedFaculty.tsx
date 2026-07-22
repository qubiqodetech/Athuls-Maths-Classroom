"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_FACULTY } from "./constants";
import { ArrowRight, Star } from "lucide-react";

export function FeaturedFaculty() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto mb-16 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="grid md:grid-cols-[45%_55%] gap-8 lg:gap-12 p-8 lg:p-12 items-center relative z-10">
        <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-inner">
          <Image
            src={FEATURED_FACULTY.image}
            alt={FEATURED_FACULTY.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 to-transparent" />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold tracking-wider uppercase mb-6 w-fit border border-blue-100">
            <Star className="w-3.5 h-3.5" />
            Lead Educator
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-2">
            {FEATURED_FACULTY.name}
          </h3>
          
          <div className="text-xl text-[#E31E24] font-semibold mb-6">
            {FEATURED_FACULTY.role}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {FEATURED_FACULTY.subjects.map(subject => (
              <span key={subject} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium">
                {subject}
              </span>
            ))}
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            "{FEATURED_FACULTY.bio}"
          </p>
          
          <Link href="/faculty">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#0D1B2A] text-white rounded-xl font-bold text-sm hover:bg-[#E31E24] transition-colors group"
            >
              View Profile
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { FacultyType } from "./types";

interface FacultyCardProps {
  faculty: FacultyType;
  index: number;
}

export function FacultyCard({ faculty, index }: FacultyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#E31E24]/5 hover:-translate-y-1 hover:border-[#E31E24]/20 transition-all duration-500 group flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 shadow-sm bg-gray-100">
        <Image
          src={faculty.image}
          alt={faculty.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Experience Badge */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
           <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-[#0D1B2A]">
             <Clock className="w-3.5 h-3.5 text-[#E31E24]" />
             {faculty.experience}
           </div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h4 className="text-xl font-bold text-[#0D1B2A] mb-1">{faculty.name}</h4>
        <div className="text-sm font-semibold text-[#E31E24] mb-4">{faculty.role}</div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
          {faculty.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {faculty.subjects.slice(0, 2).map(subject => (
            <span key={subject} className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-md text-xs font-medium">
              <BookOpen className="w-3 h-3" />
              {subject}
            </span>
          ))}
          {faculty.subjects.length > 2 && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-md text-xs font-medium">
              +{faculty.subjects.length - 2}
            </span>
          )}
        </div>
        
        <Link href="/faculty" className="mt-auto block">
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 text-[#0D1B2A] rounded-xl font-bold text-sm border border-gray-100 hover:border-gray-200 hover:bg-gray-100 transition-all group-hover:bg-[#0D1B2A] group-hover:text-white group-hover:border-transparent">
            View Profile
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

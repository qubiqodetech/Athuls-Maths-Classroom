"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Clock, GraduationCap } from "lucide-react"
import type { FacultyMember } from "@/src/data/faculty"

interface FacultyCardProps {
  member: FacultyMember
}

export function FacultyCard({ member }: FacultyCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full relative z-10">
      <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-gray-100">
        <Image
          src={member.imageSrc}
          alt={member.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Hover Reveal Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
          <Link
            href={`/faculty/${member.slug}`}
            className="bg-[#E31E24] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg"
          >
            View Profile
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`/contact?faculty=${member.slug}`}
            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/30 border border-white/30 transition-colors shadow-lg"
          >
            Contact
          </Link>
        </div>

        {/* Info overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase rounded-full border border-white/20 mb-3">
            {member.category.replace("-", " ")}
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-gray-300 font-medium">{member.designation}</p>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
          {member.shortIntro}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
          <div className="flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Subjects</p>
              <p className="text-sm font-medium text-[#0D1B2A] line-clamp-1" title={member.subjects.join(", ")}>
                {member.subjects[0]} {member.subjects.length > 1 && `+${member.subjects.length - 1}`}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Experience</p>
              <p className="text-sm font-medium text-[#0D1B2A]">{member.yearsOfExperience} Yrs</p>
            </div>
          </div>

          <div className="flex items-start gap-2 col-span-2">
            <GraduationCap className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Qualification</p>
              <p className="text-sm font-medium text-[#0D1B2A] line-clamp-1">{member.qualifications.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

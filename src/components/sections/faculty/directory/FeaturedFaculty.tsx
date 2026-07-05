"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"
import type { FacultyMember } from "@/src/data/faculty"
import { EXPERTISE_SKILLS } from "./constants"

interface FeaturedFacultyProps {
  member: FacultyMember
}

export function FeaturedFaculty({ member }: FeaturedFacultyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 border border-gray-100 shadow-xl overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
            <Image
              src={member.imageSrc}
              alt={member.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/20 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {EXPERTISE_SKILLS.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase rounded-full border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E31E24]/10 text-[#E31E24] text-sm font-bold tracking-wider uppercase mb-6">
              <Award className="w-4 h-4" />
              Featured Educator
            </div>
            
            <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0D1B2A] tracking-tight mb-2">
              {member.name}
            </h3>
            <p className="text-xl text-[#E31E24] font-medium mb-8">
              {member.designation}
            </p>
            
            <div className="space-y-6 text-lg text-gray-600 mb-10 leading-relaxed">
              <p className="font-medium text-gray-900 text-xl italic border-l-4 border-gray-200 pl-6">
                "{member.teachingPhilosophy}"
              </p>
              <p>
                {member.shortIntro}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10 pt-8 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1 font-semibold">Experience</p>
                <p className="text-[#0D1B2A] font-medium">{member.yearsOfExperience} Years</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1 font-semibold">Qualification</p>
                <p className="text-[#0D1B2A] font-medium">{member.qualifications[0]}</p>
              </div>
            </div>

            <Link
              href={`/faculty/${member.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-[#0D1B2A] text-white px-8 py-4 rounded-full font-medium overflow-hidden transition-all hover:bg-[#1a2c42] focus:outline-none focus:ring-2 focus:ring-[#0D1B2A] focus:ring-offset-2"
            >
              Read Full Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

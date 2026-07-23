"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start lg:pr-8 bg-gradient-to-b from-[#0D1B2A] to-[#050816] p-8 rounded-[32px] border border-white/10 relative overflow-hidden group/brand shadow-2xl ring-1 ring-white/5 h-full justify-between">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E31E24]/20 to-transparent blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover/brand:opacity-100" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0D1B2A]/50 to-transparent blur-[80px] rounded-full pointer-events-none" />
      
      {/* Sparkle Accent */}
      <div className="absolute top-8 right-8 text-[#E31E24]/30 group-hover/brand:text-[#E31E24]/60 transition-colors">
        <Sparkles className="w-6 h-6" />
      </div>
      
      <div>
        <Link href="/" className="inline-block mb-6 outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg group relative z-10">
          <div className="relative w-48 sm:w-56 h-12 flex items-center transition-opacity group-hover:opacity-90">
            <Image 
              src="/assets/logos/amc-logo/AMC - Primary Horizontal Logo (Dark Background).png" 
              alt="Athul's Maths Classroom" 
              fill
              sizes="(max-width: 640px) 192px, 224px"
              className="object-contain object-left"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>
        
        <p className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-[320px] relative z-10 font-medium">
          Elevating education with premium learning experiences, expert faculty, and exceptional results. A place where concepts meet clarity.
        </p>
      </div>

      <div className="flex items-center gap-3 bg-[#050816]/50 py-2.5 px-5 rounded-full border border-white/5 w-fit backdrop-blur-md relative z-10 hover:bg-[#050816]/80 hover:border-white/10 transition-all cursor-pointer group">
        <div className="flex -space-x-2.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-600 to-gray-400 border-[2px] border-[#0D1B2A] flex items-center justify-center relative overflow-hidden shrink-0 shadow-sm">
               <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        <div className="flex flex-col ml-1">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span className="text-white text-sm font-bold tracking-tight">4.9/5.0</span>
          </div>
          <span className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">Trusted by students</span>
        </div>
      </div>
    </div>
  );
}

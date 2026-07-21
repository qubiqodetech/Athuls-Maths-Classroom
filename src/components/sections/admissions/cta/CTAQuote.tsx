"use client";

import { Quote } from "lucide-react";

export function CTAQuote() {
  return (
    <div className="relative bg-gradient-to-br from-[#1F2937]/80 to-[#0D1B2A]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
      <Quote className="absolute top-8 right-8 w-10 h-10 text-white/10 rotate-180" />
      
      <p className="text-xl md:text-2xl font-display font-medium text-white leading-snug mb-8 max-w-sm pt-4">
        "The decision to join AMC was the turning point in my academic journey."
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white/20 bg-white/10 flex items-center justify-center">
          <span className="text-white font-bold">SA</span>
        </div>
        <div>
          <p className="font-bold text-white text-sm">Student Alumni</p>
          <p className="text-xs text-white/60">Class of 2023</p>
        </div>
      </div>
    </div>
  );
}

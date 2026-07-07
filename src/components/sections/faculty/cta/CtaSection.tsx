"use client"

import { CtaContent } from "./CtaContent"
import { TrustChips } from "./TrustChips"
import { CtaStats } from "./CtaStats"
import { CtaQuote } from "./CtaQuote"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D1B2A] rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] -mt-10 z-20">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#E31E24]/20 to-transparent rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10 pt-10">
        <CtaContent />
        <TrustChips />
        <CtaStats />
        <CtaQuote />
      </div>
    </section>
  )
}

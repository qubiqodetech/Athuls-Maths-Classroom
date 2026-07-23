"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function FinalAdmissionsCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container relative z-10 mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0D1B2A] px-6 py-20 md:px-12 md:py-24 lg:py-28 text-center isolate shadow-2xl">
          {/* Gradients */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/20 via-[#0D1B2A]/0 to-[#0D1B2A]/0 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            
            {/* Subtle grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                Admissions Now Open
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Start Your Journey To <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#E31E24]/80">
                Mathematical Excellence.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed font-light">
              Join a community built on trust, guidance, and academic achievement. 
              Take the first step towards transforming your learning experience today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#E31E24] text-white hover:bg-[#E31E24]/90 rounded-full px-8 h-14 text-base group"
              >
                <a href="#process">
                  Apply For Admission
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 h-14 text-base border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white group"
              >
                <a href="#contact">
                  <Phone className="mr-2 w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  Talk To Advisor
                </a>
              </Button>
            </div>
            
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 w-full">
               <div className="flex flex-col items-center gap-1.5">
                 <span className="text-4xl font-bold text-white tracking-tight">99%</span>
                 <span className="text-sm font-medium text-white/60 uppercase tracking-widest">Success Rate</span>
               </div>
               <div className="hidden sm:block w-px h-16 bg-white/10" />
               <div className="flex flex-col items-center gap-1.5">
                 <span className="text-4xl font-bold text-white tracking-tight">500+</span>
                 <span className="text-sm font-medium text-white/60 uppercase tracking-widest">Students Enrolled</span>
               </div>
               <div className="hidden sm:block w-px h-16 bg-white/10" />
               <div className="flex flex-col items-center gap-1.5">
                 <span className="text-4xl font-bold text-white tracking-tight">24/7</span>
                 <span className="text-sm font-medium text-white/60 uppercase tracking-widest">Mentorship</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

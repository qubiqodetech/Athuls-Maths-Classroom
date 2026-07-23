"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GraduationCap, ArrowDown, Calendar, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function AdmissionsHero() {
  return (
    <section className="relative min-h-[90vh] bg-[#050816] overflow-hidden flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/10 via-transparent to-transparent blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
        
        {/* Abstract grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start col-span-1 lg:col-span-7 pt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                Admissions Open 2026-2027
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6">
                Secure Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Future with</span>{" "}
                <span className="text-[#E31E24]">AMC.</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed font-light mb-10 max-w-xl">
                Join Kerala's premier educational center. We transform average students into top performers across all major subjects through personalized attention and expert guidance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90 rounded-xl px-8 h-14 text-base font-semibold group shadow-[0_0_40px_-10px_rgba(227,30,36,0.5)]"
              >
                <a href="#process">
                  Start Application
                  <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
              
              <div className="flex items-center gap-4 ml-2 sm:ml-6 mt-4 sm:mt-0">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050816] overflow-hidden relative bg-gray-800">
                      <Image 
                        src={`https://picsum.photos/seed/student${i}/100/100`}
                        alt="Student"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-white/60 font-medium mt-1">Join 500+ Students</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Content / Visual */}
          <div className="col-span-1 lg:col-span-5 relative h-[500px] lg:h-[650px] w-full flex items-center justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <div className="absolute inset-0 bg-[#0D1B2A]/20 mix-blend-multiply z-10" />
              <Image
                src="https://picsum.photos/seed/admissions-student/800/1000"
                alt="AMC Student Studying"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent z-20" />
              
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E31E24]/20 flex items-center justify-center text-[#E31E24]">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Success Rate</p>
                        <p className="text-white font-bold text-xl font-sora">99.8%</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>Limited batch sizes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>Weekly performance tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-10 -right-4 lg:-right-12 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Next Batch Starts</p>
                <p className="font-bold text-[#0D1B2A]">June 1st, 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

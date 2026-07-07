"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { CTAStats } from "./CTAStats";
import { QuoteCard } from "./QuoteCard";

export function ResultsCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0D1B2A] text-white">
      {/* Background Gradients and Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/20 via-[#0D1B2A]/0 to-[#0D1B2A]/0 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[#0D1B2A]/50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                Your Story Starts Here
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              The Next
              <br />
              <span className="text-[#E31E24]">Success Story</span>
              <br />
              Could Be Yours.
            </h2>

            <p className="text-lg sm:text-xl text-white/70 max-w-lg mb-10 leading-relaxed font-light">
              Every outstanding result begins with one decision. Start your mathematics journey with Athul's Maths Classroom.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Button
                asChild
                size="lg"
                className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90 rounded-full px-8 h-12 lg:h-14 text-base group"
              >
                <a href="/admissions">
                  Apply Today
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 lg:h-14 text-base border-white/20 text-white hover:bg-white/10 group"
              >
                <a href="/courses">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Explore Courses
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 lg:h-14 text-base border-white/20 text-white hover:bg-white/10 group"
              >
                <a href="#">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:gap-12 relative"
          >
            <CTAStats />
            <QuoteCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

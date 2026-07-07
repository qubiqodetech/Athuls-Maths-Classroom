"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PhoneCall, ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { TrustChips } from "./TrustChips";
import { FloatingCards } from "./FloatingCards";

export function ContactHero() {
  return (
    <section className="relative min-h-[90vh] bg-[#F8FAFC] overflow-hidden flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0D1B2A]/5 via-transparent to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/5 via-transparent to-transparent blur-3xl rounded-full" />
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] border-[1px] border-[#0D1B2A]/5 rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] border-[1px] border-[#E31E24]/5 rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#E5E7EB] mb-8 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#E31E24]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#0D1B2A]">
                Admissions & Contact
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0D1B2A] leading-[1.05] mb-6">
                Let's Start Your
                <br />
                <span className="text-[#E31E24]">Learning Journey</span>
                <br />
                Together.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light mb-10 max-w-xl">
                Whether you're exploring courses, planning admissions, or simply have questions, our team is here to help every step of the way. We'd love to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <TrustChips />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full mt-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#0D1B2A] text-white hover:bg-[#0D1B2A]/90 rounded-full px-8 h-12 lg:h-14 text-base group"
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
                className="rounded-full px-6 h-12 lg:h-14 text-base border-[#E5E7EB] text-[#0D1B2A] hover:bg-[#F8FAFC] group bg-white shadow-sm"
              >
                <a href="#">
                  <MapPin className="mr-2 w-4 h-4 text-[#0D1B2A]/60" />
                  Book A Visit
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6 h-12 lg:h-14 text-base border-[#E5E7EB] text-[#0D1B2A] hover:bg-[#F8FAFC] group bg-white shadow-sm"
              >
                <a href="#">
                  <MessageCircle className="mr-2 w-4 h-4 text-[#16A34A]" />
                  Chat On WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Content / Visual */}
          <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="https://picsum.photos/seed/reception-contact/1000/1250"
                alt="AMC Reception and Classroom Environment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 to-transparent" />
            </motion.div>

            {/* Floating UI Elements */}
            <FloatingCards />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          Get In Touch
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}

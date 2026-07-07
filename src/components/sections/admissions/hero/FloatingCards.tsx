"use client";

import { motion } from "motion/react";
import { CheckCircle2, Calendar, MessageSquare, Clock } from "lucide-react";

export function FloatingCards() {
  return (
    <>
      {/* Admission Open Card */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-16 -left-8 md:left-0 lg:-left-12 bg-white/90 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 w-max"
      >
        <div className="w-10 h-10 rounded-full bg-[#E31E24]/10 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-[#E31E24]" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#0D1B2A]">Admission Open</p>
          <p className="text-xs text-muted-foreground font-medium">For Upcoming Batches</p>
        </div>
      </motion.div>

      {/* Book Visit Card */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-24 -right-4 md:right-8 lg:-right-8 bg-white/90 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 w-max"
      >
        <div className="w-10 h-10 rounded-full bg-[#0D1B2A]/5 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-[#0D1B2A]" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#0D1B2A]">Book Classroom Visit</p>
          <p className="text-xs text-muted-foreground font-medium">Experience AMC</p>
        </div>
      </motion.div>

      {/* Talk to Advisor Card */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-32 -right-4 md:right-0 lg:-right-4 bg-[#0D1B2A]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 w-max"
      >
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white">Talk To Academic Advisor</p>
          <p className="text-xs text-white/70 font-medium">Get personalized guidance</p>
        </div>
      </motion.div>

      {/* Quick Response */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-0 lg:-left-6 bg-white/90 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 w-max"
      >
        <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
        <p className="text-xs font-bold text-[#0D1B2A]">Quick Response</p>
      </motion.div>
    </>
  );
}

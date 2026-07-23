"use client";

import { motion } from "motion/react";
import { Sparkles, BotMessageSquare } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface EmptyStateProps {
  isDark: boolean;
}

export function EmptyState({ isDark }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-6 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
        className={cn(
          "w-20 h-20 rounded-[28px] flex items-center justify-center mb-8 relative shadow-xl backdrop-blur-md",
          isDark 
            ? "bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 shadow-[#38bdf8]/10" 
            : "bg-gradient-to-br from-[#0D1B2A] to-[#1a2c42] shadow-[#0D1B2A]/20"
        )}
      >
        <BotMessageSquare className={cn("w-10 h-10", isDark ? "text-gray-200" : "text-white")} strokeWidth={1.5} />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={cn("absolute -top-3 -right-3", isDark ? "text-[#38bdf8]" : "text-[#E31E24]")}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className={cn(
          "font-bold text-2xl mb-3 tracking-tight bg-clip-text text-transparent",
          isDark 
            ? "bg-gradient-to-r from-gray-100 to-gray-400" 
            : "bg-gradient-to-r from-[#0D1B2A] to-[#334155]"
        )}>
          How can I help? 👋
        </h3>
        <p className={cn(
          "text-[15px] leading-relaxed max-w-[260px] mx-auto",
          isDark ? "text-gray-400" : "text-gray-500"
        )}>
          Ask me anything about courses, admissions, or Athul's Maths Classroom.
        </p>
      </motion.div>
    </div>
  );
}

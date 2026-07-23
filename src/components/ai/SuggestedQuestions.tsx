"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  isDark: boolean;
}

const QUESTIONS = [
  "Which course should I choose?",
  "Tell me about SSLC (All Subjects).",
  "What are your batch timings?",
  "How do admissions work?",
];

export function SuggestedQuestions({ onSelect, isDark }: SuggestedQuestionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-4 px-2">
        {QUESTIONS.map((q, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            onClick={() => onSelect(q)}
            className={cn(
              "px-4 py-2 text-[13px] font-medium rounded-full transition-all focus:outline-none focus-visible:ring-2 whitespace-nowrap",
              isDark 
                ? "bg-[#1E293B] hover:bg-[#334155] border border-white/10 text-gray-200 focus-visible:ring-white/20" 
                : "bg-gray-50 hover:bg-gray-100 border border-gray-200/60 text-[#0D1B2A] focus-visible:ring-[#0D1B2A]"
            )}
          >
            {q}
          </motion.button>
        ))}
    </div>
  );
}

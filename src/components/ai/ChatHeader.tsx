"use client";

import { motion } from "motion/react";
import { RefreshCcw, X, Sparkles, Moon, Sun } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface ChatHeaderProps {
  onClose: () => void;
  onReset: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export function ChatHeader({ onClose, onReset, isDark, toggleTheme }: ChatHeaderProps) {
  return (
    <div className={cn(
      "flex items-center justify-between px-5 py-4 border-b relative z-20 backdrop-blur-md transition-colors duration-300 rounded-t-[32px]",
      isDark ? "border-white/10 bg-[#0F172A]/80" : "border-gray-100/50 bg-white/80"
    )}>
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center shadow-md",
          isDark ? "bg-[#1E293B] border border-white/10 text-white" : "bg-gradient-to-tr from-[#0D1B2A] to-[#1a2c42] text-white"
        )}>
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className={cn(
            "font-semibold text-base tracking-tight transition-colors",
            isDark ? "text-white" : "text-[#0D1B2A]"
          )}>
            AMC Assistant
          </span>
          <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5 mt-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Always here to help
          </span>
        </div>
      </div>
      <div className={cn(
        "flex items-center gap-1 transition-colors",
        isDark ? "text-gray-400" : "text-gray-400"
      )}>
        <button 
          onClick={toggleTheme}
          className={cn(
            "p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2",
            isDark ? "hover:bg-white/10 focus-visible:ring-white/20 text-gray-400 hover:text-white" : "hover:bg-gray-100 focus-visible:ring-[#0D1B2A]/20 hover:text-[#0D1B2A]"
          )}
          title="Toggle Theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button 
          onClick={onReset}
          className={cn(
            "p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2",
            isDark ? "hover:bg-white/10 focus-visible:ring-white/20 text-gray-400 hover:text-white" : "hover:bg-gray-100 focus-visible:ring-[#0D1B2A]/20 hover:text-[#0D1B2A]"
          )}
          title="Reset conversation"
        >
          <RefreshCcw className="w-4 h-4" />
        </button>
        <button 
          onClick={onClose}
          className={cn(
            "p-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2",
            isDark ? "hover:bg-white/10 focus-visible:ring-white/20 text-gray-400 hover:text-white" : "hover:bg-gray-100 focus-visible:ring-[#0D1B2A]/20 hover:text-[#0D1B2A]"
          )}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

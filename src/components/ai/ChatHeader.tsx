"use client";

import { motion } from "motion/react";
import { RefreshCcw, X, Sparkles } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onReset: () => void;
}

export function ChatHeader({ onClose, onReset }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0D1B2A] to-[#1a2c42] flex items-center justify-center shadow-md">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-base text-[#0D1B2A] tracking-tight">AMC Assistant</span>
          <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5 mt-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Always here to help
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-gray-400">
        <button 
          onClick={onReset}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]"
          title="Reset conversation"
        >
          <RefreshCcw className="w-4 h-4" />
        </button>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

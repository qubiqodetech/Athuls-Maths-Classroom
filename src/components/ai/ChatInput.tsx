"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isLoading: boolean;
  isDark: boolean;
}

export function ChatInput({ onSubmit, isLoading, isDark }: ChatInputProps) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    onSubmit(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  return (
    <div className={cn(
      "p-3 rounded-2xl relative transition-colors duration-300",
      isDark ? "bg-[#1E293B]/80 backdrop-blur-xl border border-white/10" : "bg-white/80 backdrop-blur-xl border border-gray-100 shadow-sm"
    )}>
      <form onSubmit={handleSubmit} className="relative flex items-end gap-2">
        <div className={cn(
          "relative flex-1 rounded-xl transition-all overflow-hidden flex",
          isDark 
            ? "bg-[#0F172A] border border-white/5 focus-within:border-white/20 focus-within:bg-[#0F172A]" 
            : "bg-gray-50 border border-gray-200/80 focus-within:border-[#0D1B2A]/20 focus-within:bg-white"
        )}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className={cn(
              "w-full max-h-[120px] py-3.5 pl-4 pr-3 bg-transparent border-none resize-none focus:outline-none focus:ring-0 text-[15px] font-medium leading-relaxed",
              isDark ? "text-gray-100 placeholder:text-gray-500" : "text-gray-900 placeholder:text-gray-400"
            )}
            rows={1}
            disabled={isLoading}
          />
        </div>
        <motion.button
          type="submit"
          disabled={!input.trim() || isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "p-3 rounded-xl flex items-center justify-center shrink-0 transition-all h-[52px] w-[52px]",
            input.trim() && !isLoading
              ? (isDark ? "bg-white text-[#0F172A] hover:bg-gray-200 shadow-lg" : "bg-[#0D1B2A] text-white shadow-md shadow-[#0D1B2A]/20 hover:bg-[#1a2c42]")
              : (isDark ? "bg-[#334155] text-gray-500 cursor-not-allowed" : "bg-gray-100 text-gray-400 cursor-not-allowed")
          )}
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          ) : (
            <Send className="w-5 h-5 ml-0.5" />
          )}
        </motion.button>
      </form>
      <div className="mt-2.5 text-center">
        <p className={cn(
          "text-[10px] font-medium transition-colors",
          isDark ? "text-gray-500" : "text-gray-400"
        )}>
          AI may produce inaccurate information. Please verify important details.
        </p>
      </div>
    </div>
  );
}

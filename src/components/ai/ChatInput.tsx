"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSubmit, isLoading }: ChatInputProps) {
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
    <div className="p-4 pt-2 pb-5 bg-white rounded-b-3xl shrink-0">
      <form onSubmit={handleSubmit} className="relative flex items-end gap-2">
        <div className="relative flex-1 bg-gray-50/80 border border-gray-200/80 rounded-2xl focus-within:border-[#0D1B2A]/30 focus-within:ring-4 focus-within:ring-[#0D1B2A]/5 focus-within:bg-white transition-all overflow-hidden shadow-sm">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="w-full max-h-[120px] py-3.5 pl-4 pr-12 bg-transparent border-none resize-none focus:outline-none focus:ring-0 text-[15px] text-gray-900 placeholder:text-gray-400 font-medium"
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
            "p-3 rounded-2xl flex items-center justify-center shrink-0 transition-all h-[52px] w-[52px]",
            input.trim() && !isLoading
              ? "bg-[#0D1B2A] text-white shadow-md shadow-[#0D1B2A]/20 hover:bg-[#1a2c42]"
              : "bg-gray-100/80 text-gray-400 cursor-not-allowed"
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
      <div className="mt-3.5 text-center">
        <p className="text-[11px] text-gray-400 font-medium">
          AI may produce inaccurate information. Please verify important details.
        </p>
      </div>
    </div>
  );
}

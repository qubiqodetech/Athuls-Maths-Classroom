"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface ChatLauncherProps {
  isOpen: boolean;
  toggleChat: () => void;
}

export function ChatLauncher({ isOpen, toggleChat }: ChatLauncherProps) {
  return (
    <motion.button
      onClick={toggleChat}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_30px_rgba(13,27,42,0.3)] transition-colors duration-300",
        isOpen 
          ? "bg-white text-gray-900 border border-gray-100" 
          : "bg-gradient-to-tr from-[#0D1B2A] to-[#1a2c42] text-white"
      )}
      aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-center w-full h-full"
          >
            <MessageSquare className="w-6 h-6" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1 -right-1 text-white/80"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

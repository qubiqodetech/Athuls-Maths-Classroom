"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-6 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 bg-gradient-to-br from-[#0D1B2A] to-[#1a2c42] rounded-2xl flex items-center justify-center mb-6 relative shadow-lg"
      >
        <Sparkles className="w-8 h-8 text-white" />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-2 -right-2 text-white/80"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="font-bold text-xl text-[#0D1B2A] mb-2 tracking-tight">How can I help? 👋</h3>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-[250px] mx-auto">
          Ask me anything about courses, admissions, or Athul's Maths Classroom.
        </p>
      </motion.div>
    </div>
  );
}

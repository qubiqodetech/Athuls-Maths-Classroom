"use client";

import { motion } from "motion/react";

interface IllustrationProps {
  type: "mission" | "vision";
}

export function Illustration({ type }: IllustrationProps) {
  if (type === "mission") {
    return (
      <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 to-transparent opacity-80" />
        
        {/* Abstract Mission Illustration - Geometric Growth */}
        <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[300px] relative z-10" fill="none">
          <motion.circle 
            cx="100" cy="100" r="40" 
            stroke="#0D1B2A" strokeWidth="2" strokeDasharray="4 4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="100" cy="100" r="60" 
            stroke="#E31E24" strokeWidth="1" strokeOpacity="0.3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.circle 
            cx="100" cy="100" r="80" 
            stroke="#0D1B2A" strokeWidth="1" strokeOpacity="0.1"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          <motion.path 
            d="M 60 100 Q 100 60 140 100 Q 100 140 60 100" 
            fill="none" stroke="#E31E24" strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          <motion.circle 
            cx="100" cy="100" r="12" 
            fill="#E31E24"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] bg-[#0D1B2A] flex items-center justify-center overflow-hidden shadow-2xl shadow-[#0D1B2A]/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 to-transparent opacity-80" />
      
      {/* Abstract Vision Illustration - Forward Path */}
      <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 max-w-[300px] relative z-10" fill="none">
        <motion.path 
          d="M 20 180 L 80 120 L 140 140 L 180 40" 
          stroke="url(#vision-gradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <defs>
          <linearGradient id="vision-gradient" x1="20" y1="180" x2="180" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="0.5" stopColor="#E31E24" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        <motion.circle 
          cx="180" cy="40" r="8" 
          fill="#FFFFFF"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        
        <motion.circle 
          cx="180" cy="40" r="24" 
          stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        
        {/* Subtle grid lines */}
        <path d="M 0 50 L 200 50 M 0 100 L 200 100 M 0 150 L 200 150" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.05" />
        <path d="M 50 0 L 50 200 M 100 0 L 100 200 M 150 0 L 150 200" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.05" />
      </svg>
    </div>
  );
}

"use client";

import { motion } from "motion/react";

export function GrowthIllustration() {
  return (
    <div className="flex justify-center mb-16 opacity-50">
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M 10 50 C 40 50 60 20 90 40 C 120 60 140 10 190 20" 
          stroke="#E31E24" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        <motion.circle cx="10" cy="50" r="4" fill="#0D1B2A" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0 }} />
        <motion.circle cx="90" cy="40" r="4" fill="#0D1B2A" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} />
        <motion.circle cx="190" cy="20" r="4" fill="#E31E24" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }} />
      </svg>
    </div>
  );
}

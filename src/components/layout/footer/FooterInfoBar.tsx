"use client";

import { motion } from "motion/react";
import { QUICK_INFO } from "./constants";

export function FooterInfoBar() {
  return (
    <div className="relative z-10 border-y border-white/5 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 py-6 lg:py-8">
          {QUICK_INFO.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors duration-300 group cursor-default"
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden shrink-0 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 relative z-10 group-hover:scale-110" />
                </div>
                <span className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300 leading-snug">
                  {info.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

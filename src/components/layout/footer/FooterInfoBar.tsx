"use client";

import { motion } from "motion/react";
import { QUICK_INFO } from "./constants";

export function FooterInfoBar() {
  return (
    <div className="border-y border-white/5 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
          {QUICK_INFO.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={info.id}
                className="flex items-center gap-4 py-8 px-6 justify-center group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 text-[#E31E24]" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wide max-w-[120px] leading-tight group-hover:text-white transition-colors">
                  {info.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

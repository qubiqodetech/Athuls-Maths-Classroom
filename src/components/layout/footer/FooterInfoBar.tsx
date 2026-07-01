"use client";

import { motion } from "motion/react";
import { QUICK_INFO } from "./constants";

export function FooterInfoBar() {
  return (
    <div className="border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory">
          {QUICK_INFO.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-center gap-3 shrink-0 snap-start py-5 px-6 md:px-8 border-r border-white/5 last:border-r-0 flex-1 justify-center md:justify-start"
              >
                <Icon className="w-5 h-5 text-[#E31E24] shrink-0" />
                <span className="text-gray-300 text-sm font-semibold tracking-wide whitespace-nowrap">
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

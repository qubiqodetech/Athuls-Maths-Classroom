"use client";

import { motion } from "motion/react";
import { COMMUNITY_QUOTE } from "./constants";

export function CommunityQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center max-w-4xl mx-auto relative px-4 my-24"
    >
      <div className="w-16 h-[1px] bg-gray-200 mx-auto mb-10" />
      <h3 className="text-2xl md:text-4xl text-[#0D1B2A] font-medium leading-relaxed relative z-10 tracking-tight">
        "{COMMUNITY_QUOTE}"
      </h3>
      <div className="w-16 h-[1px] bg-gray-200 mx-auto mt-10" />
    </motion.div>
  );
}

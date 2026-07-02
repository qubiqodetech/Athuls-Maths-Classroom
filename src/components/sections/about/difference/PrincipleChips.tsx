"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { EDUCATIONAL_PRINCIPLES } from "./constants";

export function PrincipleChips() {
  return (
    <div className="max-w-4xl mx-auto px-4 mb-32">
      <div className="flex flex-wrap justify-center gap-3">
        {EDUCATIONAL_PRINCIPLES.map((principle, index) => (
          <motion.div
            key={principle.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full shadow-sm hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-[#E31E24] transition-colors">
              <Check className="w-3 h-3 text-[#E31E24] group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-bold text-[#0D1B2A] tracking-wide">
              {principle.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

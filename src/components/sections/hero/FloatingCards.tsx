"use client";

import { motion } from "motion/react";
import { FLOATING_CARDS } from "./constants";

export function FloatingCards() {
  return (
    <>
      {FLOATING_CARDS.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: card.delay,
          }}
          style={card.position}
          className="absolute z-20 hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl shadow-gray-200/50 border border-white/50"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            className="flex items-center gap-3"
          >
            <span className="text-2xl">{card.icon}</span>
            <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">
              {card.text}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

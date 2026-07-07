"use client";

import { motion } from "motion/react";

const cards = [
  { title: "Interactive Learning", top: "10%", left: "-10%", delay: 0.6 },
  { title: "Small Batch Sessions", top: "40%", right: "-5%", delay: 0.8 },
  { title: "Celebrating Success", bottom: "25%", left: "-5%", delay: 1.0 },
  { title: "Academic Events", bottom: "10%", right: "10%", delay: 1.2 },
];

export function FloatingCards() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            top: card.top,
            left: card.left,
            right: card.right,
            bottom: card.bottom,
          }}
          className="absolute bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white"
        >
          <span className="text-sm font-semibold text-[#0D1B2A] whitespace-nowrap">
            {card.title}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

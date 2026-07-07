"use client";

import { motion } from "motion/react";
import { Clock, PhoneCall, Zap, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Working Hours",
    description: "Mon-Sat: 9AM to 6PM",
  },
  {
    icon: PhoneCall,
    title: "Emergency Contact",
    description: "+91 98765 43210",
  },
  {
    icon: Zap,
    title: "Average Response",
    description: "Within 2 Hours",
  },
  {
    icon: HeartHandshake,
    title: "Admission Support",
    description: "Dedicated Counselor",
  },
];

export function QuickContactStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#0D1B2A] text-white"
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <item.icon className="w-5 h-5 text-white/90" />
          </div>
          <div>
            <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
            <p className="text-xs text-white/60">{item.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

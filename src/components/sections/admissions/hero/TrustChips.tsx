"use client";

import { CheckCircle2 } from "lucide-react";

const chips = [
  "Quick Response",
  "Friendly Guidance",
  "Offline & Online",
  "Admissions Support",
  "Personal Assistance"
];

export function TrustChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip, index) => (
        <div 
          key={index}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white shadow-sm border border-[#E5E7EB] text-[#0D1B2A]/80 text-sm font-medium"
        >
          <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
          <span>{chip}</span>
        </div>
      ))}
    </div>
  );
}

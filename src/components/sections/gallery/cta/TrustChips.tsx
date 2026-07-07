"use client";

import { CheckCircle2 } from "lucide-react";

const chips = [
  "Experienced Faculty",
  "Modern Learning",
  "Concept-Based Teaching",
  "Weekly Assessments",
  "Personal Mentoring",
  "Student Success"
];

export function TrustChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip, index) => (
        <div 
          key={index}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E24]" />
          <span>{chip}</span>
        </div>
      ))}
    </div>
  );
}

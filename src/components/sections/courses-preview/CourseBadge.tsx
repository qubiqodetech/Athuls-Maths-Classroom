"use client";

import { cn } from "@/src/lib/utils";

interface CourseBadgeProps {
  text: string;
  isFeatured?: boolean;
}

export function CourseBadge({ text, isFeatured }: CourseBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border",
        isFeatured
          ? "bg-[#E31E24]/10 text-[#E31E24] border-[#E31E24]/20"
          : "bg-gray-100 text-gray-600 border-gray-200"
      )}
    >
      {text}
    </span>
  );
}

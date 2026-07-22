"use client";

import { Phone } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface NavbarCallProps {
  scrolled: boolean;
}

export function NavbarCall({ scrolled }: NavbarCallProps) {
  return (
    <a
      href="tel:+919876543210"
      aria-label="Call Us"
      className={cn(
        "p-2.5 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]",
        "hover:bg-gray-100/80 text-gray-700"
      )}
    >
      <Phone className="w-4 h-4" />
    </a>
  );
}

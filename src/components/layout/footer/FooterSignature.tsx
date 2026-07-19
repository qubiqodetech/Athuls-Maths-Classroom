"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function FooterSignature() {
  return (
    <div className="w-full bg-black/40 py-4">
      <div className="container mx-auto px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-gray-500" />
        <span className="text-gray-500 text-[11px] uppercase tracking-widest font-semibold">
          Designed & Developed by{" "}
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            QubiQode
          </Link>
        </span>
        <Sparkles className="w-3 h-3 text-gray-500" />
      </div>
    </div>
  );
}

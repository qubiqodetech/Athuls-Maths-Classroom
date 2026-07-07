"use client";

import { Search } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { openSearch } from "@/src/components/layout/global-search";

interface NavbarSearchProps {
  scrolled: boolean;
}

export function NavbarSearch({ scrolled }: NavbarSearchProps) {
  return (
    <button
      aria-label="Search"
      onClick={openSearch}
      className={cn(
        "p-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24]",
        scrolled ? "hover:bg-gray-100 text-gray-700" : "hover:bg-gray-100/50 text-gray-800"
      )}
    >
      <Search className="w-5 h-5" />
    </button>
  );
}

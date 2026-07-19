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
        "p-2.5 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]",
        "hover:bg-gray-100/80 text-gray-700"
      )}
    >
      <Search className="w-4 h-4" />
    </button>
  );
}

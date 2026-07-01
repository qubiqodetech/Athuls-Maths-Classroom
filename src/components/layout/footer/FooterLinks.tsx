"use client";

import Link from "next/link";
import { QUICK_LINKS } from "./constants";

export function FooterLinks() {
  return (
    <div>
      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h3>
      <ul className="flex flex-col gap-3">
        {QUICK_LINKS.map((link) => (
          <li key={link.label}>
            <Link 
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors relative group w-fit flex items-center"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E31E24] group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

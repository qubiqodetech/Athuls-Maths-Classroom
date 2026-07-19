"use client";

import Link from "next/link";
import { QUICK_LINKS } from "./constants";

export function FooterLinks() {
  const mid = Math.ceil(QUICK_LINKS.length / 2);
  const col1 = QUICK_LINKS.slice(0, mid);
  const col2 = QUICK_LINKS.slice(mid);

  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-6 tracking-tight">Navigation</h3>
      <div className="grid grid-cols-2 gap-4">
        <ul className="flex flex-col gap-3.5">
          {col1.map((link) => (
            <li key={link.label}>
              <Link 
                href={link.href}
                className="group flex items-center text-gray-400 hover:text-white text-sm font-medium transition-colors w-fit"
              >
                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-white/20 mr-3 group-hover:bg-[#E31E24] group-hover:scale-125 transition-all duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300 truncate">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3.5">
          {col2.map((link) => (
            <li key={link.label}>
              <Link 
                href={link.href}
                className="group flex items-center text-gray-400 hover:text-white text-sm font-medium transition-colors w-fit"
              >
                <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-white/20 mr-3 group-hover:bg-[#E31E24] group-hover:scale-125 transition-all duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300 truncate">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

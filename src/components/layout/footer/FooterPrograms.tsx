"use client";

import Link from "next/link";
import { PROGRAMS } from "./constants";

export function FooterPrograms() {
  return (
    <div>
      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Programs</h3>
      <ul className="flex flex-col gap-3">
        {PROGRAMS.map((program) => (
          <li key={program.label}>
            <Link 
              href={program.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors relative group w-fit flex items-center"
            >
              <span className="relative z-10">{program.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-px bg-[#E31E24] group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

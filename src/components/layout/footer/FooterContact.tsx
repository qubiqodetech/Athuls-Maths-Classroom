"use client";

import Link from "next/link";
import { CONTACT_INFO } from "./constants";

export function FooterContact() {
  return (
    <div>
      <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact Us</h3>
      <ul className="flex flex-col gap-4">
        {CONTACT_INFO.map((info) => {
          const Icon = info.icon;
          
          return (
            <li key={info.id} className="flex items-start gap-3">
              <Icon className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
              {info.href ? (
                <Link 
                  href={info.href} 
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  {info.value}
                </Link>
              ) : (
                <span className="text-gray-400 text-sm font-medium">
                  {info.value}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

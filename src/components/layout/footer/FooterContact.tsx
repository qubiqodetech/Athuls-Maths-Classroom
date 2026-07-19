"use client";

import Link from "next/link";
import { CONTACT_INFO } from "./constants";

export function FooterContact() {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-6 tracking-tight">Get in Touch</h3>
      <ul className="flex flex-col gap-5">
        {CONTACT_INFO.map((info) => {
          const Icon = info.icon;
          
          return (
            <li key={info.id} className="flex items-start gap-3.5 group">
              <div className="mt-1">
                <Icon className="w-5 h-5 text-[#E31E24] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                  {info.label}
                </span>
                {info.href ? (
                  <Link 
                    href={info.href} 
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <span className="text-gray-300 text-sm font-medium">
                    {info.value}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

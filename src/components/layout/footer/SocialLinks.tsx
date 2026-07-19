"use client";

import { SOCIAL_LINKS } from "./constants";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.id}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            aria-label={social.platform}
          >
            <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={2} />
          </Link>
        );
      })}
    </div>
  );
}

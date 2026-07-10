"use client";

import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { BrandLogo } from "@/src/components/icons/brand-logo";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start lg:pr-8">
      <Link href="/" className="inline-block mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 border border-white/10 shadow-sm backdrop-blur-sm">
            <BrandLogo className="w-6 h-6" lightMode />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-tight">Athul's Maths</span>
            <span className="text-gray-400 font-medium text-sm tracking-wide uppercase mt-1">Classroom</span>
          </div>
        </div>
      </Link>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
        Athul's Maths Classroom is dedicated to helping students build confidence in mathematics through concept-based learning, personalized guidance, and consistent academic support.
      </p>
      
      <SocialLinks />
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start lg:pr-12">
      <Link href="/" className="inline-block mb-8 outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg group">
        <div className="relative w-48 sm:w-56 h-12 flex items-center transition-opacity group-hover:opacity-90">
          <Image 
            src="/assets/logos/amc-logo/AMC - Primary Horizontal Logo (Dark Background).png" 
            alt="Athul's Maths Classroom" 
            fill
            sizes="(max-width: 640px) 192px, 224px"
            className="object-contain object-left"
          />
        </div>
      </Link>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
        Elevating education with premium learning experiences, expert faculty, and exceptional results. A place where concepts meet clarity.
      </p>
      
      <SocialLinks />
    </div>
  );
}

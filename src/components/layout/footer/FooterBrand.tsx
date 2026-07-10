"use client";

import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start lg:pr-8">
      <Link href="/" className="inline-block mb-6 outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] rounded-lg">
        <div className="relative w-48 sm:w-56 h-12 flex items-center">
          <Image 
            src="/assets/logos/amc-logo/AMC - Primary Horizontal Logo (Dark Background).png" 
            alt="Athul's Maths Classroom" 
            fill
            className="object-contain object-left"
          />
        </div>
      </Link>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
        Athul's Maths Classroom is dedicated to helping students build confidence in mathematics through concept-based learning, personalized guidance, and consistent academic support.
      </p>
      
      <SocialLinks />
    </div>
  );
}

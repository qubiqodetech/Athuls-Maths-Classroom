"use client";

import Link from "next/link";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-white/5 py-8 mt-16">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-400 text-sm font-medium">
              &copy; {currentYear} Athul's Maths Classroom. All rights reserved.
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { AnnouncementBar } from "./AnnouncementBar";
import { NavbarLogo } from "./NavbarLogo";
import { DesktopNavigation } from "./DesktopNavigation";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarCTA } from "./NavbarCTA";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition after scrolling 40px
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 w-full flex justify-center px-4 sm:px-6 pt-4",
          scrolled ? "pb-4" : "pb-0"
        )}
      >
        <div 
          className={cn(
            "flex items-center justify-between w-full transition-all duration-500 mx-auto max-w-7xl",
            scrolled
              ? "h-14 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-4 lg:px-6"
              : "h-20 bg-transparent border-transparent px-2 lg:px-4"
          )}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavbarLogo scrolled={scrolled} />
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation scrolled={scrolled} />

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            <div className="hidden sm:block">
              <NavbarSearch scrolled={scrolled} />
            </div>
            
            <NavbarCTA scrolled={scrolled} />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "p-2 rounded-full lg:hidden transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]",
                scrolled ? "text-gray-900 hover:bg-gray-100/50" : "text-gray-900 hover:bg-gray-100/50"
              )}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

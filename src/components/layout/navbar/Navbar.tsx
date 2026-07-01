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
          "sticky top-0 z-40 transition-all duration-300 w-full",
          scrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[68px] md:h-[72px] lg:h-[80px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavbarLogo scrolled={scrolled} />
            </div>

            {/* Desktop Navigation */}
            <DesktopNavigation scrolled={scrolled} />

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-6">
              <div className="hidden sm:block">
                <NavbarSearch scrolled={scrolled} />
              </div>
              
              <NavbarCTA scrolled={scrolled} />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={cn(
                  "p-2 rounded-full lg:hidden transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24]",
                  scrolled ? "text-gray-900 hover:bg-gray-100" : "text-gray-900 hover:bg-gray-100/50"
                )}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

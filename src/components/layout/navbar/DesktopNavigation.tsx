"use client";

import { NAVIGATION_ITEMS } from "./constants";
import { NavigationItem } from "./NavigationItem";

interface DesktopNavigationProps {
  scrolled: boolean;
}

export function DesktopNavigation({ scrolled }: DesktopNavigationProps) {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem key={item.label} item={item} scrolled={scrolled} />
      ))}
    </nav>
  );
}

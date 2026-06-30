"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, Search, X } from "lucide-react"
import { siteConfig } from "@/src/config/site"
import { navigationLinks } from "@/src/config/navigation"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { Container } from "./container"
import { MobileNav } from "./mobile-nav"
import { SearchOverlay } from "./search-overlay"

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 z-50 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary transition-colors group-hover:text-secondary">
                {siteConfig.shortName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-secondary relative py-1",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {link.title}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute left-0 right-0 -bottom-1 h-0.5 bg-secondary rounded-full"
                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                          />
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                >
                  <Search size={20} />
                </Button>
                <Button asChild className="rounded-full px-6">
                  <Link href="/admissions">Admissions</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 lg:hidden z-50">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <Search size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="relative"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  )
}

"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, FileText, User, ImageIcon, Calendar, HelpCircle, Megaphone, BookOpen, GraduationCap, ArrowRight, BookMarked } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export function openSearch() {
  document.dispatchEvent(new CustomEvent("open-global-search"));
}

const SEARCH_DATA = [
  {
    heading: "Quick Actions",
    items: [
      { id: "qa-1", icon: GraduationCap, title: "Apply for Admission", desc: "Start your journey with AMC", href: "/admissions" },
      { id: "qa-2", icon: Megaphone, title: "Contact AMC", desc: "Get in touch with us", href: "/contact" },
      { id: "qa-3", icon: BookOpen, title: "View Courses", desc: "Explore our curriculum", href: "/courses" },
      { id: "qa-4", icon: User, title: "Meet Faculty", desc: "Learn from the best", href: "/faculty" },
    ]
  },
  {
    heading: "Pages",
    items: [
      { id: "p-1", icon: BookMarked, title: "Results", desc: "Student success stories", href: "/results" },
      { id: "p-2", icon: ImageIcon, title: "Gallery", desc: "Campus and events", href: "/gallery" },
      { id: "p-3", icon: Calendar, title: "Events", desc: "Upcoming programs", href: "/events" },
      { id: "p-4", icon: HelpCircle, title: "FAQ", desc: "Frequently asked questions", href: "/faq" },
      { id: "p-5", icon: Megaphone, title: "Announcements", desc: "Latest news and updates", href: "/announcements" },
    ]
  }
];

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const handleOpen = () => setOpen(true);

    document.addEventListener("keydown", down);
    document.addEventListener("open-global-search", handleOpen);
    
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("open-global-search", handleOpen);
    };
  }, []);

  // Lock body scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl mx-4 overflow-hidden rounded-3xl bg-white/95 dark:bg-[#050816]/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-white/10"
          >
            <Command 
              className="w-full flex flex-col h-full max-h-[70vh] bg-transparent"
              label="Global Search"
            >
              <div className="flex items-center px-6 py-5 border-b border-gray-100 dark:border-white/5 relative">
                <Search className="w-5 h-5 text-[#E31E24] shrink-0 mr-4" />
                <Command.Input 
                  autoFocus
                  placeholder="What do you need help finding?" 
                  className="w-full bg-transparent text-xl outline-none placeholder:text-gray-400 text-[#0D1B2A] dark:text-white font-medium"
                />
                <div className="absolute right-6 flex items-center gap-2 hidden sm:flex">
                  <span className="text-xs text-gray-400 font-medium mr-1">to close</span>
                  <kbd className="px-2 py-1 text-[10px] font-mono font-bold rounded-md border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 shadow-sm">
                    ESC
                  </kbd>
                </div>
              </div>

              <Command.List className="overflow-y-auto p-3 overscroll-contain">
                <Command.Empty className="py-16 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <Search className="w-10 h-10 text-gray-200 dark:text-gray-800 mb-4" />
                    <p className="text-base font-semibold text-[#0D1B2A] dark:text-white mb-1">No results found</p>
                    <p className="text-sm text-gray-500">We couldn't find anything matching your search.</p>
                  </div>
                </Command.Empty>

                {SEARCH_DATA.map((group) => (
                  <Command.Group 
                    key={group.heading} 
                    heading={group.heading}
                    className="px-2 py-3 text-xs font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 [&_[cmdk-group-heading]]:mb-3 [&_[cmdk-group-heading]]:px-2"
                  >
                    {group.items.map((item) => (
                      <Command.Item
                        key={item.id}
                        onSelect={() => runCommand(() => router.push(item.href))}
                        className="flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer aria-selected:bg-gray-50 dark:aria-selected:bg-white/5 aria-selected:shadow-sm transition-all duration-200 group relative"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-[#0D1B2A] border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 group-aria-selected:border-gray-200 group-aria-selected:text-[#0D1B2A] dark:group-aria-selected:text-white transition-colors shadow-sm">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <span className="text-sm font-semibold text-[#0D1B2A] dark:text-white group-aria-selected:text-[#E31E24] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">
                            {item.desc}
                          </span>
                        </div>
                        <div className="flex items-center opacity-0 group-aria-selected:opacity-100 transition-opacity">
                          <span className="text-xs font-medium text-gray-400 mr-2">Go to</span>
                          <ArrowRight className="w-4 h-4 text-[#E31E24]" />
                        </div>
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

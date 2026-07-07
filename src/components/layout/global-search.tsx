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
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[900px] mx-4 overflow-hidden rounded-2xl bg-white/90 dark:bg-[#050816]/90 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-white/10"
          >
            <Command 
              className="w-full flex flex-col h-full max-h-[60vh] bg-transparent"
              label="Global Search"
            >
              <div className="flex items-center px-4 py-4 border-b border-gray-200 dark:border-white/10 relative">
                <Search className="w-6 h-6 text-gray-400 shrink-0 mr-3" />
                <Command.Input 
                  autoFocus
                  placeholder="Search courses, faculty, results..." 
                  className="w-full bg-transparent text-xl md:text-2xl outline-none placeholder:text-gray-400 dark:text-white"
                />
                <div className="absolute right-4 flex gap-1 hidden sm:flex">
                  <kbd className="px-2 py-1 text-xs font-mono font-medium rounded border border-gray-200 dark:border-white/20 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
                    ESC
                  </kbd>
                </div>
              </div>

              <Command.List className="overflow-y-auto p-2 overscroll-contain">
                <Command.Empty className="py-14 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <Search className="w-12 h-12 text-gray-300 dark:text-gray-700 mb-4" />
                    <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">No results found</p>
                    <p className="text-sm">We couldn't find anything matching your search.</p>
                  </div>
                </Command.Empty>

                {SEARCH_DATA.map((group) => (
                  <Command.Group 
                    key={group.heading} 
                    heading={group.heading}
                    className="px-2 py-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    {group.items.map((item) => (
                      <Command.Item
                        key={item.id}
                        onSelect={() => runCommand(() => router.push(item.href))}
                        className="flex items-center gap-4 px-4 py-3 mt-1 rounded-xl cursor-pointer aria-selected:bg-gray-100 dark:aria-selected:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-300 group-aria-selected:bg-primary/10 group-aria-selected:text-primary transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <span className="text-base font-medium text-gray-900 dark:text-white group-aria-selected:text-primary transition-colors">
                            {item.title}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item.desc}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 opacity-0 group-aria-selected:opacity-100 transition-opacity" />
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

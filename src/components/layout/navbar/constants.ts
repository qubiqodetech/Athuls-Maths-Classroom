import { NavItem } from "./types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { 
    label: "Courses", 
    href: "/courses",
    children: [
      { label: "SSLC Mathematics", href: "/courses/sslc" },
      { label: "Plus One Mathematics", href: "/courses/plus-one" },
      { label: "Plus Two Mathematics", href: "/courses/plus-two" },
      { label: "Entrance Coaching", href: "/courses/entrance" },
    ]
  },
  { 
    label: "About", 
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Faculty & Tutors", href: "/faculty" },
      { label: "Gallery", href: "/gallery" },
      { label: "News & Events", href: "/announcements" },
    ]
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Resources", href: "/resources" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export const ANNOUNCEMENT_TEXT = "🎓 Admissions Open for SSLC, Plus One & Plus Two Mathematics — Apply Today";

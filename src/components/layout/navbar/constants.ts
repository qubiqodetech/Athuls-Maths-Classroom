import { NavItem } from "./types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { 
    label: "About", 
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Faculty", href: "/faculty" },
      { label: "Tutors", href: "/tutors" },
      { label: "Careers", href: "/careers" },
    ]
  },
  { 
    label: "Courses", 
    href: "/courses",
    children: [
      { label: "All Courses", href: "/courses" },
      { label: "SSLC (All Subjects)", href: "/courses/sslc-mathematics-foundation" },
      { label: "Plus One (All Subjects)", href: "/courses/plus-one-mathematics" },
      { label: "Plus Two (All Subjects)", href: "/courses/plus-two-mathematics" },
      { label: "Entrance Coaching", href: "/courses/entrance-coaching" },
    ]
  },
  { 
    label: "Explore", 
    href: "/gallery",
    children: [
      { label: "Results", href: "/results" },
      { label: "Gallery", href: "/gallery" },
      { label: "Announcements", href: "/announcements" },
      { label: "FAQ", href: "/faq" },
    ]
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const ANNOUNCEMENT_TEXT = "🎓 Admissions Open for SSLC, Plus One & Plus Two (All Subjects) — Apply Today";

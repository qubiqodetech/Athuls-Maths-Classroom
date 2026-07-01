import { Instagram, Facebook, Youtube, MessageCircle, Mail, MapPin, Phone, Clock, Star, UserPlus, BookOpen } from "lucide-react";
import { SocialLinkType, FooterLinkType, FooterInfoType } from "./types";

export const SOCIAL_LINKS: SocialLinkType[] = [
  { id: "instagram", platform: "Instagram", url: "#", icon: Instagram },
  { id: "facebook", platform: "Facebook", url: "#", icon: Facebook },
  { id: "youtube", platform: "YouTube", url: "#", icon: Youtube },
  { id: "whatsapp", platform: "WhatsApp", url: "#", icon: MessageCircle },
  { id: "email", platform: "Email", url: "mailto:hello@amc.edu", icon: Mail },
];

export const QUICK_LINKS: FooterLinkType[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Teachers", href: "/teachers" },
  { label: "Results", href: "/results" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const PROGRAMS: FooterLinkType[] = [
  { label: "SSLC Mathematics", href: "/courses/sslc" },
  { label: "Plus One Mathematics", href: "/courses/plus-one" },
  { label: "Plus Two Mathematics", href: "/courses/plus-two" },
  { label: "Revision Programs", href: "/courses/revision" },
  { label: "Crash Courses", href: "/courses/crash-course" },
  { label: "Admissions", href: "/admissions" },
];

export const CONTACT_INFO = [
  { id: "location", label: "Location", value: "Karuvanchal, Kannur", icon: MapPin, href: "#" },
  { id: "phone", label: "Phone", value: "+91 98765 43210", icon: Phone, href: "tel:+919876543210" },
  { id: "email", label: "Email", value: "hello@amc.edu", icon: Mail, href: "mailto:hello@amc.edu" },
  { id: "hours", label: "Working Hours", value: "Monday – Saturday (9 AM - 6 PM)", icon: Clock, href: null },
];

export const QUICK_INFO: FooterInfoType[] = [
  { id: "info-1", text: "Offline & Online Classes", icon: BookOpen },
  { id: "info-2", text: "Admissions Open", icon: UserPlus },
  { id: "info-3", text: "Quick Support", icon: Phone },
  { id: "info-4", text: "Trusted by Hundreds of Students", icon: Star },
];

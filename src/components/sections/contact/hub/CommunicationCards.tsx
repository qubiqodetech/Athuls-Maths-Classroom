"use client";

import { motion } from "motion/react";
import { Phone, MessageSquare, Mail, MapPin, Instagram } from "lucide-react";

const cards = [
  {
    title: "Call Us",
    description: "Mon-Sat, 9am to 6pm",
    cta: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: Phone,
    color: "text-blue-600",
    bg: "bg-blue-50 group-hover:bg-blue-100",
  },
  {
    title: "WhatsApp",
    description: "Quick queries & support",
    cta: "Chat with Advisor",
    href: "#",
    icon: MessageSquare,
    color: "text-green-600",
    bg: "bg-green-50 group-hover:bg-green-100",
  },
  {
    title: "Email Us",
    description: "For detailed inquiries",
    cta: "hello@athulsmaths.com",
    href: "mailto:hello@athulsmaths.com",
    icon: Mail,
    color: "text-purple-600",
    bg: "bg-purple-50 group-hover:bg-purple-100",
  },
  {
    title: "Visit Classroom",
    description: "Experience the environment",
    cta: "Get Directions",
    href: "#visit",
    icon: MapPin,
    color: "text-[#E31E24]",
    bg: "bg-[#E31E24]/5 group-hover:bg-[#E31E24]/10",
  },
  {
    title: "Instagram",
    description: "Follow our daily updates",
    cta: "@athulsmaths",
    href: "#",
    icon: Instagram,
    color: "text-pink-600",
    bg: "bg-pink-50 group-hover:bg-pink-100",
  },
];

export function CommunicationCards() {
  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, index) => (
        <motion.a
          key={card.title}
          href={card.href}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group flex items-center gap-6 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] hover:shadow-md transition-all duration-300 hover:border-[#D1D5DB]"
        >
          <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${card.bg}`}>
            <card.icon className={`w-6 h-6 ${card.color}`} />
          </div>
          <div className="flex-1">
            <h4 className="font-display text-lg font-bold text-[#0D1B2A]">
              {card.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-1">
              {card.description}
            </p>
            <p className={`text-sm font-semibold ${card.color}`}>
              {card.cta}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

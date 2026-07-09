"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Home, Info, BookOpen, Users, Trophy, Image as ImageIcon, GraduationCap, PhoneCall } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Faculty", href: "/faculty", icon: Users },
  { name: "Results", href: "/results", icon: Trophy },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Admissions", href: "/admissions", icon: GraduationCap },
  { name: "Contact", href: "/contact", icon: PhoneCall },
]

export function QuickLinks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-16 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-6"
      >
        Quick Navigation
      </motion.p>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
      >
        {quickLinks.map((link) => (
          <motion.div key={link.name} variants={item}>
            <Link
              href={link.href}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 p-4 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-[#E31E24]/5 group-hover:text-[#E31E24] transition-colors">
                <link.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-[#0D1B2A] text-sm sm:text-base group-hover:text-[#E31E24] transition-colors">
                  {link.name}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

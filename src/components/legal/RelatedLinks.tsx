"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, FileText, Phone, GraduationCap, Shield, FileQuestion } from "lucide-react"
import React from "react"

interface RelatedLinksProps {
  page?: 'privacy' | 'terms';
}

export function RelatedLinks({ page = 'privacy' }: RelatedLinksProps) {
  const privacyLinks = [
    {
      title: "Terms & Conditions",
      description: "Read the rules and guidelines for using our services.",
      href: "/terms-and-conditions",
      icon: <FileText className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Contact Us",
      description: "Have questions about your privacy? Get in touch.",
      href: "/contact",
      icon: <Phone className="w-6 h-6" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Admissions",
      description: "Ready to join? View our admission process.",
      href: "/admissions",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ]

  const termsLinks = [
    {
      title: "Privacy Policy",
      description: "Learn how we collect, use, and protect your data.",
      href: "/privacy-policy",
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Contact Us",
      description: "Have questions? Get in touch with our team.",
      href: "/contact",
      icon: <Phone className="w-6 h-6" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "FAQ",
      description: "Find answers to commonly asked questions.",
      href: "/faq",
      icon: <FileQuestion className="w-6 h-6" />,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ]

  const displayLinks = page === 'terms' ? termsLinks : privacyLinks;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 pt-16 border-t border-gray-100"
    >
      <h3 className="text-xl font-display font-semibold text-[#0D1B2A] mb-8">
        Related Resources
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayLinks.map((link, index) => (
          <Link
            key={link.title}
            href={link.href}
            className="group block p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition-all"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${link.bg} ${link.color}`}>
              {link.icon}
            </div>
            <h4 className="font-semibold text-[#0D1B2A] mb-2 flex items-center gap-2">
              {link.title}
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#E31E24] group-hover:translate-x-1 transition-all" />
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

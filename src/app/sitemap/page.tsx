"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ChevronRight, Home, Info, BookOpen, Users, ShieldAlert, Phone, Briefcase, Award, Image as ImageIcon, Map, GraduationCap, LayoutGrid, FileText } from "lucide-react"

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="w-6 h-6 text-[#E31E24]" />,
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Careers", href: "/careers" },
      ]
    },
    {
      title: "Academics",
      icon: <BookOpen className="w-6 h-6 text-[#E31E24]" />,
      links: [
        { name: "All Courses", href: "/courses" },
        { name: "SSLC Mathematics", href: "/courses/sslc-mathematics-foundation" },
        { name: "Plus One Mathematics", href: "/courses/plus-one-mathematics" },
        { name: "Plus Two Mathematics", href: "/courses/plus-two-mathematics" },
        { name: "Crash Courses", href: "/courses/sslc-crash-course" },
        { name: "Entrance Coaching", href: "/courses/entrance-coaching" },
      ]
    },
    {
      title: "People",
      icon: <Users className="w-6 h-6 text-[#E31E24]" />,
      links: [
        { name: "Faculty", href: "/faculty" },
        { name: "Tutors", href: "/tutors" },
      ]
    },
    {
      title: "Information",
      icon: <Info className="w-6 h-6 text-[#E31E24]" />,
      links: [
        { name: "Admissions", href: "/admissions" },
        { name: "Announcements", href: "/announcements" },
        { name: "FAQ", href: "/faq" },
      ]
    },
    {
      title: "Showcase",
      icon: <Award className="w-6 h-6 text-[#E31E24]" />,
      links: [
        { name: "Results", href: "/results" },
        { name: "Gallery", href: "/gallery" },
      ]
    },
    {
      title: "Legal",
      icon: <ShieldAlert className="w-6 h-6 text-[#E31E24]" />,
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-[#0D1B2A] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#0D1B2A] font-medium">Sitemap</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6 tracking-tight">
            Sitemap
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl font-light">
            Navigate through all the pages of Athul's Maths Classroom website. Find what you are looking for quickly and easily.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-8 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-[#0D1B2A] font-display">{section.title}</h2>
              </div>
              
              <ul className="space-y-4 flex-grow">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="group flex items-center text-gray-600 hover:text-[#E31E24] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#E31E24] mr-3 transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

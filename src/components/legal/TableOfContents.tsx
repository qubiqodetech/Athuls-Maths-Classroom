"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="sticky top-32 lg:max-h-[calc(100vh-8rem)] overflow-y-auto"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-6">
        Table of Contents
      </h3>
      <ul className="space-y-3 border-l-2 border-gray-100">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`block pl-4 py-1 text-sm transition-colors border-l-2 -ml-[2px] ${
                activeId === section.id
                  ? "border-[#E31E24] text-[#E31E24] font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

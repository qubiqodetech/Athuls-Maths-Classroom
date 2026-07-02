"use client"

import { TopicType } from "./types"
import { motion, AnimatePresence } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopicsGridProps {
  topics: TopicType[]
}

export function TopicsGrid({ topics }: TopicsGridProps) {
  const [openId, setOpenId] = useState<string | null>(topics[0]?.id || null)

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-6">
      <Heading as="h3" size="l" className="text-navy-900">
        Topics Covered
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((topic, index) => {
          const isOpen = openId === topic.id
          
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(
                "border rounded-xl overflow-hidden transition-colors duration-300",
                isOpen ? "border-primary-red/30 bg-red-50/30 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"
              )}
            >
              <button
                onClick={() => toggleOpen(topic.id)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
              >
                <span className="font-semibold text-navy-900">{topic.title}</span>
                <ChevronDown 
                  className={cn(
                    "w-4 h-4 text-gray-400 transition-transform duration-300",
                    isOpen && "transform rotate-180 text-primary-red"
                  )} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-4 pt-1 border-t border-gray-100/50">
                      {topic.description && (
                        <p className="text-sm text-gray-600 mb-2">{topic.description}</p>
                      )}
                      {topic.subtopics && topic.subtopics.length > 0 && (
                        <ul className="list-disc pl-4 space-y-1">
                          {topic.subtopics.map((sub, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

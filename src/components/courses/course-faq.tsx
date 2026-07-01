"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface CourseFAQProps {
  faqs: { question: string; answer: string }[];
}

export function CourseFAQ({ faqs }: CourseFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Common questions about this specific course.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-[#0D1B2A] pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300",
                    openIndex === index && "transform rotate-180 text-[#E31E24]"
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

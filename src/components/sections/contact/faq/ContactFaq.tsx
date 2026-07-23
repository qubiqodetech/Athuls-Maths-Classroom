"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/src/lib/utils";

const FAQS = [
  {
    question: "What are your office visiting hours?",
    answer: "Our main office is open from Monday to Saturday, between 9:00 AM and 6:00 PM. On Sundays, we are available from 10:00 AM to 2:00 PM, primarily for scheduled meetings and inquiries."
  },
  {
    question: "Do I need a prior appointment to meet a counselor?",
    answer: "While walk-ins are welcome during our regular office hours, we highly recommend booking an appointment. This ensures a dedicated academic counselor is available to guide you without any waiting time."
  },
  {
    question: "How long does it take to process an admission inquiry?",
    answer: "Once you submit an inquiry or admission form, our team typically responds within 24 hours. During peak admission seasons, it might take up to 48 hours, but we prioritize getting back to you as quickly as possible."
  },
  {
    question: "Can I get a tour of the classrooms before enrolling?",
    answer: "Absolutely! We encourage parents and students to visit our campus, see the classrooms, and understand our teaching environment. Just let us know when you'd like to drop by."
  }
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-[800px]">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
            Common Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Quick answers to the questions we get asked most often.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "bg-white rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen ? "border-[#0D1B2A] shadow-md" : "border-gray-200 hover:border-gray-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-[#0D1B2A] text-lg pr-8">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    isOpen ? "bg-[#0D1B2A] text-white" : "bg-gray-100 text-gray-500"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

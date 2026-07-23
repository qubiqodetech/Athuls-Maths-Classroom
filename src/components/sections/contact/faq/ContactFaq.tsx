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
    <section className="py-32 bg-[#050816] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0D1B2A]/40 via-transparent to-transparent blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-[900px]">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Support</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Everything you need to know about reaching out to us and visiting our campus.
          </motion.p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative bg-white/5 backdrop-blur-md rounded-2xl transition-all duration-500 overflow-hidden",
                  isOpen ? "bg-white/10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]" : "hover:bg-white/[0.07]"
                )}
              >
                {/* Subtle top border gradient for open state */}
                {isOpen && (
                  <motion.div 
                    layoutId="activeFaqBorder"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent opacity-70" 
                  />
                )}

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={cn(
                    "font-sora font-semibold text-lg md:text-xl pr-8 transition-colors duration-300",
                    isOpen ? "text-white" : "text-white/80"
                  )}>
                    {faq.question}
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                    isOpen ? "bg-[#E31E24] text-white" : "bg-white/10 text-white/60 group-hover:bg-white/20"
                  )}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed font-light text-base md:text-lg">
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

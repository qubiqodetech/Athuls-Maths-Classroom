"use client";

import { motion } from "motion/react";
import { PhoneCall, MessageCircle, ArrowRight, Mail } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0D1B2A]/5 via-transparent to-transparent blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0D1B2A]">
              We're Here to Help
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0D1B2A] leading-[1.05] mb-6">
              Get in touch with our <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B2A] to-[#E31E24]">admissions team.</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto">
              Whether you have a question about courses, admissions, or just want to say hello, we'd love to hear from you. 
            </p>
          </motion.div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-20">
          {[
            {
              icon: PhoneCall,
              title: "Call Us",
              desc: "Mon-Sat from 9am to 6pm.",
              linkText: "+91 98765 43210",
              href: "tel:+919876543210",
              color: "text-blue-600",
              bgColor: "bg-blue-50",
              delay: 0.3
            },
            {
              icon: MessageCircle,
              title: "Chat on WhatsApp",
              desc: "Get quick answers to queries.",
              linkText: "Start a chat",
              href: "https://wa.me/919876543210",
              color: "text-green-600",
              bgColor: "bg-green-50",
              delay: 0.4
            },
            {
              icon: Mail,
              title: "Email Us",
              desc: "We'll respond within 24 hours.",
              linkText: "hello@amc.edu.in",
              href: "mailto:hello@amc.edu.in",
              color: "text-red-600",
              bgColor: "bg-red-50",
              delay: 0.5
            }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-8 flex-1">{item.desc}</p>
              <div className="flex items-center text-[#0D1B2A] font-semibold group-hover:text-[#E31E24] transition-colors">
                {item.linkText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

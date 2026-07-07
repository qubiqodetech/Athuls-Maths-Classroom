"use client";

import { motion } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { Send, MessageSquare } from "lucide-react";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-[#E5E7EB]"
    >
      <div className="mb-8">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-2">
          Send Us A Message
        </h3>
        <p className="text-muted-foreground">
          We usually respond within 2-4 working hours.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="studentName" className="text-sm font-semibold text-[#0D1B2A]">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="parentName" className="text-sm font-semibold text-[#0D1B2A]">
              Parent Name <span className="text-muted-foreground font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="parentName"
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all"
              placeholder="Jane Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-[#0D1B2A]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all"
              placeholder="+91 00000 00000"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-[#0D1B2A]">
              Email Address <span className="text-muted-foreground font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="class" className="text-sm font-semibold text-[#0D1B2A]">
              Class / Grade
            </label>
            <select
              id="class"
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all appearance-none"
            >
              <option value="" disabled selected>Select Class</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="text-sm font-semibold text-[#0D1B2A]">
              Preferred Contact Time
            </label>
            <select
              id="time"
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all appearance-none"
            >
              <option value="" disabled selected>Select Time</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 7 PM)</option>
              <option value="any">Any Time</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-[#0D1B2A]">
            Message or Query
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all resize-none"
            placeholder="How can we help you?"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="button"
            size="lg"
            className="flex-1 bg-[#E31E24] hover:bg-[#E31E24]/90 text-white h-14 rounded-xl text-base group"
          >
            Send Message
            <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="flex-1 border-[#E5E7EB] text-[#0D1B2A] hover:bg-[#F8FAFC] h-14 rounded-xl text-base group bg-white"
          >
            <MessageSquare className="mr-2 w-4 h-4 text-[#16A34A]" />
            Continue on WhatsApp
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

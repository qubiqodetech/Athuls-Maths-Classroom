"use client";

import { motion } from "motion/react";
import { FileText, Users, CalendarDays, CreditCard, Laptop, Clock } from "lucide-react";

const cards = [
  {
    title: "Required Documents",
    description: "Passport size photo, Aadhar copy, and previous mark lists.",
    icon: FileText,
  },
  {
    title: "Eligibility",
    description: "Students must have completed the previous academic year with a minimum passing grade.",
    icon: Users,
  },
  {
    title: "Batch Availability",
    description: "Morning, evening, and weekend batches available for different programs.",
    icon: CalendarDays,
  },
  {
    title: "Fees Structure",
    description: "Transparent fee structure with optional installment plans available.",
    icon: CreditCard,
  },
  {
    title: "Learning Mode",
    description: "Offline classroom sessions with digital supplementary materials.",
    icon: Laptop,
  },
  {
    title: "Course Duration",
    description: "Full-year academic programs running aligned with the school curriculum.",
    icon: Clock,
  }
];

export function AdmissionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group"
        >
          <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center mb-6 group-hover:border-[#E31E24] group-hover:bg-[#E31E24]/5 transition-colors duration-300">
            <card.icon className="w-6 h-6 text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors duration-300" />
          </div>
          <h4 className="font-display text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors duration-300">
            {card.title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

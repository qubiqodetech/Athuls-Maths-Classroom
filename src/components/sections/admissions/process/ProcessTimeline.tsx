"use client";

import { motion } from "motion/react";
import { BookOpen, MessageSquare, MapPin, CheckCircle, GraduationCap } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Choose Your Course",
    description: "Explore our Foundation or Entrance programs based on your academic goals.",
    icon: BookOpen,
  },
  {
    id: "02",
    title: "Talk To Our Advisor",
    description: "Get personalized guidance to ensure the best fit for your learning style.",
    icon: MessageSquare,
  },
  {
    id: "03",
    title: "Visit The Classroom",
    description: "Experience the AMC learning environment firsthand. (Optional)",
    icon: MapPin,
  },
  {
    id: "04",
    title: "Complete Admission",
    description: "Submit required documents and complete the enrollment process.",
    icon: CheckCircle,
  },
  {
    id: "05",
    title: "Begin Learning",
    description: "Start your journey towards academic excellence with AMC.",
    icon: GraduationCap,
  }
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Connecting Line (Desktop) */}
      <div className="hidden lg:block absolute top-[5.5rem] left-[10%] right-[10%] h-[2px] bg-[#E5E7EB] z-0">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#E31E24]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#E5E7EB] flex items-center justify-center transition-colors duration-500 group-hover:border-[#E31E24] shadow-sm group-hover:shadow-md relative z-10">
                <step.icon className="w-6 h-6 text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors duration-500" />
              </div>
              
              {/* Connecting Line (Mobile) */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden absolute top-16 bottom-[-2rem] left-1/2 -translate-x-1/2 w-[2px] bg-[#E5E7EB]">
                  <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#E31E24]"
                  />
                </div>
              )}
            </div>
            
            <div className="bg-[#F8FAFC] lg:bg-transparent p-6 rounded-2xl lg:p-0 border border-[#E5E7EB] lg:border-none relative z-10 w-full max-w-sm">
              <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-xs mb-2 block">
                Step {step.id}
              </span>
              <h3 className="font-display text-xl font-bold text-[#0D1B2A] mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

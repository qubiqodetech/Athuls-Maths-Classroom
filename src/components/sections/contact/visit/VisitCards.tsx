"use client";

import { motion } from "motion/react";
import { MapPin, Navigation, Car, Bus, Clock, CalendarDays } from "lucide-react";

const visitDetails = [
  {
    icon: MapPin,
    title: "Classroom Location",
    description: "Athul's Maths Classroom, 2nd Floor, EduSpace Building, Ernakulam, Kerala 682016",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Ample parking available in the basement for students and parents. Street parking also nearby.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Bus,
    title: "Public Transport",
    description: "2 minutes walk from Kaloor Metro Station. Multiple bus stops within 100 meters.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Monday to Saturday: 9:00 AM - 6:00 PM. Closed on Sundays except during exam seasons.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: CalendarDays,
    title: "Appointments",
    description: "While walk-ins are welcome, we recommend booking a visit to ensure our advisors are available.",
    color: "text-[#E31E24]",
    bg: "bg-[#E31E24]/5",
  },
];

export function VisitCards() {
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-sm mb-4"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <Navigation className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#0D1B2A] mb-1">
              Easy To Reach
            </h3>
            <p className="text-muted-foreground text-sm">
              Located in the heart of the city, AMC is easily accessible by all major transport modes.
            </p>
          </div>
        </div>
        
        {/* Simplified Map Preview */}
        <div className="w-full h-48 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Maps_Pin.svg')] bg-repeat bg-[length:50px_50px]" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <MapPin className="w-8 h-8 text-[#E31E24]" />
            <span className="font-semibold text-[#0D1B2A] text-sm bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              View on Google Maps
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visitDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`p-6 rounded-2xl border border-[#E5E7EB] bg-white hover:shadow-md transition-shadow duration-300 ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${detail.bg}`}>
              <detail.icon className={`w-5 h-5 ${detail.color}`} />
            </div>
            <h4 className="font-bold text-[#0D1B2A] mb-2">{detail.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {detail.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

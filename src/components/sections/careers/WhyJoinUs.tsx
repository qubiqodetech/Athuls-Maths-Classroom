"use client";

import { motion } from "motion/react";
import { BookOpen, Users, TrendingUp, Heart } from "lucide-react";

const PERKS = [
  {
    title: "Continuous Learning",
    description: "We invest in your growth with professional development programs and workshops.",
    icon: BookOpen,
  },
  {
    title: "Collaborative Culture",
    description: "Work with a team of passionate educators who support and inspire each other.",
    icon: Users,
  },
  {
    title: "Career Growth",
    description: "Clear paths for advancement within our expanding educational network.",
    icon: TrendingUp,
  },
  {
    title: "Impactful Work",
    description: "Make a real difference in the academic journeys of hundreds of students.",
    icon: Heart,
  },
];

export function WhyJoinUs() {
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4"
          >
            Why Build Your Career at AMC?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-gray-600"
          >
            We offer more than just a job; we offer a platform to inspire, innovate, and grow in a supportive environment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERKS.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#E31E24]">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{perk.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

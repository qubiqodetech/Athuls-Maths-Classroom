"use client";

import { motion } from "motion/react";
import { Youtube, Instagram, ArrowUpRight } from "lucide-react";

export function ContactSocial() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-500 text-lg">
              Follow us on social media for daily math tricks, student achievements, study tips, and exclusive behind-the-scenes content from our classrooms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instagram Card */}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-[2px]"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="relative h-full bg-white/95 backdrop-blur-3xl rounded-[calc(2rem-2px)] p-10 flex flex-col justify-between items-start transition-all duration-500 group-hover:bg-white/90">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[2px] mb-8">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-pink-600" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2 group-hover:text-pink-600 transition-colors">Follow on Instagram</h3>
                <p className="text-gray-500 mb-6">See student achievements, campus life, and daily motivation.</p>
                <div className="inline-flex items-center gap-2 font-semibold text-[#0D1B2A]">
                  @athulsmaths
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </motion.a>

          {/* YouTube Card */}
          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] bg-red-500 p-[2px]"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="relative h-full bg-white/95 backdrop-blur-3xl rounded-[calc(2rem-2px)] p-10 flex flex-col justify-between items-start transition-all duration-500 group-hover:bg-white/90">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-8">
                <Youtube className="w-8 h-8 text-[#E31E24]" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2 group-hover:text-[#E31E24] transition-colors">Subscribe on YouTube</h3>
                <p className="text-gray-500 mb-6">Watch sample classes, complex problem breakdowns, and exam strategies.</p>
                <div className="inline-flex items-center gap-2 font-semibold text-[#0D1B2A]">
                  Athul's Maths Classroom
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

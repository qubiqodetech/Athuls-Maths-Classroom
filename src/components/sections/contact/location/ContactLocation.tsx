"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ContactLocation() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
                Visit Our Campus
              </h2>
              <p className="text-gray-500 text-lg max-w-md">
                Located in the heart of the city, our modern campus provides the perfect environment for focused learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#E31E24]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0D1B2A] text-xl mb-2">Headquarters</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Athul's Maths Classroom<br />
                    2nd Floor, EduTech Building<br />
                    MG Road, Kochi, Kerala 682016
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0D1B2A] text-xl mb-2">Office Hours</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 2:00 PM (Prior appointment only)
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  className="bg-[#0D1B2A] text-white hover:bg-[#0D1B2A]/90 rounded-xl px-6 h-12 gap-2"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-gray-100 shadow-xl relative bg-gray-50"
          >
            {/* Using a stylized map via iframe, with CSS filters for a minimalist look */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1353112278457!2d76.2798993!3d9.9723326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sMG%20Road%2C%20Ernakulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gray-900/5 rounded-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

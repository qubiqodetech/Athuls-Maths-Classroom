"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageSquare, MapPin, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { CTATrustMetrics } from "./CTATrustMetrics";
import { CTAQuote } from "./CTAQuote";
import { SuccessPromiseBanner } from "./SuccessPromiseBanner";

export function FinalAdmissionsCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0D1B2A] text-white">
      {/* Background Gradients and Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/20 via-[#0D1B2A]/0 to-[#0D1B2A]/0 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0D1B2A]/40 via-[#0D1B2A]/0 to-[#0D1B2A]/0 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[#0D1B2A]/50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center mb-16">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                Your academic journey Starts Here
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Take
              <br />
              <span className="text-[#E31E24]">The First Step</span>
              <br />
              Towards
              <br />
              Academic Excellence.
            </h2>

            <p className="text-lg sm:text-xl text-white/70 max-w-lg mb-10 leading-relaxed font-light">
              Every confident mathematician starts with a single decision. Join Athul's Maths Classroom and discover how structured guidance, concept-based learning, and personal mentoring can transform your learning journey.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Button
                asChild
                size="lg"
                className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90 rounded-full px-8 h-12 lg:h-14 text-base group"
              >
                <a href="#process">
                  Apply For Admission
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6 h-12 lg:h-14 text-base border-white/20 text-white hover:bg-white/10 group"
              >
                <a href="#contact">
                  <Phone className="mr-2 w-4 h-4" />
                  Talk To Advisor
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6 h-12 lg:h-14 text-base border-white/20 text-white hover:bg-white/10 group"
              >
                <a href="#">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Chat On WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6 h-12 lg:h-14 text-base border-white/20 text-white hover:bg-white/10 group"
              >
                <a href="#visit">
                  <MapPin className="mr-2 w-4 h-4" />
                  Schedule A Visit
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 lg:gap-12 relative"
          >
            <CTAQuote />
            <CTATrustMetrics />
          </motion.div>
        </div>

        <SuccessPromiseBanner />
      </div>
    </section>
  );
}

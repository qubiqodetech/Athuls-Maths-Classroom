"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight, ChevronLeft, GraduationCap, User, Users, Calendar, ArrowRight, Download, MessageCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { toast } from "sonner";

type Step = 1 | 2 | 3 | 4 | 5;

export function SmartAdmissionForm() {
  const [step, setStep] = React.useState<Step>(1);
  const [direction, setDirection] = React.useState(1);
  const [course, setCourse] = React.useState("");

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, 5) as Step);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1) as Step);
  };

  const submitForm = () => {
    // In a real app, submit data to server here
    toast.success("Application successfully submitted!", {
      description: "Our admissions team will contact you shortly."
    });
    nextStep(); // Move to success step
  };

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative min-h-[500px]">
      
      {/* Progress Indicator */}
      {step < 5 && (
        <div className="bg-gray-50/80 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  step >= s ? "w-12 bg-primary-red" : "w-6 bg-gray-200"
                )} 
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-500">
            Step {step} of 4
          </span>
        </div>
      )}

      <div className="p-8 md:p-12">
        <AnimatePresence mode="wait" custom={direction}>
          
          {/* STEP 1: Choose Course */}
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              className="flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy font-sora mb-2">
                Choose Your Course
              </h2>
              <p className="text-gray-500 mb-8">Select the academic program you want to enroll in.</p>
              
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                {[
                  { id: "sslc", title: "SSLC State Board", desc: "Class 10 Mathematics" },
                  { id: "plus-one", title: "Plus One Science", desc: "Class 11 Mathematics" },
                  { id: "plus-two", title: "Plus Two Science", desc: "Class 12 Mathematics" },
                  { id: "foundation", title: "Foundation Course", desc: "For classes 8 & 9" }
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCourse(c.id)}
                    className={cn(
                      "text-left p-6 rounded-2xl border-2 transition-all duration-200 group flex flex-col gap-2",
                      course === c.id 
                        ? "border-primary-red bg-primary-red/5" 
                        : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <GraduationCap className={cn(
                        "w-6 h-6",
                        course === c.id ? "text-primary-red" : "text-gray-400 group-hover:text-primary-navy"
                      )} />
                      <div className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                        course === c.id ? "border-primary-red bg-primary-red" : "border-gray-300"
                      )}>
                        {course === c.id && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <span className={cn(
                      "font-bold font-sora text-lg mt-2",
                      course === c.id ? "text-primary-navy" : "text-gray-700"
                    )}>{c.title}</span>
                    <span className="text-sm text-gray-500">{c.desc}</span>
                  </button>
                ))}
              </div>

              {course && (
                <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm flex items-start gap-3 mb-8">
                  <div className="mt-0.5">💡</div>
                  <p><strong>Smart Suggestion:</strong> Since you selected {course.replace('-', ' ')}, we recommend our weekend intensive batch for maximum revision time.</p>
                </div>
              )}

              <div className="mt-auto flex justify-end">
                <button 
                  onClick={nextStep}
                  disabled={!course}
                  className="bg-primary-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-navy/90 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Student Details */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              className="flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy font-sora mb-2">
                Student Details
              </h2>
              <p className="text-gray-500 mb-8">Tell us about the student applying for admission.</p>
              
              <div className="space-y-5 mb-8">
                <div className="relative">
                  <input type="text" id="fullName" className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer" placeholder=" " />
                  <label htmlFor="fullName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Full Name</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer" placeholder=" " />
                  <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Email Address</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer" placeholder=" " />
                  <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Phone Number</label>
                </div>
                <div className="relative">
                  <input type="text" id="school" className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer" placeholder=" " />
                  <label htmlFor="school" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Current School</label>
                </div>
              </div>

              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-gray-500 font-medium px-4 py-2 hover:text-primary-navy transition-colors">
                  Back
                </button>
                <button onClick={nextStep} className="bg-primary-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-navy/90 transition-colors flex items-center gap-2">
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Parent Details */}
          {step === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              className="flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy font-sora mb-2">
                Parent/Guardian Details
              </h2>
              <p className="text-gray-500 mb-8">We need this information to keep you updated on progress.</p>
              
              <div className="space-y-5 mb-8">
                <div className="relative">
                  <input type="text" id="parentName" className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer" placeholder=" " />
                  <label htmlFor="parentName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Parent's Full Name</label>
                </div>
                <div className="relative">
                  <input type="tel" id="parentPhone" className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer" placeholder=" " />
                  <label htmlFor="parentPhone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Parent's Phone Number</label>
                </div>
                <div className="relative">
                  <select id="relation" className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer bg-transparent">
                    <option value="" disabled selected>Select Relationship</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="guardian">Guardian</option>
                  </select>
                </div>
              </div>

              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-gray-500 font-medium px-4 py-2 hover:text-primary-navy transition-colors">
                  Back
                </button>
                <button onClick={nextStep} className="bg-primary-navy text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-navy/90 transition-colors flex items-center gap-2">
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Preferred Batch */}
          {step === 4 && (
            <motion.div
              key="step-4"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              className="flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-navy font-sora mb-2">
                Preferred Batch
              </h2>
              <p className="text-gray-500 mb-8">Select when you'd like to attend classes.</p>
              
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary-navy cursor-pointer transition-colors bg-white">
                  <input type="radio" name="batch" className="w-5 h-5 text-primary-red border-gray-300 focus:ring-primary-red" />
                  <div>
                    <span className="block font-bold text-primary-navy">Weekday Regular</span>
                    <span className="block text-sm text-gray-500">Mon, Wed, Fri (Evening)</span>
                  </div>
                </label>
                <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary-navy cursor-pointer transition-colors bg-white">
                  <input type="radio" name="batch" className="w-5 h-5 text-primary-red border-gray-300 focus:ring-primary-red" />
                  <div>
                    <span className="block font-bold text-primary-navy flex items-center gap-2">Weekend Special <span className="bg-primary-red/10 text-primary-red text-xs px-2 py-0.5 rounded-full">Recommended</span></span>
                    <span className="block text-sm text-gray-500">Sat & Sun (Morning)</span>
                  </div>
                </label>
              </div>
              
              <div className="relative mb-8">
                <textarea id="notes" rows={3} className="block w-full px-4 py-4 text-charcoal bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-primary-navy peer" placeholder=" "></textarea>
                <label htmlFor="notes" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Any specific queries or requirements? (Optional)</label>
              </div>

              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-gray-500 font-medium px-4 py-2 hover:text-primary-navy transition-colors">
                  Back
                </button>
                <button onClick={submitForm} className="bg-primary-red text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-red/90 transition-colors flex items-center gap-2 shadow-lg shadow-primary-red/20">
                  Submit Application <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Success */}
          {step === 5 && (
            <motion.div
              key="step-5"
              custom={direction}
              variants={variants}
              initial="initial"
              animate="active"
              className="flex flex-col h-full items-center justify-center text-center py-10"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy font-sora mb-4">
                Application Received!
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for applying to Athul's Maths Classroom. Our admissions team will review your application and contact you within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-100 text-primary-navy px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

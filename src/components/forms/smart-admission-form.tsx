"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronRight, GraduationCap, ArrowRight, Download, MessageCircle, Loader2, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitAdmissionForm } from "@/src/actions/admissions";

const admissionSchema = z.object({
  course: z.string().min(1, "Please select a course"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  school: z.string().min(2, "School name is required"),
  parentName: z.string().min(2, "Parent name is required"),
  parentPhone: z.string().min(10, "Valid parent phone number is required"),
  relation: z.string().min(1, "Please select a relationship"),
  batch: z.string().min(1, "Please select a batch preference"),
  notes: z.string().optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

type Step = 1 | 2 | 3 | 4 | 5;

const COURSES = [
  { id: "sslc", title: "SSLC State Board", desc: "Class 10 All Subjects" },
  { id: "plus-one", title: "Plus One Science", desc: "Physics, Chemistry, Maths & Biology" },
  { id: "plus-two", title: "Plus Two Science", desc: "Physics, Chemistry, Maths & Biology" },
  { id: "foundation", title: "Foundation Course", desc: "For classes 8 & 9 - Science & Maths" }
];

const STEPS = [
  { num: 1, title: "Choose Course", desc: "Select your academic program" },
  { num: 2, title: "Student Details", desc: "Basic information" },
  { num: 3, title: "Parent Details", desc: "Contact information" },
  { num: 4, title: "Preferences", desc: "Batch & requirements" }
];

export function SmartAdmissionForm() {
  const [step, setStep] = React.useState<Step>(1);
  const [direction, setDirection] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      course: "",
      fullName: "",
      email: "",
      phone: "",
      school: "",
      parentName: "",
      parentPhone: "",
      relation: "",
      batch: "",
      notes: "",
    },
    mode: "onTouched",
  });

  const course = watch("course");

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["course"];
    if (step === 2) fieldsToValidate = ["fullName", "email", "phone", "school"];
    if (step === 3) fieldsToValidate = ["parentName", "parentPhone", "relation"];
    
    const isValid = await trigger(fieldsToValidate);
    if (!isValid) return;

    setDirection(1);
    setStep((prev) => Math.min(prev + 1, 5) as Step);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1) as Step);
  };

  const onSubmit = async (data: AdmissionFormData) => {
    setIsSubmitting(true);
    try {
      const response = await submitAdmissionForm(data);
      if (response.success) {
        toast.success("Application successfully submitted!");
        setDirection(1);
        setStep(5);
      } else {
        toast.error("Failed to submit application", { description: response.message });
      }
    } catch (error) {
      toast.error("An error occurred", { description: "Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden relative min-h-[650px] flex flex-col md:flex-row isolate">
      
      {/* Left Sidebar - Hidden on small screens, visible on md+ */}
      <div className="w-full md:w-[35%] lg:w-[30%] bg-[#0D1B2A] text-white p-8 md:p-10 relative overflow-hidden flex flex-col shrink-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#E31E24]/20 via-[#0D1B2A]/0 to-[#0D1B2A]/0 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-12">
            <h3 className="font-display text-2xl font-bold mb-2">Smart Admission</h3>
            <p className="text-white/60 text-sm">Join Athul's Maths Classroom</p>
          </div>

          {step < 5 ? (
            <div className="flex-1">
              <div className="space-y-8">
                {STEPS.map((s, idx) => {
                  const isActive = step === s.num;
                  const isCompleted = step > s.num;
                  
                  return (
                    <div key={s.num} className="flex gap-4 relative">
                      {idx !== STEPS.length - 1 && (
                        <div className={cn(
                          "absolute left-[15px] top-10 bottom-[-24px] w-px transition-colors duration-300",
                          isCompleted ? "bg-[#E31E24]" : "bg-white/10"
                        )} />
                      )}
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 font-medium text-sm border-2",
                        isActive ? "bg-[#E31E24] border-[#E31E24] text-white" : 
                        isCompleted ? "bg-[#E31E24] border-[#E31E24] text-white" : 
                        "bg-[#0D1B2A] border-white/20 text-white/40"
                      )}>
                        {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                      </div>
                      <div className="pt-1.5">
                        <p className={cn(
                          "font-semibold transition-colors duration-300",
                          isActive ? "text-white" : isCompleted ? "text-white/80" : "text-white/40"
                        )}>{s.title}</p>
                        <p className={cn(
                          "text-xs transition-colors duration-300 mt-1",
                          isActive ? "text-white/70" : "text-white/30"
                        )}>{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-center">
               <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                 <ShieldCheck className="w-12 h-12 text-[#E31E24] mx-auto mb-4" />
                 <h4 className="font-bold text-lg mb-2">Secure & Private</h4>
                 <p className="text-white/60 text-sm">Your information is securely stored and never shared with third parties.</p>
               </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 text-sm text-white/50">
              <Clock className="w-4 h-4" />
              <span>Takes ~2 minutes to complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Area */}
      <div className="w-full md:w-[65%] lg:w-[70%] p-6 sm:p-10 md:p-12 bg-white relative flex flex-col min-h-[500px]">
        
        {/* Mobile Progress (Hidden on md+) */}
        {step < 5 && (
          <div className="md:hidden flex items-center gap-2 mb-8 pb-6 border-b border-gray-100">
            {STEPS.map((s) => (
              <div 
                key={s.num} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 flex-1",
                  step >= s.num ? "bg-[#E31E24]" : "bg-gray-100"
                )} 
              />
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 relative h-full">
          <AnimatePresence mode="wait" custom={direction}>
            
            {/* STEP 1 */}
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
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] font-sora mb-2">
                    Choose Your Course
                  </h2>
                  <p className="text-gray-500">Select the academic program you want to enroll in.</p>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 mb-8 flex-1">
                  {COURSES.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setValue("course", c.id, { shouldValidate: true })}
                      className={cn(
                        "text-left p-6 rounded-2xl border transition-all duration-300 group flex flex-col gap-3 relative overflow-hidden",
                        course === c.id 
                          ? "border-[#E31E24] bg-red-50/50 shadow-md shadow-red-500/5 ring-1 ring-[#E31E24]" 
                          : "border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white"
                      )}
                    >
                      {course === c.id && (
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#E31E24]/5 rounded-bl-full -mr-4 -mt-4 transition-all" />
                      )}
                      <div className="flex items-center justify-between w-full relative z-10">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                          course === c.id ? "bg-[#E31E24] text-white" : "bg-gray-50 text-gray-400 group-hover:text-[#0D1B2A]"
                        )}>
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300",
                          course === c.id ? "border-[#E31E24] bg-[#E31E24]" : "border-gray-200"
                        )}>
                          {course === c.id && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </div>
                      <div className="relative z-10">
                        <span className={cn(
                          "block font-bold font-sora text-lg mt-2 transition-colors",
                          course === c.id ? "text-[#0D1B2A]" : "text-gray-700"
                        )}>{c.title}</span>
                        <span className="text-sm text-gray-500">{c.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.course && <p className="text-red-500 text-sm mb-4">{errors.course.message}</p>}

                {course && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm flex items-start gap-3 mb-8 border border-blue-100"
                  >
                    <Sparkles className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" />
                    <p><strong>Smart Suggestion:</strong> Based on your selection of <strong>{COURSES.find(c => c.id === course)?.title}</strong>, our weekend intensive batch is highly recommended for optimal revision and practice.</p>
                  </motion.div>
                )}

                <div className="mt-4 pt-6 border-t border-gray-100 flex justify-end">
                  <button 
                    type="button"
                    onClick={nextStep}
                    disabled={!course}
                    className="bg-[#0D1B2A] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0D1B2A]/90 transition-all active:scale-[0.98] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#0D1B2A]/10"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
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
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] font-sora mb-2">
                    Student Details
                  </h2>
                  <p className="text-gray-500">Tell us about the student applying for admission.</p>
                </div>
                
                <div className="space-y-6 mb-8 flex-1">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative group">
                      <input type="text" id="fullName" {...register("fullName")} className={cn("block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all", errors.fullName ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "")} placeholder=" " />
                      <label htmlFor="fullName" className={cn("absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-[#0D1B2A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-3 left-4 cursor-text", errors.fullName ? "text-red-500" : "text-gray-500")}>Full Name</label>
                      {errors.fullName && <p className="text-red-500 text-xs mt-1.5 absolute -bottom-5 left-1">{errors.fullName.message}</p>}
                    </div>
                    <div className="relative group">
                      <input type="email" id="email" {...register("email")} className={cn("block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all", errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "")} placeholder=" " />
                      <label htmlFor="email" className={cn("absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-[#0D1B2A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-3 left-4 cursor-text", errors.email ? "text-red-500" : "text-gray-500")}>Email Address</label>
                      {errors.email && <p className="text-red-500 text-xs mt-1.5 absolute -bottom-5 left-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="relative group">
                    <input type="tel" id="phone" {...register("phone")} className={cn("block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all", errors.phone ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "")} placeholder=" " />
                    <label htmlFor="phone" className={cn("absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-[#0D1B2A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-3 left-4 cursor-text", errors.phone ? "text-red-500" : "text-gray-500")}>Phone Number</label>
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 absolute -bottom-5 left-1">{errors.phone.message}</p>}
                  </div>
                  <div className="relative group">
                    <input type="text" id="school" {...register("school")} className={cn("block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all", errors.school ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "")} placeholder=" " />
                    <label htmlFor="school" className={cn("absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-[#0D1B2A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-3 left-4 cursor-text", errors.school ? "text-red-500" : "text-gray-500")}>Current School</label>
                    {errors.school && <p className="text-red-500 text-xs mt-1.5 absolute -bottom-5 left-1">{errors.school.message}</p>}
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-gray-100 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-gray-500 font-medium px-6 py-3.5 hover:text-[#0D1B2A] transition-colors rounded-xl hover:bg-gray-50">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="bg-[#0D1B2A] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0D1B2A]/90 transition-all active:scale-[0.98] flex items-center gap-2 shadow-lg shadow-[#0D1B2A]/10">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
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
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] font-sora mb-2">
                    Parent Details
                  </h2>
                  <p className="text-gray-500">We need this information to keep you updated on progress.</p>
                </div>
                
                <div className="space-y-6 mb-8 flex-1">
                  <div className="relative group">
                    <input type="text" id="parentName" {...register("parentName")} className={cn("block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all", errors.parentName ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "")} placeholder=" " />
                    <label htmlFor="parentName" className={cn("absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-[#0D1B2A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-3 left-4 cursor-text", errors.parentName ? "text-red-500" : "text-gray-500")}>Parent's Full Name</label>
                    {errors.parentName && <p className="text-red-500 text-xs mt-1.5 absolute -bottom-5 left-1">{errors.parentName.message}</p>}
                  </div>
                  <div className="relative group">
                    <input type="tel" id="parentPhone" {...register("parentPhone")} className={cn("block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all", errors.parentPhone ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "")} placeholder=" " />
                    <label htmlFor="parentPhone" className={cn("absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-[#0D1B2A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-3 left-4 cursor-text", errors.parentPhone ? "text-red-500" : "text-gray-500")}>Parent's Phone Number</label>
                    {errors.parentPhone && <p className="text-red-500 text-xs mt-1.5 absolute -bottom-5 left-1">{errors.parentPhone.message}</p>}
                  </div>
                  <div className="relative group">
                    <select id="relation" {...register("relation")} className={cn("block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all", errors.relation ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "text-gray-500")}>
                      <option value="" disabled hidden>Select Relationship</option>
                      <option value="father" className="text-gray-900">Father</option>
                      <option value="mother" className="text-gray-900">Mother</option>
                      <option value="guardian" className="text-gray-900">Guardian</option>
                    </select>
                    {errors.relation && <p className="text-red-500 text-xs mt-1.5 absolute -bottom-5 left-1">{errors.relation.message}</p>}
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-gray-100 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-gray-500 font-medium px-6 py-3.5 hover:text-[#0D1B2A] transition-colors rounded-xl hover:bg-gray-50">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="bg-[#0D1B2A] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0D1B2A]/90 transition-all active:scale-[0.98] flex items-center gap-2 shadow-lg shadow-[#0D1B2A]/10">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
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
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] font-sora mb-2">
                    Preferences
                  </h2>
                  <p className="text-gray-500">Select when you'd like to attend classes.</p>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <label className={cn("flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all bg-white relative overflow-hidden group", watch("batch") === "weekday" ? "border-[#0D1B2A] shadow-md ring-1 ring-[#0D1B2A]" : "border-gray-200 hover:border-gray-300 hover:shadow-sm")}>
                    <input type="radio" value="weekday" {...register("batch")} className="w-5 h-5 mt-0.5 text-[#0D1B2A] border-gray-300 focus:ring-[#0D1B2A]" />
                    <div>
                      <span className="block font-bold text-[#0D1B2A] text-lg">Weekday</span>
                      <span className="block text-sm text-gray-500 mt-1">Mon, Wed, Fri (Evening)</span>
                    </div>
                  </label>
                  <label className={cn("flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all bg-white relative overflow-hidden group", watch("batch") === "weekend" ? "border-[#0D1B2A] shadow-md ring-1 ring-[#0D1B2A]" : "border-gray-200 hover:border-gray-300 hover:shadow-sm")}>
                    <input type="radio" value="weekend" {...register("batch")} className="w-5 h-5 mt-0.5 text-[#0D1B2A] border-gray-300 focus:ring-[#0D1B2A]" />
                    <div>
                      <span className="block font-bold text-[#0D1B2A] text-lg">Weekend <span className="inline-block ml-2 align-middle bg-green-100 text-green-700 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">Recommended</span></span>
                      <span className="block text-sm text-gray-500 mt-1">Sat & Sun (Morning)</span>
                    </div>
                  </label>
                  {errors.batch && <p className="text-red-500 text-sm sm:col-span-2">{errors.batch.message}</p>}
                </div>
                
                <div className="relative group flex-1">
                  <textarea id="notes" rows={3} {...register("notes")} className="block w-full px-5 py-4 text-gray-900 bg-gray-50 border border-transparent rounded-xl appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#0D1B2A]/10 focus:border-[#0D1B2A] peer transition-all resize-none" placeholder=" "></textarea>
                  <label htmlFor="notes" className="absolute text-sm duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-[#0D1B2A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-3 left-4 cursor-text text-gray-500">Any specific queries or requirements? (Optional)</label>
                </div>

                <div className="mt-4 pt-6 border-t border-gray-100 flex justify-between">
                  <button type="button" onClick={prevStep} className="text-gray-500 font-medium px-6 py-3.5 hover:text-[#0D1B2A] transition-colors rounded-xl hover:bg-gray-50">
                    Back
                  </button>
                  <button type="submit" disabled={isSubmitting} className="bg-[#E31E24] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#E31E24]/90 transition-all active:scale-[0.98] flex items-center gap-2 shadow-lg shadow-[#E31E24]/20 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Submit Application <Check className="w-5 h-5" /></>}
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
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 border-8 border-green-100/50"
                >
                  <Check className="w-10 h-10 text-green-500" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] font-sora mb-4">
                  Application Received!
                </h2>
                <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
                  Thank you for applying to Athul's Maths Classroom. Our admissions team will review your application and contact you shortly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm mx-auto">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors w-full shadow-lg shadow-[#25D366]/20">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <button type="button" onClick={() => window.print()} className="flex items-center justify-center gap-2 bg-gray-100 text-[#0D1B2A] px-6 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors w-full">
                    <Download className="w-5 h-5" />
                    Save Details
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "motion/react";
import { JobPosition } from "@/src/data/careers";
import { X, Send, User, Mail, FileText, Briefcase, Paperclip } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

interface JobApplicationModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onClose();
        setTimeout(() => setStatus("idle"), 500);
      }, 2000);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#0D1B2A]/40 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none overflow-y-auto pt-20 pb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-[#0D1B2A] text-white p-6 relative shrink-0">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold mb-2 pr-8">Apply for {job.title}</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 overflow-y-auto">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2">Application Submitted!</h3>
                    <p className="text-gray-600">
                      Thank you for applying. Our HR team will review your application and get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <User className="h-5 w-5" />
                        </div>
                        <input
                          type="text"
                          required
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-colors outline-none text-[#0D1B2A]"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Mail className="h-5 w-5" />
                        </div>
                        <input
                          type="email"
                          required
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-colors outline-none text-[#0D1B2A]"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                          <FileText className="h-5 w-5" />
                        </div>
                        <textarea
                          rows={4}
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-colors outline-none text-[#0D1B2A] resize-none"
                          placeholder="Tell us why you are a great fit for this role..."
                        />
                      </div>
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Resume / CV</label>
                       <div className="relative">
                          <input 
                            type="file" 
                            id="resume-upload" 
                            className="hidden" 
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                          />
                          <label 
                            htmlFor="resume-upload"
                            className="flex items-center justify-center gap-2 w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#0D1B2A] hover:bg-gray-50 transition-colors"
                          >
                            <Paperclip className="w-5 h-5 text-gray-400" />
                            <span className="text-sm text-gray-600 font-medium">
                              {fileName ? fileName : "Click to upload your resume (PDF, DOCX)"}
                            </span>
                          </label>
                       </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={cn(
                        "w-full py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 mt-4",
                        status === "sending" ? "bg-gray-400" : "bg-[#E31E24] hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5"
                      )}
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

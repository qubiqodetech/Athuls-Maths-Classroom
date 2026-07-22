"use client";

import { motion, AnimatePresence } from "motion/react";
import { Tutor } from "@/src/data/tutors";
import { X, Send, User, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

interface TutorContactModalProps {
  tutor: Tutor | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TutorContactModal({ tutor, isOpen, onClose }: TutorContactModalProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!tutor) return null;

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-[#0D1B2A] text-white p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 relative shrink-0">
                    <img 
                      src={tutor.image} 
                      alt={tutor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Message {tutor.name}</h2>
                    <p className="text-white/70 text-sm font-medium">{tutor.subject}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-6">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0D1B2A] mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      {tutor.name} will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <User className="h-5 w-5" />
                        </div>
                        <input
                          type="text"
                          required
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-colors outline-none text-[#0D1B2A]"
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <textarea
                          required
                          rows={4}
                          className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-colors outline-none text-[#0D1B2A] resize-none"
                          placeholder={`Hi ${tutor.name}, I'm interested in a session...`}
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={cn(
                        "w-full py-3 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2",
                        status === "sending" ? "bg-gray-400" : "bg-[#E31E24] hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5"
                      )}
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
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

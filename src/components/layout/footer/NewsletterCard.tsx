"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
      <h4 className="text-white font-bold mb-2">Stay Updated.</h4>
      <p className="text-gray-400 text-sm mb-4">
        Receive important announcements and batch updates.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status !== "idle"}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] transition-all disabled:opacity-50"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={status !== "idle"}
          className="w-full bg-[#E31E24] hover:bg-red-700 text-white rounded-xl py-3 text-sm font-bold transition-colors flex items-center justify-center gap-2 group disabled:opacity-50"
        >
          {status === "idle" && (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
          {status === "loading" && "Subscribing..."}
          {status === "success" && "Subscribed!"}
        </button>
      </form>
    </div>
  );
}

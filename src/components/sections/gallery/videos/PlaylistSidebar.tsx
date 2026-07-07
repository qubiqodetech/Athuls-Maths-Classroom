"use client";

import { motion } from "motion/react";
import { playlists } from "./data";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export function PlaylistSidebar() {
  const [activePlaylist, setActivePlaylist] = useState("Newest");

  return (
    <div className="bg-[#0D1B2A] rounded-3xl p-6 border border-white/5 h-full">
      <h3 className="font-display font-bold text-xl text-white mb-6">Playlists</h3>
      
      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
        {playlists.map((playlist, index) => {
          const isActive = activePlaylist === playlist;
          
          return (
            <button
              key={playlist}
              onClick={() => setActivePlaylist(playlist)}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal group border",
                isActive 
                  ? "bg-white/10 text-white border-white/10" 
                  : "bg-transparent text-white/60 hover:bg-white/5 hover:text-white/90 border-transparent"
              )}
            >
              <span className="font-medium">{playlist}</span>
              <ChevronRight className={cn(
                "w-4 h-4 transition-transform",
                isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              )} />
            </button>
          );
        })}
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/10 hidden lg:block">
        <p className="text-sm text-white/50 leading-relaxed">
          Subscribe to our YouTube channel to get notified about new educational content, student interviews, and campus highlights.
        </p>
      </div>
    </div>
  );
}

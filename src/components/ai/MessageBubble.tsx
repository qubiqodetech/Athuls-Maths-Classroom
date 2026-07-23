"use client";

import { motion } from "motion/react";
import { Sparkles, User } from "lucide-react";
import { cn } from "@/src/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isDark: boolean;
}

export function MessageBubble({ role, content, isDark }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex w-full mb-4 px-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn("flex max-w-[85%] gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
        {!isUser ? (
          <div className={cn(
            "shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm mt-1",
            isDark ? "bg-[#1E293B] border border-white/10" : "bg-gradient-to-tr from-[#0D1B2A] to-[#1a2c42]"
          )}>
            <Sparkles className={cn("w-4 h-4", isDark ? "text-gray-300" : "text-white")} />
          </div>
        ) : null}
        
        <div
          className={cn(
            "px-4 py-3 rounded-2xl text-[15px] leading-relaxed",
            isUser
              ? (isDark 
                  ? "bg-white text-[#0F172A] rounded-tr-sm shadow-md" 
                  : "bg-[#0D1B2A] text-white rounded-br-sm shadow-md shadow-[#0D1B2A]/10")
              : (isDark 
                  ? "bg-[#1E293B] border border-white/5 text-gray-200 shadow-sm rounded-tl-sm" 
                  : "bg-white border border-gray-100 text-gray-800 shadow-sm rounded-bl-sm")
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap font-medium">{content}</p>
          ) : (
            <div className={cn(
              "prose prose-sm prose-p:leading-relaxed max-w-none text-[15px]",
              isDark 
                ? "prose-invert prose-p:text-gray-200 prose-a:text-[#FCA5A5] prose-pre:bg-[#0F172A] prose-pre:border-white/10" 
                : "prose-pre:bg-gray-50 prose-pre:text-gray-900 prose-a:text-[#E31E24]"
            )}>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ node, href, ...props }) => {
                    const isExternal = href?.startsWith("http");
                    return (
                      <a 
                        href={href} 
                        target={isExternal ? "_blank" : undefined} 
                        rel={isExternal ? "noopener noreferrer" : undefined} 
                        className={cn("hover:underline font-medium transition-colors", isDark ? "text-red-400" : "text-[#E31E24]")}
                        {...props} 
                      />
                    );
                  },
                  code: ({ node, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    const isInline = !match && !className?.includes('language-');
                    if (isInline) {
                      return <code className={cn("px-1.5 py-0.5 rounded text-[13px] font-mono", isDark ? "bg-[#0F172A] text-red-300" : "bg-gray-100 text-[#E31E24]")} {...props}>{children}</code>;
                    }
                    return <pre className={cn("p-3 rounded-lg overflow-x-auto text-[13px] border my-2", isDark ? "bg-[#0F172A] border-white/10 text-gray-300" : "bg-gray-50 border-gray-100")}><code {...props}>{children}</code></pre>;
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { cn } from "@/src/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
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
        {!isUser && (
          <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-[#0D1B2A] to-[#1a2c42] flex items-center justify-center shadow-sm mt-1">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        )}
        
        <div
          className={cn(
            "px-4 py-3 rounded-2xl text-[15px] leading-relaxed",
            isUser
              ? "bg-[#0D1B2A] text-white rounded-br-sm shadow-md shadow-[#0D1B2A]/10"
              : "bg-white border border-gray-100 text-gray-800 shadow-sm rounded-bl-sm"
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap">{content}</p>
          ) : (
            <div className="prose prose-sm prose-p:leading-relaxed prose-pre:bg-gray-50 prose-pre:text-gray-900 prose-a:text-[#E31E24] max-w-none text-[15px]">
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
                        className="text-[#E31E24] hover:underline"
                        {...props} 
                      />
                    );
                  },
                  code: ({ node, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    const isInline = !match && !className?.includes('language-');
                    if (isInline) {
                      return <code className="px-1 py-0.5 bg-gray-100 rounded text-[#E31E24] text-[13px]" {...props}>{children}</code>;
                    }
                    // Disable large code blocks by rendering them as pre text, per spec
                    return <pre className="p-3 bg-gray-50 rounded-lg overflow-x-auto text-[13px] border border-gray-100 my-2"><code {...props}>{children}</code></pre>;
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

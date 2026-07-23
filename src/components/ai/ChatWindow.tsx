"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";
import { EmptyState } from "./EmptyState";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { cn } from "@/src/lib/utils";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export function ChatWindow({ isOpen, onClose, isDark, toggleTheme }: ChatWindowProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ id: string, role: string, content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: { role: string, content: string }) => {
    if (!message.content.trim()) return;
    
    const newMessages = [...messages, { id: Date.now().toString(), role: message.role, content: message.content }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let assistantMessageContent = "";
      
      const assistantMessageId = (Date.now() + 1).toString();
      
      setMessages((prev) => [...prev, { id: assistantMessageId, role: "assistant", content: "" }]);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        
        if (value) {
          const chunkString = decoder.decode(value, { stream: true });
          const lines = chunkString.split('\n');
          for (const line of lines) {
            if (line.startsWith('0:')) {
              try {
                const text = JSON.parse(line.slice(2));
                assistantMessageContent += text;
                setMessages((prev) => prev.map((msg) => msg.id === assistantMessageId ? { ...msg, content: assistantMessageContent } : msg));
              } catch (e) {
                // ignore
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { id: Date.now().toString(), role: "assistant", content: "I'm sorry, I encountered an error. Please try again or contact admissions." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSuggestedQuestion = (question: string) => {
    sendMessage({ role: "user", content: question });
  };

  const handleReset = () => {
    setMessages([]);
  };

  const handleSubmit = (val: string) => {
    if (!val.trim()) return;
    sendMessage({ role: "user", content: val });
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={cn(
            "fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[100] w-[calc(100vw-32px)] sm:w-[420px] h-[650px] max-h-[calc(100vh-120px)] rounded-[32px] flex flex-col overflow-hidden backdrop-blur-3xl shadow-2xl transition-colors duration-300 ring-1 ring-inset",
            isDark 
              ? "bg-[#0B1221]/80 ring-white/10 shadow-black/50" 
              : "bg-white/90 ring-gray-900/5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.15)]"
          )}
        >
          {/* Subtle ambient gradients */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[32px]">
            <div className={cn(
              "absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-50",
              isDark ? "bg-[#38bdf8]/20" : "bg-red-400/10"
            )} />
            <div className={cn(
              "absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-[80px] opacity-50",
              isDark ? "bg-[#818cf8]/20" : "bg-blue-400/10"
            )} />
          </div>

          <ChatHeader onClose={onClose} onReset={handleReset} isDark={isDark} toggleTheme={toggleTheme} />
          
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 px-3 sm:px-4 flex flex-col relative z-10">
            {messages.length === 0 ? (
              <div className="flex flex-col flex-1">
                <div className="flex-1">
                  <EmptyState isDark={isDark} />
                </div>
                <div className="shrink-0 mb-2">
                  <SuggestedQuestions onSelect={handleSuggestedQuestion} isDark={isDark} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col pt-2">
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    role={message.role as "user" | "assistant"}
                    content={message.content}
                    isDark={isDark}
                  />
                ))}
                {isLoading && (
                   <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className={cn(
                     "flex w-full mb-4 px-4 justify-start"
                   )}
                 >
                   <div className="flex max-w-[85%] gap-3 flex-row">
                     <div className={cn(
                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center p-1.5 shadow-sm mt-1",
                        isDark ? "bg-[#1E293B] border border-white/10" : "bg-gradient-to-tr from-[#0D1B2A] to-[#1a2c42]"
                      )}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mx-0.5" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                     </div>
                   </div>
                 </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div className={cn(
            "shrink-0 relative z-20 px-2 pb-2",
          )}>
             <ChatInput
               onSubmit={handleSubmit}
               isLoading={isLoading}
               isDark={isDark}
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

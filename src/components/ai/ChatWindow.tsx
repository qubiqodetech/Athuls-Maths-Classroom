"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";
import { EmptyState } from "./EmptyState";
import { SuggestedQuestions } from "./SuggestedQuestions";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
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
          // Very simple parser for Vercel AI SDK data stream
          const lines = chunkString.split('\n');
          for (const line of lines) {
            if (line.startsWith('0:')) {
              try {
                const text = JSON.parse(line.slice(2));
                assistantMessageContent += text;
                setMessages((prev) => prev.map((msg) => msg.id === assistantMessageId ? { ...msg, content: assistantMessageContent } : msg));
              } catch (e) {
                // ignore JSON parse errors for incomplete chunks
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
    setInput(question);
    setTimeout(() => {
      sendMessage({ role: "user", content: question });
      setInput("");
    }, 50);
  };

  const handleReset = () => {
    setMessages([]);
  };

  const handleSubmit = (val: string) => {
    if (!val.trim()) return;
    sendMessage({ role: "user", content: val });
    setInput("");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[100] w-[calc(100vw-32px)] sm:w-[400px] h-[600px] max-h-[calc(100vh-120px)] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden border border-gray-200"
        >
          <ChatHeader onClose={onClose} onReset={handleReset} />
          
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 px-3 sm:px-4 flex flex-col">
            {messages.length === 0 ? (
              <div className="flex flex-col flex-1">
                <div className="flex-1">
                  <EmptyState />
                </div>
                <div className="shrink-0 mb-2">
                  <SuggestedQuestions onSelect={handleSuggestedQuestion} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    role={message.role as "user" | "assistant"}
                    content={message.content}
                  />
                ))}
                {isLoading && (
                   <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="flex w-full mb-4 px-4 justify-start"
                 >
                   <div className="flex max-w-[85%] gap-3 flex-row">
                     <div className="shrink-0 w-8 h-8 rounded-full bg-[#0D1B2A] flex items-center justify-center p-1.5 shadow-sm mt-1">
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

          <div className="shrink-0 bg-white border-t border-gray-100/60 z-10">
             <ChatInput 
              onSubmit={handleSubmit} 
              isLoading={isLoading} 
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

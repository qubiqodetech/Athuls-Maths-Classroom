"use client";

import { useState } from "react";
import { ChatLauncher } from "./ChatLauncher";
import { ChatWindow } from "./ChatWindow";

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <ChatLauncher isOpen={isOpen} toggleChat={() => setIsOpen(!isOpen)} isDark={isDark} />
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} isDark={isDark} toggleTheme={toggleTheme} />
    </>
  );
}

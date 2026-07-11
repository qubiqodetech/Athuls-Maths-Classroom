"use client";

import { useState } from "react";
import { ChatLauncher } from "./ChatLauncher";
import { ChatWindow } from "./ChatWindow";

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatLauncher isOpen={isOpen} toggleChat={() => setIsOpen(!isOpen)} />
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

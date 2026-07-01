"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "./theme-provider"
import { ToastProvider } from "./toast-provider"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
      <ToastProvider />
    </ThemeProvider>
  )
}

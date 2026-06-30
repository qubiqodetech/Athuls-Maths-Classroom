"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "./theme-provider"
import { LenisProvider } from "./lenis-provider"
import { ToastProvider } from "./toast-provider"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LenisProvider>
        {children}
        <ToastProvider />
      </LenisProvider>
    </ThemeProvider>
  )
}

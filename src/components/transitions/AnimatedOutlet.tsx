"use client"

import { ReactNode, Suspense } from "react"
import { usePathname } from "next/navigation"

// In a typical React Router app, Outlet is used for nested routing.
// In Next.js App Router, children are passed directly. This component 
// serves as a placeholder for any outlet-specific transition logic if needed.
export function AnimatedOutlet({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <Suspense key={pathname} fallback={null}>
      {children}
    </Suspense>
  )
}

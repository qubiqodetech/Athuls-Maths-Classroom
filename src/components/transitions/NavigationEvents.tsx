"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function NavigationEventsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This component can be used to trigger analytics or 
    // custom transition events when the route changes.
    // For now, it simply observes navigation events.
  }, [pathname, searchParams])

  return null
}

export function NavigationEvents() {
  return (
    <Suspense fallback={null}>
      <NavigationEventsInner />
    </Suspense>
  )
}

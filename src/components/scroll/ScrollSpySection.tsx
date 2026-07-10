"use client"

import { useEffect } from "react"
import { useScrollSpy } from "./ScrollProvider"

interface ScrollSpySectionProps {
  id: string;
}

export function ScrollSpySection({ id }: ScrollSpySectionProps) {
  const { registerSection, unregisterSection } = useScrollSpy()

  useEffect(() => {
    registerSection(id)
    return () => unregisterSection(id)
  }, [id, registerSection, unregisterSection])

  return null
}

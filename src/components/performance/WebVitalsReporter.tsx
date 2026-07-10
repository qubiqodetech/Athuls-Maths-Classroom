"use client"

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    // In a real application, you would send this to an analytics endpoint
    // console.log(metric)
  })

  return null
}

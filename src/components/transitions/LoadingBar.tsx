"use client"

import NextTopLoader from "nextjs-toploader"

export function LoadingBar() {
  return (
    <NextTopLoader
      color="#E31E24"
      initialPosition={0.08}
      crawlSpeed={200}
      height={2}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #E31E24,0 0 5px #E31E24"
    />
  )
}

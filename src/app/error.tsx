"use client"
export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-10 z-[99999] relative bg-white text-black mt-32">
      <h2 className="text-2xl text-red-600 font-bold">Something went wrong!</h2>
      <pre className="mt-4 p-4 bg-gray-100 rounded text-sm overflow-auto">{error.stack || error.message}</pre>
    </div>
  )
}

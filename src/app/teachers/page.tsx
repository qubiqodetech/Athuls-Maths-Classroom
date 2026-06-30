import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teachers",
  description: "Meet the expert mathematics teachers at AMC.",
}

export default function TeachersPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Teachers</h1>
    </div>
  )
}

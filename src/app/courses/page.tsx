import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore the mathematics courses offered at AMC.",
}

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Courses</h1>
    </div>
  )
}

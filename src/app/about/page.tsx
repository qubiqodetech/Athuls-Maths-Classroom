import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Athul's Maths Classroom and our mission.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">About Us</h1>
    </div>
  )
}

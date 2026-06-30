import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Athul's Maths Classroom.",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">FAQ</h1>
    </div>
  )
}

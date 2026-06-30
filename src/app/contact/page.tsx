import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Athul's Maths Classroom.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Contact Us</h1>
    </div>
  )
}

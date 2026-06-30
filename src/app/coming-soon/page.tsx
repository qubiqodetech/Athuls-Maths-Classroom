import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This feature is coming soon to Athul's Maths Classroom.",
}

export default function ComingSoonPage() {
  return (
    <div className="container mx-auto py-24 flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <h1 className="font-display text-4xl font-bold tracking-tight text-primary">Coming Soon</h1>
      <p className="text-muted-foreground">We are working hard to bring this feature to you.</p>
    </div>
  )
}

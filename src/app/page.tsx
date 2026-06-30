import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}

export default function HomePage() {
  return (
    <section className="container mx-auto py-24 min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-primary">
          Welcome to Athul&apos;s Maths Classroom
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Next Generation Educational Platform for Mathematics. Phase 1 foundation complete.
        </p>
      </div>
    </section>
  )
}

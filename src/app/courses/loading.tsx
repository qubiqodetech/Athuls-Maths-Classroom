import { HeroSkeleton } from "@/src/components/loading/HeroSkeleton"
import { CardSkeleton } from "@/src/components/loading/CardSkeleton"

export default function CoursesLoading() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSkeleton />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  )
}

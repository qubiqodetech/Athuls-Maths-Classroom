import { HeroSkeleton } from "@/src/components/loading/HeroSkeleton"
import { FormSkeleton } from "@/src/components/loading/FormSkeleton"

export default function ContactLoading() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSkeleton />
      <div className="container mx-auto px-4 py-16">
        <FormSkeleton fields={3} />
      </div>
    </div>
  )
}

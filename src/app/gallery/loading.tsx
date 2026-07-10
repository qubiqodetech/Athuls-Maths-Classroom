import { HeroSkeleton } from "@/src/components/loading/HeroSkeleton"
import { GallerySkeleton } from "@/src/components/loading/GallerySkeleton"

export default function GalleryLoading() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSkeleton />
      <div className="container mx-auto px-4 py-16">
        <GallerySkeleton items={9} />
      </div>
    </div>
  )
}

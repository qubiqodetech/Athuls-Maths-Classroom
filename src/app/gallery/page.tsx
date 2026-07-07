import { Metadata } from "next"
import { GalleryHero } from "@/src/components/sections/gallery/hero"
import { EditorialGallery } from "@/src/components/sections/gallery/editorial"

export const metadata: Metadata = {
  title: "Gallery | Athul's Maths Classroom",
  description: "Explore the learning environment, events, and moments at Athul's Maths Classroom.",
}

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <GalleryHero />
      <EditorialGallery />
    </main>
  )
}

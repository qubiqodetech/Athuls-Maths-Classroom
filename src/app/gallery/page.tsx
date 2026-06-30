import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glimpse into life at Athul's Maths Classroom.",
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Gallery</h1>
    </div>
  )
}

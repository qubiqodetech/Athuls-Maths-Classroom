export const galleryCategories = [
  "All",
  "Teaching",
  "Classroom",
  "Activities",
  "Events",
  "Revision",
  "Celebrations",
  "Awards",
  "Parents Meeting",
  "Seminars",
  "Workshops"
];

// We assign a layout type to each image to build the masonry look
export type LayoutType = "hero" | "supporting" | "panorama" | "editorial-card" | "highlight" | "mosaic";

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  caption?: string;
  imageUrl: string;
  layout: LayoutType;
}

export const galleryData: GalleryItem[] = [
  {
    id: "img-1",
    category: "Classroom",
    title: "Interactive Discussion",
    caption: "Students engaged in complex problem solving.",
    imageUrl: "https://picsum.photos/seed/gal-1/1600/1200",
    layout: "hero"
  },
  {
    id: "img-2",
    category: "Teaching",
    title: "Concept Building",
    imageUrl: "https://picsum.photos/seed/gal-2/800/800",
    layout: "supporting"
  },
  {
    id: "img-3",
    category: "Activities",
    title: "Group Study",
    imageUrl: "https://picsum.photos/seed/gal-3/800/800",
    layout: "supporting"
  },
  {
    id: "img-4",
    category: "Events",
    title: "Annual Day 2024",
    caption: "A celebration of academic and extracurricular achievements.",
    imageUrl: "https://picsum.photos/seed/gal-4/1600/600",
    layout: "panorama"
  },
  {
    id: "img-5",
    category: "Awards",
    title: "Topper Felicitation",
    imageUrl: "https://picsum.photos/seed/gal-5/600/800",
    layout: "editorial-card"
  },
  {
    id: "img-6",
    category: "Parents Meeting",
    title: "Parent-Teacher Interaction",
    imageUrl: "https://picsum.photos/seed/gal-6/600/800",
    layout: "editorial-card"
  },
  {
    id: "img-7",
    category: "Seminars",
    title: "Guest Lecture",
    imageUrl: "https://picsum.photos/seed/gal-7/600/800",
    layout: "editorial-card"
  },
  {
    id: "img-8",
    category: "Celebrations",
    title: "Festival Joy",
    caption: "Onam celebrations at the campus.",
    imageUrl: "https://picsum.photos/seed/gal-8/1200/1200",
    layout: "highlight"
  },
  {
    id: "img-9",
    category: "Workshops",
    title: "Exam Prep Workshop",
    imageUrl: "https://picsum.photos/seed/gal-9/800/600",
    layout: "mosaic"
  },
  {
    id: "img-10",
    category: "Revision",
    title: "Night Camp",
    imageUrl: "https://picsum.photos/seed/gal-10/800/600",
    layout: "mosaic"
  },
  {
    id: "img-11",
    category: "Teaching",
    title: "Doubt Clearance",
    imageUrl: "https://picsum.photos/seed/gal-11/800/600",
    layout: "mosaic"
  },
  {
    id: "img-12",
    category: "Classroom",
    title: "Focus & Dedication",
    imageUrl: "https://picsum.photos/seed/gal-12/800/600",
    layout: "mosaic"
  }
];

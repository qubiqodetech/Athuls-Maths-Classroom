export interface GalleryImageType {
  id: string;
  src: string;
  title: string;
  category: string;
  description?: string;
  size: "large" | "medium" | "small" | "panoramic";
}

export interface HighlightCardType {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface EventType {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface TimelineStepType {
  id: string;
  title: string;
  icon: any;
}

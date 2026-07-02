export interface GalleryImageType {
  id: string;
  src: string;
  alt: string;
  category: string;
  layout: "large" | "half" | "wide" | "third";
}

export interface FeatureType {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface JourneyStepType {
  id: string;
  label: string;
  icon: any;
}

export interface FacilityType {
  id: string;
  title: string;
  description: string;
  icon: any;
}

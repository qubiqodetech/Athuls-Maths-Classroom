export type RoleType = "Student" | "Parent";

export interface TestimonialType {
  id: string;
  name: string;
  role: RoleType;
  course: string;
  review: string;
  rating: number;
  image: string;
  date?: string;
  highlight?: string;
  isFeatured?: boolean;
}

export interface VideoTestimonialType {
  id: string;
  studentName: string;
  course: string;
  duration: string;
  thumbnail: string;
}

export interface MetricType {
  value: string;
  label: string;
}

export interface FilterType {
  id: string;
  label: string;
}

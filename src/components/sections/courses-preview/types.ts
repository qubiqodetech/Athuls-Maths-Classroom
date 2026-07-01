export interface CourseType {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: any; // Lucide icon
  badge?: string;
  isFeatured?: boolean;
}

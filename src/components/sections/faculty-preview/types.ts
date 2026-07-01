export interface FacultyType {
  id: string;
  name: string;
  role: string;
  subjects: string[];
  experience: string;
  bio: string;
  image: string;
  isFeatured?: boolean;
}

export interface StatType {
  value: string;
  label: string;
}

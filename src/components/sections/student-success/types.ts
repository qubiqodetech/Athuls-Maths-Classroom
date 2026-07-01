export interface StudentType {
  id: string;
  name: string;
  class: string;
  year: string;
  achievement: string;
  highlight: string;
  image: string;
  story?: string;
  isFeatured?: boolean;
}

export interface StatType {
  value: string;
  label: string;
}

export interface TimelineStepType {
  id: string;
  title: string;
  icon: any;
}

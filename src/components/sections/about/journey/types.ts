export interface MilestoneType {
  id: string;
  year?: string;
  title: string;
  description: string;
  icon: any;
  imageUrl?: string;
}

export interface AchievementType {
  id: string;
  value: string;
  label: string;
}

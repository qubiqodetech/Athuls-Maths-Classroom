export interface StoryChapterType {
  id: string;
  number: string;
  title: string;
  content: string[];
}

export interface TimelineItemType {
  id: string;
  year?: string;
  title: string;
  description: string;
  icon: any;
}

export interface MilestoneType {
  id: string;
  title: string;
  value: string;
  description: string;
}

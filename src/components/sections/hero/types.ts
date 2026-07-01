export interface HeroStat {
  value: string;
  label: string;
}

export interface FloatingCard {
  icon: string;
  text: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
}

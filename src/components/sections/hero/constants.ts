import { HeroStat, FloatingCard } from "./types";

export const HERO_STATS: HeroStat[] = [
  { value: "500+", label: "Students Mentored" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Years of Excellence" },
  { value: "100+", label: "A+ Achievers" },
];

export const FLOATING_CARDS: FloatingCard[] = [
  {
    icon: "📈",
    text: "98% Success Rate",
    position: { top: "15%", left: "-10%" },
    delay: 1.2,
  },
  {
    icon: "📚",
    text: "SSLC • Plus One • Plus Two",
    position: { bottom: "25%", left: "-15%" },
    delay: 1.4,
  },
  {
    icon: "🏆",
    text: "A+ Achievers",
    position: { top: "40%", right: "-10%" },
    delay: 1.6,
  },
  {
    icon: "👨‍🏫",
    text: "Experienced Faculty",
    position: { bottom: "10%", right: "-5%" },
    delay: 1.8,
  },
];

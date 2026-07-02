import { ACHIEVEMENT_STATS } from "./constants"
import { StatCard } from "./StatCard"

export function AchievementStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
      {ACHIEVEMENT_STATS.map((stat, index) => (
        <StatCard key={stat.id} stat={stat} index={index} />
      ))}
    </div>
  )
}

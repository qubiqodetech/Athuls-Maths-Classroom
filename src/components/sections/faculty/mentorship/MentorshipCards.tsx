"use client"

import { MentorshipCard } from "./MentorshipCard"
import { MENTORSHIP_PILLARS } from "./constants"

export function MentorshipCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {MENTORSHIP_PILLARS.map((pillar, index) => (
        <MentorshipCard 
          key={pillar.id}
          title={pillar.title}
          description={pillar.description}
          icon={pillar.icon}
          index={index}
        />
      ))}
    </div>
  )
}

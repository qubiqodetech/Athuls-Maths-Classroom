"use client"

import { RECOGNITION_CARDS } from "./constants"
import { RecognitionCard } from "./RecognitionCard"

export function RecognitionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
      {RECOGNITION_CARDS.map((item, index) => (
        <RecognitionCard key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}

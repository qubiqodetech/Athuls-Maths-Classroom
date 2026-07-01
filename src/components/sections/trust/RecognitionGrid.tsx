"use client";

import { RECOGNITION_CARDS } from "./constants";
import { RecognitionCard } from "./RecognitionCard";

export function RecognitionGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {RECOGNITION_CARDS.map((item, index) => (
        <RecognitionCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

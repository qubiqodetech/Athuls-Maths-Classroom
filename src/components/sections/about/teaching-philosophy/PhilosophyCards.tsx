import { PHILOSOPHY_CARDS } from "./constants";
import { PhilosophyCard } from "./PhilosophyCard";

export function PhilosophyCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-24">
      {PHILOSOPHY_CARDS.map((card, index) => (
        <PhilosophyCard key={card.id} card={card} index={index} />
      ))}
    </div>
  );
}

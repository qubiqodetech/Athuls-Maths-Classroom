import { MILESTONES } from "./constants";
import { MilestoneCard } from "./MilestoneCard";

export function MilestoneGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
      {MILESTONES.map((milestone, index) => (
        <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
      ))}
    </div>
  );
}

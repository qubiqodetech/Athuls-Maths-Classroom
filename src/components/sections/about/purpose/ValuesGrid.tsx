import { CORE_VALUES } from "./constants";
import { ValueCard } from "./ValueCard";

export function ValuesGrid() {
  return (
    <div className="mb-24 md:mb-32">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-[#0D1B2A] mb-4">Core Values</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The principles that guide our interactions, decisions, and commitment to every student's success.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CORE_VALUES.map((value, index) => (
          <ValueCard key={value.id} value={value} index={index} />
        ))}
      </div>
    </div>
  );
}

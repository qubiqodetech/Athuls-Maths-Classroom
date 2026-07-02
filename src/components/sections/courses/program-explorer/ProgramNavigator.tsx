"use client"

import { PROGRAMS } from "./constants"
import { ProgramTab } from "./ProgramTab"

interface ProgramNavigatorProps {
  activeProgramId: string
  onSelect: (id: string) => void
}

export function ProgramNavigator({ activeProgramId, onSelect }: ProgramNavigatorProps) {
  return (
    <div className="w-full">
      <div 
        className="flex flex-col space-y-2 p-2 bg-gray-50/50 rounded-2xl border border-gray-100"
        role="tablist"
        aria-label="Programs"
      >
        {PROGRAMS.map((program) => (
          <ProgramTab
            key={program.id}
            id={program.id}
            name={program.name}
            targetClass={program.targetClass}
            icon={program.icon}
            isActive={activeProgramId === program.id}
            onClick={() => onSelect(program.id)}
          />
        ))}
      </div>
    </div>
  )
}

import { FacultyMember } from "@/src/data/faculty"
import { TeacherCard } from "./teacher-card"
import { TutorCard } from "./tutor-card"

interface FacultyGridProps {
  members: FacultyMember[];
  variant?: "teachers" | "tutors";
}

export function FacultyGrid({ members, variant = "teachers" }: FacultyGridProps) {
  if (variant === "tutors") {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {members.map((member) => (
          <TutorCard key={member.id} member={member} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member) => (
        <TeacherCard key={member.id} member={member} />
      ))}
    </div>
  )
}

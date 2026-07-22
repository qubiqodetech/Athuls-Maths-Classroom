import { Metadata } from "next";
import { TutorHero } from "@/src/components/sections/tutors/TutorHero";
import { TutorGrid } from "@/src/components/sections/tutors/TutorGrid";

export const metadata: Metadata = {
  title: "Tutors | Athul's Maths Classroom",
  description: "Meet our exceptional academic tutors dedicated to guiding students to success.",
};

export default function TutorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <TutorHero />
      <TutorGrid />
    </main>
  );
}

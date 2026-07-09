import { DecorativeIllustration } from "@/src/components/error/DecorativeIllustration"
import { ErrorHero } from "@/src/components/error/ErrorHero"
import { SearchCard } from "@/src/components/error/SearchCard"
import { QuickLinks } from "@/src/components/error/QuickLinks"
import { SmartSuggestions } from "@/src/components/error/SmartSuggestions"
import { HelpfulMessage } from "@/src/components/error/HelpfulMessage"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col justify-center py-20">
      <DecorativeIllustration />
      <ErrorHero />
      <SearchCard />
      <QuickLinks />
      <SmartSuggestions />
      <HelpfulMessage />
    </div>
  )
}


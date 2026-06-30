import * as React from "react"
import { LucideIcon, CheckCircle2 } from "lucide-react"
import { Heading, Text } from "@/src/components/typography"
import { FadeIn } from "@/src/components/motion"
import { cn } from "@/src/lib/utils"

interface FeatureItem {
  title: string
  description: string
  icon?: LucideIcon
}

interface FeatureListProps {
  features: FeatureItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export function FeatureList({ features, columns = 2, className }: FeatureListProps) {
  return (
    <div
      className={cn(
        "grid gap-8 md:gap-12",
        {
          "grid-cols-1": columns === 1,
          "grid-cols-1 md:grid-cols-2": columns === 2,
          "grid-cols-1 md:grid-cols-3": columns === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": columns === 4,
        },
        className
      )}
    >
      {features.map((feature, idx) => {
        const Icon = feature.icon || CheckCircle2

        return (
          <FadeIn key={idx} delay={0.1 * (idx % columns)} className="flex gap-4">
            <div className="shrink-0 mt-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon size={24} />
              </div>
            </div>
            <div>
              <Heading size="xs" className="mb-2">
                {feature.title}
              </Heading>
              <Text className="text-muted-foreground text-sm leading-relaxed text-balance">
                {feature.description}
              </Text>
            </div>
          </FadeIn>
        )
      })}
    </div>
  )
}

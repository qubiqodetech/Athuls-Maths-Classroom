import * as React from "react"
import { cn } from "@/src/lib/utils"
import { Heading, Text } from "@/src/components/typography"
import { FadeIn } from "@/src/components/motion"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  badge?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  badge,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12 md:mb-16",
        {
          "items-start text-left": align === "left",
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {badge && (
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
            {badge}
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.2}>
        <Heading size="l" className="max-w-3xl">
          {title}
        </Heading>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.3}>
          <Text variant="lead" className="max-w-2xl mt-2 text-muted-foreground">
            {subtitle}
          </Text>
        </FadeIn>
      )}
    </div>
  )
}

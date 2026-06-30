import * as React from "react"
import { Container } from "@/src/components/layout"
import { Text } from "@/src/components/typography"
import { FadeIn } from "@/src/components/motion"
import { cn } from "@/src/lib/utils"

interface TrustBadgesProps {
  title?: string
  badges: { name: string; url?: string }[]
  className?: string
}

export function TrustBadges({ title, badges, className }: TrustBadgesProps) {
  return (
    <section className={cn("py-12 border-y border-border/50 bg-background/50", className)}>
      <Container>
        {title && (
          <Text className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            {title}
          </Text>
        )}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {badges.map((badge, idx) => (
            <FadeIn key={idx} delay={0.1 + idx * 0.1} direction="none">
              <div className="font-display font-bold text-xl md:text-2xl tracking-tighter text-foreground/80 hover:text-primary transition-colors cursor-default">
                {badge.name}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

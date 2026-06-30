import * as React from "react"
import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Container } from "@/src/components/layout"
import { Heading, Text } from "@/src/components/typography"
import { FadeIn } from "@/src/components/motion"
import { cn } from "@/src/lib/utils"

interface HeroCenterProps {
  badge?: string
  title: React.ReactNode | string
  subtitle: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
    icon?: boolean
  }
  className?: string
}

export function HeroCenter({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: HeroCenterProps) {
  return (
    <section className={cn("relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden", className)}>
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 -top-40" />
        <div className="absolute w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl opacity-50 -bottom-40 translate-x-1/3" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {badge && (
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
                {badge}
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.2} direction="up">
            <Heading size="xl" className="tracking-tight text-balance leading-tight">
              {title}
            </Heading>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <Text variant="lead" className="max-w-2xl mx-auto text-balance">
              {subtitle}
            </Text>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="pt-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.text}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-base w-full sm:w-auto bg-background/50 backdrop-blur-sm hover:bg-accent border-primary/10"
                >
                  <Link href={secondaryCta.href}>
                    {secondaryCta.icon && <PlayCircle className="mr-2 w-5 h-5" />}
                    {secondaryCta.text}
                  </Link>
                </Button>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

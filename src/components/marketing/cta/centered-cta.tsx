import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Container } from "@/src/components/layout"
import { Heading, Text } from "@/src/components/typography"
import { FadeIn } from "@/src/components/motion"
import { cn } from "@/src/lib/utils"

interface CenteredCTAProps {
  badge?: string
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  className?: string
}

export function CenteredCTA({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: CenteredCTAProps) {
  return (
    <section className={cn("py-20 md:py-32 overflow-hidden relative", className)}>
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-16 md:py-24 text-center md:px-16 shadow-2xl">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
            <div className="h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
            <div className="h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {badge && (
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-sm font-medium text-primary-foreground mb-6 backdrop-blur-sm border border-primary-foreground/20">
                  {badge}
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.2}>
              <Heading
                size="l"
                className="text-primary-foreground mb-6 tracking-tight text-balance"
              >
                {title}
              </Heading>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Text className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto text-balance">
                {subtitle}
              </Text>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-12 w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.text}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                {secondaryCta && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 h-12 w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                  </Button>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}

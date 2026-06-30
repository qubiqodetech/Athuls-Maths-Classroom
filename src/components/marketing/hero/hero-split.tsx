import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Container } from "@/src/components/layout"
import { Heading, Text } from "@/src/components/typography"
import { FadeIn } from "@/src/components/motion"
import { cn } from "@/src/lib/utils"

interface HeroSplitProps {
  badge?: string
  title: React.ReactNode | string
  subtitle: string
  features?: string[]
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  imageSrc: string
  imageAlt: string
  className?: string
  imagePosition?: "left" | "right"
}

export function HeroSplit({
  badge,
  title,
  subtitle,
  features,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  className,
  imagePosition = "right",
}: HeroSplitProps) {
  return (
    <section className={cn("relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden", className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={cn("flex flex-col space-y-8", imagePosition === "left" && "lg:order-2")}>
            <div className="space-y-6">
              {badge && (
                <FadeIn delay={0.1}>
                  <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-sm font-medium text-secondary">
                    {badge}
                  </div>
                </FadeIn>
              )}

              <FadeIn delay={0.2}>
                <Heading size="l" className="leading-tight text-balance">
                  {title}
                </Heading>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Text variant="lead" className="text-muted-foreground">
                  {subtitle}
                </Text>
              </FadeIn>
            </div>

            {features && features.length > 0 && (
              <FadeIn delay={0.4}>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                      <Text className="text-foreground">{feature}</Text>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            <FadeIn delay={0.5} className="pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {primaryCta && (
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-8 h-12 w-full sm:w-auto shadow-md"
                  >
                    <Link href={primaryCta.href}>
                      {primaryCta.text}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="rounded-full px-6 h-12 w-full sm:w-auto"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
                  </Button>
                )}
              </div>
            </FadeIn>
          </div>

          <div className={cn("relative", imagePosition === "left" && "lg:order-1")}>
            <FadeIn delay={0.3} direction={imagePosition === "right" ? "left" : "right"}>
              <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Decorative floating elements could go here */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}

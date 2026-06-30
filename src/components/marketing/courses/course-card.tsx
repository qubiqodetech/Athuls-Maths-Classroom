import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Heading, Text } from "@/src/components/typography"
import { cn } from "@/src/lib/utils"

interface CourseCardProps {
  title: string
  description: string
  imageSrc: string
  badge?: string
  href: string
  duration?: string
  batchSize?: string
  subject?: string
  className?: string
}

export function CourseCard({
  title,
  description,
  imageSrc,
  badge,
  href,
  duration,
  batchSize,
  subject,
  className,
}: CourseCardProps) {
  return (
    <Link href={href} className="block group">
      <Card
        className={cn(
          "overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 bg-card",
          className
        )}
      >
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {badge && (
            <div className="absolute top-4 left-4 z-10">
              <Badge
                variant="secondary"
                className="shadow-sm backdrop-blur-md bg-secondary/90 text-white border-none"
              >
                {badge}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="p-5 pb-3">
          <Heading size="xs" className="line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </Heading>
        </CardHeader>

        <CardContent className="p-5 pt-0 flex-1">
          <Text className="text-muted-foreground text-sm line-clamp-3 mb-4">{description}</Text>

          <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
            {subject && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-md">
                <BookOpen size={14} className="text-primary/70" />
                <span>{subject}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-md">
                <Clock size={14} className="text-primary/70" />
                <span>{duration}</span>
              </div>
            )}
            {batchSize && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-md">
                <Users size={14} className="text-primary/70" />
                <span>{batchSize}</span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 border-t border-border/50 bg-background/50 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">View Details</span>
          <ArrowRight className="w-4 h-4 text-primary transform transition-transform group-hover:translate-x-1" />
        </CardFooter>
      </Card>
    </Link>
  )
}

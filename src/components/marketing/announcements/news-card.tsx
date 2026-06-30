import * as React from "react"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Heading, Text } from "@/src/components/typography"
import { cn } from "@/src/lib/utils"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  category?: string
  href: string
  isImportant?: boolean
  className?: string
}

export function NewsCard({
  title,
  date,
  excerpt,
  category,
  href,
  isImportant = false,
  className,
}: NewsCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <Card
        className={cn(
          "h-full overflow-hidden transition-all duration-300 hover:shadow-md border-border/50 bg-card",
          isImportant ? "border-primary/30 bg-primary/5" : "",
          className
        )}
      >
        <CardContent className="p-6 md:p-8 flex flex-col h-full relative">
          {isImportant && (
            <div className="absolute top-0 right-8 w-12 h-1 bg-primary rounded-b-md" />
          )}

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {category && (
              <Badge
                variant={isImportant ? "default" : "secondary"}
                className="shadow-none rounded-sm"
              >
                {category}
              </Badge>
            )}
            <div className="flex items-center text-xs text-muted-foreground font-medium">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              {date}
            </div>
          </div>

          <Heading
            size="xs"
            className="mb-3 group-hover:text-primary transition-colors line-clamp-2"
          >
            {title}
          </Heading>

          <Text className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">{excerpt}</Text>

          <div className="mt-auto flex items-center text-sm font-semibold text-primary">
            Read More
            <ArrowRight className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

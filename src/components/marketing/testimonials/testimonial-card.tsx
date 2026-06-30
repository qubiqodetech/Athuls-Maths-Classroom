import * as React from "react"
import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Text } from "@/src/components/typography"
import { cn } from "@/src/lib/utils"

interface TestimonialCardProps {
  quote: string
  authorName: string
  authorRole: string
  authorImage?: string
  rating?: number
  className?: string
}

export function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorImage,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "h-full border-border/50 bg-card hover:shadow-md transition-shadow relative overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-4 -left-4 text-primary/5">
        <Quote size={80} className="transform -scale-x-100" />
      </div>

      <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10">
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn("fill-current", i < rating ? "text-warning" : "text-muted")}
            />
          ))}
        </div>

        <Text className="text-foreground/90 italic mb-8 flex-1 text-balance">
          &quot;{quote}&quot;
        </Text>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
          {authorImage ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted shrink-0">
              <Image
                src={authorImage}
                alt={authorName}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
              {authorName.charAt(0)}
            </div>
          )}

          <div>
            <p className="font-semibold text-foreground text-sm">{authorName}</p>
            <p className="text-muted-foreground text-xs">{authorRole}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

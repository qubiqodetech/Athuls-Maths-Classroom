import * as React from "react"
import Image from "next/image"
import { Trophy, Star } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Heading, Text } from "@/src/components/typography"
import { Badge } from "@/src/components/ui/badge"
import { cn } from "@/src/lib/utils"

interface ResultCardProps {
  studentName: string
  exam: string
  score: string
  year: string
  imageSrc: string
  highlight?: boolean
  className?: string
}

export function ResultCard({
  studentName,
  exam,
  score,
  year,
  imageSrc,
  highlight = false,
  className,
}: ResultCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden relative group transition-all duration-300",
        highlight
          ? "border-secondary/50 shadow-md bg-secondary/5"
          : "border-border/50 hover:shadow-lg bg-card",
        className
      )}
    >
      {highlight && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full -z-0" />
      )}

      <CardContent className="p-6 relative z-10 flex flex-col items-center text-center">
        {highlight && (
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
            <Trophy size={20} />
          </div>
        )}

        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-background shadow-sm ring-1 ring-border">
          <Image src={imageSrc} alt={studentName} fill className="object-cover" sizes="96px" />
        </div>

        <Badge variant="outline" className="mb-3 text-xs font-semibold tracking-wider">
          {year}
        </Badge>

        <Heading size="xs" className="mb-1">
          {studentName}
        </Heading>
        <Text className="text-muted-foreground text-sm mb-4">{exam}</Text>

        <div className="w-full pt-4 border-t border-border/50">
          <div className="flex items-center justify-center gap-2">
            <Star className="w-5 h-5 text-warning fill-warning" />
            <span className="font-display font-bold text-2xl text-primary">{score}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import * as React from "react"
import { cn } from "@/src/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

export function Container({
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl w-full", className)}
      {...props}
    />
  )
}

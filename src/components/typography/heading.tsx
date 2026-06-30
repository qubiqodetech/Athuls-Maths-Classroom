import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils"

const headingVariants = cva("font-display font-bold tracking-tight text-foreground", {
  variants: {
    size: {
      xl: "text-5xl md:text-6xl lg:text-7xl",
      l: "text-4xl md:text-5xl lg:text-6xl",
      m: "text-3xl md:text-4xl",
      s: "text-2xl md:text-3xl",
      xs: "text-xl md:text-2xl",
    },
  },
  defaultVariants: {
    size: "m",
  },
})

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({
  className,
  size,
  as: Component = "h2",
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  )
}

import { LucideIcon, icons } from "lucide-react"
import { cn } from "@/src/lib/utils"

export type IconName = keyof typeof icons

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName
  className?: string
  size?: number | string
  strokeWidth?: number
}

export function Icon({
  name,
  className,
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps) {
  const LucideIconComponent = icons[name] as LucideIcon

  if (!LucideIconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react.`)
    return null
  }

  return (
    <LucideIconComponent
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  )
}

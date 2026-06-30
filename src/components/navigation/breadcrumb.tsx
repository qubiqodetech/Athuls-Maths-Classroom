import * as React from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/src/lib/utils"

export interface BreadcrumbItem {
  title: string
  href: string
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm text-muted-foreground", className)}
      {...props}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            aria-label="Home"
          >
            <Home size={16} />
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <React.Fragment key={item.href}>
              <li>
                <ChevronRight size={16} className="opacity-50" />
              </li>
              <li>
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.title}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

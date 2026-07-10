import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to merge tailwind classes securely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Standard animation curves for Framer Motion
 */
export const animationCurves = {
  apple: [0.16, 1, 0.3, 1],
  smooth: [0.22, 1, 0.36, 1],
  bouncy: [0.68, -0.55, 0.26, 1.55],
}

/**
 * Standard animation variants for Framer Motion
 */
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: animationCurves.apple
    }
  }
}

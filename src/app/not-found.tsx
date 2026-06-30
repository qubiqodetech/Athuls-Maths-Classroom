import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto py-32 flex flex-col items-center justify-center min-h-[70vh] space-y-6 text-center">
      <h1 className="font-display text-6xl font-bold tracking-tight text-primary">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      {/* 
        Temporarily using a simple link. 
        In Phase 2, this will be replaced with the custom Button component.
      */}
      <Link 
        href="/" 
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Return to Home
      </Link>
    </div>
  )
}

import type { Metadata, Viewport } from "next"
import { Inter, Sora } from "next/font/google"
import { Providers } from "@/src/providers"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"

import { AnnouncementBar } from "@/src/components/layout/announcement-bar"
import { Navbar } from "@/src/components/layout/navbar"
import { Footer } from "@/src/components/layout/footer"
import { FloatingActions } from "@/src/components/layout/floating-actions"
import { CookieBanner } from "@/src/components/layout/cookie-banner"
import { GlobalLoading } from "@/src/components/layout/global-loading"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.theme.primary },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.theme.primary },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: ["Mathematics", "Education", "Athul", "Classroom", "Kerala", "Tuition", "Maths"],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@athulsmaths",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          sora.variable
        )}
      >
        <Providers>
          <GlobalLoading />
          <div className="relative flex min-h-screen flex-col">
            <AnnouncementBar 
              message="Admissions open for 2026 Batch. Limited seats available." 
              href="/admissions" 
              ctaText="Apply Now" 
            />
            <Navbar />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
          </div>
          <FloatingActions />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  )
}

import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";
import { GlobalSearch } from "@/src/components/layout/global-search";
import { FloatingActions } from "@/src/components/layout/floating-actions";
import { ScrollProgress } from "@/src/components/layout/scroll-progress";
import { ReadingProgress } from "@/src/components/scroll/ReadingProgress";
import { Toaster } from "sonner";
import { Inter, Sora } from 'next/font/google';
import { MotionConfig } from "@/src/components/transitions/MotionConfig";
import { LoadingBar } from "@/src/components/transitions/LoadingBar";
import { NavigationEvents } from "@/src/components/transitions/NavigationEvents";
import { TransitionOverlay } from "@/src/components/transitions/TransitionOverlay";
import { PageTransitionProvider } from "@/src/components/transitions/PageTransitionProvider";
import { ScrollProvider } from "@/src/components/scroll/ScrollProvider";
import { PerformanceProvider } from "@/src/components/performance/PerformanceProvider";
import { OrganizationSchema } from "@/src/components/seo/OrganizationSchema";

import { PreloaderProvider } from "@/src/components/preloader/PreloaderProvider";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: "%s | Athul's Maths Classroom",
    default: "Athul's Maths Classroom | Next Generation Educational Platform",
  },
  description: "Transforming mathematics education with premium learning experiences, expert faculty, and exceptional results in Kerala.",
  keywords: ["Mathematics", "Tuition", "Kerala", "Maths Classes", "Athul's Maths Classroom", "Education"],
  authors: [{ name: "Athul's Maths Classroom" }],
  creator: "Athul's Maths Classroom",
  publisher: "Athul's Maths Classroom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Athul's Maths Classroom",
    description: "Transforming mathematics education with premium learning experiences, expert faculty, and exceptional results in Kerala.",
    url: "https://athulsmathsclassroom.com",
    siteName: "Athul's Maths Classroom",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athul's Maths Classroom",
    description: "Transforming mathematics education with premium learning experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://athulsmathsclassroom.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased selection:bg-primary-red/20 selection:text-primary-navy">
        <PerformanceProvider>
          <OrganizationSchema />
          <PreloaderProvider>
            <MotionConfig>
              <LoadingBar />
              <NavigationEvents />
              <TransitionOverlay />
              <ScrollProgress />
              <ReadingProgress />
              <Navbar />
              <GlobalSearch />
              <ScrollProvider>
                <PageTransitionProvider>
                  {children}
                </PageTransitionProvider>
              </ScrollProvider>
              <Footer />
              <FloatingActions />
              <Toaster position="bottom-right" richColors />
            </MotionConfig>
          </PreloaderProvider>
        </PerformanceProvider>
      </body>
    </html>
  );
}

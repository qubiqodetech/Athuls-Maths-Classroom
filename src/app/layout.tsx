import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";
import { GlobalSearch } from "@/src/components/layout/global-search";
import { FloatingActions } from "@/src/components/layout/floating-actions";
import { ScrollProgress } from "@/src/components/layout/scroll-progress";
import { Toaster } from "sonner";
import { Inter, Sora } from 'next/font/google';
import { MotionConfig } from "@/src/components/transitions/MotionConfig";
import { LoadingBar } from "@/src/components/transitions/LoadingBar";
import { NavigationEvents } from "@/src/components/transitions/NavigationEvents";
import { TransitionOverlay } from "@/src/components/transitions/TransitionOverlay";
import { PageTransitionProvider } from "@/src/components/transitions/PageTransitionProvider";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const metadata: Metadata = {
  title: "Athul's Maths Classroom",
  description: "Next Generation Educational Platform for Mathematics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased selection:bg-primary-red/20 selection:text-primary-navy">
        <MotionConfig>
          <LoadingBar />
          <NavigationEvents />
          <TransitionOverlay />
          <ScrollProgress />
          <Navbar />
          <GlobalSearch />
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
          <Footer />
          <FloatingActions />
          <Toaster position="bottom-right" richColors />
        </MotionConfig>
      </body>
    </html>
  );
}

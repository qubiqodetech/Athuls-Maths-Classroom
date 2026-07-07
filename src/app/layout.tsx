import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";
import { GlobalSearch } from "@/src/components/layout/global-search";

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
    <html lang="en">
      <body>
        <Navbar />
        <GlobalSearch />
        {children}
        <Footer />
      </body>
    </html>
  );
}

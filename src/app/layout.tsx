import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/src/components/layout/navbar";

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
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

import { Public_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DevCortex - Digital Agency",
  description:
    "A hybrid digital agency bridging the gap between rapid deployment and enterprise-grade engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} font-sans bg-gray-50 text-slate-900 antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

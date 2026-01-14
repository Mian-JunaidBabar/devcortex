import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "../components/theme-provider";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevCortex | Digital Intelligence Agency",
  description: "Bridging High-Performance Engineering with Strategic Marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}